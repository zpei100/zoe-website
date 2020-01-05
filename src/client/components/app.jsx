import React, { Component } from 'react';
import Hero from './hero/hero.jsx';
import CaseStudies from './caseStudies/caseStudies.jsx';
import AboutUs from './AboutUs/aboutUs.jsx';
import Clients from './clients/clients.jsx';
import OurService from './ourService/ourService.jsx';
import ContactUs from './ContactUs/contactUs.jsx';
import Testimonials from './testimonials/testimonials.jsx';
import Footer from './footer/footer.jsx';

import applicationState from '../../applicationState/applicationState';

export default class App extends Component {
  constructor() {
    super();
    this.state = applicationState;
  }

  render() {
    const {hero, caseStudies, clients, aboutUs, ourService} = this.state;

    return (
      <React.Fragment>
        <Hero hero={hero}/>
        <div id="page-content-wrapper">
          <div id="page-content-container">
            <AboutUs aboutUs={aboutUs}/>
            <OurService ourService={ourService}/>
            <CaseStudies caseStudies={caseStudies} />
            <Clients clients={clients}/>
            {/* <ContactUs /> */}
            {/* <Testimonials /> */}
          </div>
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}