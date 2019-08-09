import React, { Component } from 'react'

import Nav from './components/PageElements/Nav'
import FullHeightBanner from './components/PageElements/FullHeightBanner'
import JoinFlip from './components/PageElements/JoinFlip'
import OurCulture from './components/PageElements/OurCulture'
import Testimonials from './components/PageElements/Testimonials'
import JobOpenings from './components/PageElements/JobOpenings'
import Footer from './components/PageElements/Footer'

import 'bulma/css/bulma.css'
import './css/flip-careers.scss'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <FullHeightBanner />
        <JoinFlip />
        <OurCulture />
        <Testimonials />
        <JobOpenings />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
