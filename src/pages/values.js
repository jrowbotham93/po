import React from 'react';
import Menu from '../Menu.js';
import Grid from '../Grid.js';
import Header from '../Header.js';
import Footer from '../Footer.js';

function Values() {
  return (
    <React.Fragment>
      <section className="section-a">
        <div className="container-a">
          <Header
            style={'ui huge header'}
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

export default Values;
