import React from 'react';
import Footer from '../components/Footer.js';

function Products() {
  return (
    <React.Fragment>
      <div className="container stackable centered">
        <section className="ui centered grid">
          <div className="row">
            <div className="sixteen wide tabley eight wide computer column">
              <h1 className="centered">Our Products</h1>
              <p className="centered text-md">
                We have established reliable partnerships with Ukrainian and
                international companies to offer a wide range of organic
                agricultural products, foremost grains/seeds and vegetable oils
                to our manufacturing partners.
              </p>
            </div>
          </div>
          <div className="row margin-top-medium">
            <div className="sixteen wide tabley eight wide computer column">
              <h3>Our main organic products include:</h3>
              <table class="ui unstackable table">
                <thead>
                  <tr>
                    <th>Cereal grains</th>
                    <th>Pulses</th>
                    <th>Oil seeds</th>
                    <th>Oils</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Corn</td>
                    <td>Soybean</td>
                    <td>Sunflower</td>
                    <td>Sunflower oil refined</td>
                  </tr>
                  <tr>
                    <td>Wheat</td>
                    <td>Lupine</td>
                    <td>Hemp</td>
                    <td>Deodorized Winterized</td>
                  </tr>
                  <tr>
                    <td>Elyse</td>
                    <td>24</td>
                    <td>Designer</td>
                    <td>Designer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Products;
