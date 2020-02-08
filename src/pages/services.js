import React from 'react';
import Menu from '../components/Menu.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Services() {
  return (
    <React.Fragment>
      <section className="section-a">
        {/* <Menu/> */}
        <div className="container-a">
          <Header
            text={
              'Drop us an e-mail if you would like to find out more about ProOrganica and our work in Ukraine'
            }
          />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default Services;
