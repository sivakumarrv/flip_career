import React from 'react'
import Loading from './Loading'
import { Link as ScrollLink, scrollSpy as ScrollSpy } from 'react-scroll'

/* FontAwesome */
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CURRENT_OPENINGS } from '../../constants/SiteContent'

class JobOpenings extends React.Component {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      selectedJobCategory: null,
      jobCategories: [],
      jobOpenings: [],
      activeJobOpenings: [],
      hasFiltered: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.setActiveJobCategory = this.setActiveJobCategory.bind(this)
    this.createJobCountMarkup = this.createJobCountMarkup.bind(this)
  }

  componentDidMount() {
    fetch('/json/job-openings.json')
      .then(res => {
        if (res.status === 200) return res.json()
        return []
      })
      .then(json => {
        const jobCategories = json.job_categories
          ? json.job_categories.sort()
          : []
        const jobOpenings = json.job_openings ? json.job_openings : []

        let selectedJobCategory = null
        let activeJobOpenings = []
        jobCategories.map(jobCategory => {
          if (selectedJobCategory === null && jobOpenings[jobCategory]) {
            selectedJobCategory = jobCategory
            activeJobOpenings = jobOpenings[jobCategory]
          }
          return []
        })

        this.setState(
          {
            jobCategories: jobCategories,
            jobOpenings: jobOpenings,
            activeJobOpenings: activeJobOpenings,
            selectedJobCategory: selectedJobCategory,
            isLoading: false
          },
          () => {
            ScrollSpy.update()
          }
        )
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleClick(e) {
    e.preventDefault()
    const jobCategory = e.currentTarget.attributes['data-value'].value

    this.setActiveJobCategory(jobCategory)
  }

  setActiveJobCategory(jobCategory) {
    const activeJobOpenings = this.state.jobOpenings[jobCategory]
      ? this.state.jobOpenings[jobCategory]
      : []

    this.setState({
      selectedJobCategory: jobCategory,
      activeJobOpenings: activeJobOpenings,
      hasFiltered: true
    })
  }

  /**
   * Generate spacing & jobs count html
   * @param {number} totalJobsCount
   */
  createJobCountMarkup(totalJobsCount) {
    return {
      __html: totalJobsCount > 0 ? `${totalJobsCount}` : null
    }
  }

  render() {
    const {
      isLoading,
      jobOpenings,
      jobCategories,
      activeJobOpenings,
      selectedJobCategory,
      hasFiltered
    } = this.state
    if (isLoading) {
      return <Loading />
    }
    if (jobOpenings.length === 0) {
      return null
    }
    let activeCategory = null
    const htmlJobCategories = jobCategories.map(jobCategory => {
      let totalJobsCount = jobOpenings[jobCategory]
        ? jobOpenings[jobCategory].length
        : 0

      let makeCategoryActive = false
      if (activeCategory === null) {
        makeCategoryActive = hasFiltered !== true && totalJobsCount > 0
        activeCategory = makeCategoryActive ? jobCategory : activeCategory
      }
      const btnClassName =
        'is-uppercase is-size-6' +
        (jobCategory === selectedJobCategory || makeCategoryActive
          ? ' is-active has-text-link has-text-weight-semibold '
          : '')
      return (
        <li key={jobCategory}>
          <ScrollLink
            data-value={jobCategory}
            className={btnClassName}
            onClick={this.handleClick}
            to="jobOpenings"
            spy={true}
            smooth={true}
            offset={-100}
            duration={250}
          >
            {jobCategory} &nbsp;
            <span
              className="tag is-primary has-text-weight-bold"
              dangerouslySetInnerHTML={this.createJobCountMarkup(
                totalJobsCount
              )}
            />
          </ScrollLink>
        </li>
      )
    })

    const htmlJobOpenings =
      selectedJobCategory !== null ? (
        activeJobOpenings.length > 0 ? (
          activeJobOpenings.map(jobOpening => {
            return <JobOpening key={jobOpening.title} data={jobOpening} />
          })
        ) : (
          <div className="column is-flex">
            <div className="box is-shadowless mt-1rem is-full">
              <div className="notification is-danger">
                <h4 className="is-size-5">
                  Currently, we do not have any openings for this business unit.
                </h4>
              </div>
            </div>
          </div>
        )
      ) : null

    return (
      <section className="hero is-white" id="currentOpenings">
        <div className="hero-body">
          <div className="container">
            <h2 className="title has-text-centered is-uppercase has-text-flip-red hr-line">
              {CURRENT_OPENINGS}
            </h2>
            <p className="mb-1rem">
              Following are the roles we are currently hiring for. We are a
              dynamic young organization looking for talented people all the
              time, so keep checking this page regularly.{' '}
              <b>
                But, if you think you are exceptional and a good fit for us,
                please send your CV to
                <a
                  href="mailto:careers@learnwithflip.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="has-text-link"
                >
                  &nbsp;
                  <u>careers@learnwithflip.com</u>
                  &nbsp;
                </a>
                and we will try to create a role for you.
              </b>
            </p>
            <div className="columns">
              <div className="column is-4 mt-1rem">
                <aside className="menu sticky-sidebar job-opening-list">
                  <h3 className="title is-size-5 has-text-link subtitle-hr-line">
                    OPPORTUNITIES AVAILABLE
                  </h3>
                  <ul className="menu-list">{htmlJobCategories}</ul>
                </aside>
              </div>
              <div className="column">
                <div id="jobOpenings">{htmlJobOpenings}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const JobOpening = props => {
  const { data } = props
  const jobTitle = data.title ? data.title : ''
  const jobExperience = data.experience ? data.experience : ''
  const jobLocation = data.location ? data.location : ''
  const jobDescription = data.description ? data.description : ''
  const jobApplyLink = data.apply_link ? data.apply_link : ''
  const jobJdLink = data.jd_link ? data.jd_link : ''
  return (
    <div className="column is-full">
      <div className="message is-primary is-box-shadow">
        <div className="message-header">
          <h3 className="is-size-5 has-text-weight-semibold">
            <FontAwesomeIcon icon={faBriefcase} />
            &nbsp; Role: {jobTitle}
          </h3>
        </div>
        <div className="message-body">
          <div className="content is-size-6">
            <p>
              <b>Experience:</b> {jobExperience}
            </p>
            <p>
              <b>Location:</b> {jobLocation}
            </p>
            <p>
              <b>Description:</b> {jobDescription}
            </p>
            {(jobApplyLink !== '' || jobJdLink !== '') && (
              <div className="buttons">
                {jobApplyLink !== '' && (
                  <a
                    className="button is-link"
                    href={jobApplyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                )}
                {jobJdLink !== '' && (
                  <a
                    className="button is-info"
                    href={jobJdLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Job Description
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobOpenings
