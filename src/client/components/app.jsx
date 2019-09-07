import React, { Component } from 'react';
import Hero from './hero/hero.jsx';
import CaseStudies from './caseStudies/caseStudies.jsx';
import WhatWeDo from './whatWeDo/whatWeDo.jsx';
import Clients from './clients/clients.jsx';
import OurServices from './ourServices/ourServices.jsx';
import ContactUs from './ContactUs/contactUs.jsx';
import Testimonials from './testimonials/testimonials.jsx';
import Footer from './footer/footer.jsx';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <div id="page-content-wrapper">
          <div id="page-content-container">
            <CaseStudies />
            <WhatWeDo />
            <Clients />
            <OurServices />
            <ContactUs />
            <Testimonials />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}