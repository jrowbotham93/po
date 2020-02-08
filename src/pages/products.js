
import React from "react";
import Menu from '../components/Menu.js';
import Grid from '../components/Grid.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Products() {
    return(
    <React.Fragment>
        <section className="section-a">
          <Menu/>
            <div className="container-a">
              <Header
                  style={"ui huge header"}
                  text={"Drop us an e-mail if you would like to find out more about ProOrganica and our work in Ukraine"}
              />
            </div>
        </section>
      <Footer/>
    </React.Fragment>
  );
}

export default Products;