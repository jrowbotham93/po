import React from 'react';
import Divider from '../components/Divider';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Card from '../components/Card.js';

function Contact() {
  return (
    <React.Fragment>
      <div className="container">
        <section className="ui grid">
          <div className="row">
            <div className="sixteen wide tabley eight wide computer column">
              <h1>
                'We’re always looking for grocery partners, talent, and
                investors who share our vision of a fresher future. '
              </h1>
            </div>
          </div>
          <div className="row margin-top">
            <h2>Contact us</h2>
          </div>
          <div class="ui equal width stackable grid">
            <div className="row">
              <div className=" column">
                <p>Eugene Blokhin</p>
                <p>Logistics & Marketing </p>
                <p>
                  <a href="mailto:eugene.blokhin@proorganica.com" target="_top">
                    eugene.blokhin@proorganica.com
                  </a>
                </p>
                <p>Mobile: +380 67 544-93-37</p>
              </div>
              <div className=" column">
                <p>Pavel Gukov</p>
                <p>Sales & Marketing</p>
                <p>
                  <a href="mailto:pavel.gukov@proorganica.com" target="_top">
                    pavel.gukov@proorganica.com
                  </a>
                </p>
                <p>Mobile: +380 50 807-93-15</p>
              </div>
              <div className=" column">
                <p>Iryna Sholokhova</p>
                <p>Quality & Certification</p>
                <p>
                  <a
                    href="mailto:iryna.sholokhova@proorganica.com"
                    target="_top"
                  >
                    iryna.sholokhova@proorganica.com
                  </a>
                </p>
                <p> Mobile: +380 67 544-93-37</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
