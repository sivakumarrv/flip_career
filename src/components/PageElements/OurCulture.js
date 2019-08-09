import React, { Suspense } from 'react'

import OurTenets from './OurTenets'
import Benefits from './Benefits'
import SectionTitle from './SectionTitle'

import {
  PRIDE_ICON,
  RELIABILITY_ICON,
  HUMANITY_ICON,
  INCLUSIVITY_ICON,
  HEALTH_ICON,
  POLICY_ICON,
  MATERNITY_ICON,
  PLAN_ICON,
  MILESTONE_ICON
} from '../../constants/SiteElements'
import { OUR_CULTURE } from '../../constants/SiteContent'

/* Lazy load */
const FunEvents = React.lazy(() => import('./FunEvents'))

const ourTenets = [
  {
    title: 'Pride',
    icon: PRIDE_ICON,
    description: 'We take pride in whatever we do'
  },
  {
    title: 'Reliability',
    icon: RELIABILITY_ICON,
    description: 'We rely on each other 200% to achieve the end goal'
  },
  {
    title: 'Humanity',
    icon: HUMANITY_ICON,
    description: 'We believe in harboring love and respect for all'
  },
  {
    title: 'Inclusivity',
    icon: INCLUSIVITY_ICON,
    description:
      'We do not discriminate based on age, caste, color, gender or sexual preferences'
  }
]

const benefits = [
  {
    icon: MILESTONE_ICON,
    description: 'Celebrating personal milestones'
  },
  {
    icon: POLICY_ICON,
    description: 'Employee friendly comprehensive leave policy'
  },
  {
    icon: PLAN_ICON,
    description: 'ESOPs (Employee Stock Ownership Plan)'
  },
  {
    icon: HEALTH_ICON,
    description: 'Health Insurance'
  },
  {
    icon: MATERNITY_ICON,
    description: 'Maternity and Paternity benefits'
  }
]

const OurCulture = () => {
  const htmlOurTenets = ourTenets.map(ourTenet => {
    return (
      <OurTenets
        key={ourTenet.title}
        title={ourTenet.title}
        icon={ourTenet.icon}
        description={ourTenet.description}
      />
    )
  })
  const htmlBenefits = benefits.map(benefit => {
    return (
      <Benefits
        key={benefit.description}
        icon={benefit.icon}
        description={benefit.description}
      />
    )
  })
  return (
    <section className="hero is-white" id="ourCulture">
      <div className="hero-body">
        <div className="container">
          <h2 className="title has-text-centered is-uppercase has-text-flip-red hr-line">
            {OUR_CULTURE}
          </h2>
          <p className="has-text-left">
            FLIP is not just a place of work; it&rsquo;s a <b>WAY OF LIFE!</b>{' '}
            We represent India via our multi-cultural and multi-lingual team
            &ndash; from <b>16 states</b> and speaking <b>12 languages.</b>{' '}
            There is{' '}
            <b>Unity in Diversity in our &lsquo;Little India.&rsquo;</b> We
            value every ethnicity and learn from each other. Here are the
            guiding principles for every FLIPian;
          </p>
          <SectionTitle title="Our Tenets:" />
          <div className="columns has-text-centered">{htmlOurTenets}</div>
          <SectionTitle title="Bouquet of Benefits:" />
          <div className="columns has-text-centered">{htmlBenefits}</div>
          <Suspense fallback="<div>Loading...</div>">
            <FunEvents />
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default OurCulture
