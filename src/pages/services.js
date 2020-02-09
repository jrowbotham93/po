import React from 'react';
import crops from '../images/crops.jpg';
import farm from '../images/farm.jpg';
import grain from '../images/grain.jpg';
import containers from '../images/containers.jpg';
function Products() {
  return (
    <div className="services">
      <div className="container">
        <section className="ui centered grid">
          <div className="row">
            <div className="sixteen wide tablet eight wide computer column">
              <h1 className="centered">Our Services</h1>
              <p className="centered text-md">
                We primarily focus on business-to-business partnerships and have
                proven expertise in sourcing, purchasing, and handling as well
                as processing and supply capabilities.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="ui stacked grid">
        <div className="row margin-top">
          <div className="sixteen wide tablet eight wide computer column text">
            <h3>Sourcing</h3>
            <p>
              All the farms we work with are certified organic* and all the raw
              materials that we process go through strict hygiene/sanitary
              checks performed by independent accredited laboratories.
            </p>
          </div>
          <div className="sixteen wide tablet eight wide computer column">
            <img src={crops} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="sixteen wide tablet eight wide computer column">
            <img src={farm} alt="" />
          </div>
          <div className="sixteen wide tablet eight wide computer column text">
            <h3>Purchasing</h3>
            <p>
              We always purchase produce directly from Ukrainian organic farmers
              at a fair price, supporting small and family companies across the
              region.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="sixteen wide tablet eight wide computer column text">
            <h3>Handling</h3>
            <p>
              We are the first independently certified service facilities in
              Ukraine for the cleaning, sorting, packaging** and storing of
              organic grains and pulses.
            </p>
          </div>
          <div className="sixteen wide tablet eight wide computer column">
            <img src={grain} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="sixteen wide tablet eight wide computer column">
            <img src={containers} alt="" />
          </div>
          <div className="sixteen wide tablet eight wide computer column text">
            <h3>Exporting</h3>
            <p>
              We can arrange for reliable and cost-effective international
              transport of products by rail, vessel, barge, container and truck.
              Containers are shipped via Odessa, Ochakiv or
              Bilhorod-Dnistrovskyi sea ports.
            </p>
            <p>
              Ukraine's location on the Black Sea allows us to offer fast export
              processing and low freight rates to major European, Asian and
              African markets.
            </p>
            <p>
              We ensure that all shipping and logistics are conducted by
              certified organic freight forwarders to maintain the organic
              integrity of our supply chain.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="sixteen wide tablet eight wide computer column text">
            <h3>Quality Control</h3>
            <p>
              We provide full traceability and transparency throughout our
              entire supply-chain and take charge of conducting quality checks
              and product analysis which go above and beyond the regulatory
              standards***. This allows our manufacturers and retailers to
              validate claims about products and practices and communicate these
              to customers.
            </p>
          </div>
          <div className="sixteen wide tablet eight wide computer column">
            <img src={crops} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
