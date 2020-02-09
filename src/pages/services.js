import React from 'react';
import crops from '../images/crops.jpg';
import farm from '../images/farm.jpg';
import grain from '../images/grain.jpg';
import containers from '../images/containers.jpg';
import TextTranslator from '../components/TextTranslator';

function Products() {
  return (
    <div className="services">
      <div className="container">
        <section className="ui centered grid">
          <div className="row">
            <div className="sixteen wide tablet eight wide computer column">
              <h1 className="centered">
                <TextTranslator label={'serviceHeading'} />
              </h1>
              <p className="centered text-md">
                <TextTranslator label={'serviceText'} />
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="ui stackable grid">
        <div className="row margin-top">
          <div className="eight wide column text">
            <h3>
              <TextTranslator label={'sourcingHeading'} />
            </h3>
            <p>
              <TextTranslator label={'sourcingText'} />
            </p>
          </div>
          <div className="eight wide column">
            <img src={crops} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="eight wide computer column">
            <img src={farm} alt="" />
          </div>
          <div className="eight wide computer column text">
            <h3>
              <TextTranslator label={'purchasingHeading'} />
            </h3>
            <p>
              <TextTranslator label={'purchasingText'} />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight wide computer column text">
            <h3>
              <TextTranslator label={'handlingHeading'} />
            </h3>
            <p>
              <TextTranslator label={'handlingText'} />
            </p>
          </div>
          <div className="eight wide computer column">
            <img src={grain} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="eight wide computer column">
            <img src={containers} alt="" />
          </div>
          <div className="eight wide computer column text">
            <h3>
              <TextTranslator label={'exportingHeading'} />
            </h3>
            <p>
              <TextTranslator label={'exportingTextA'} />
            </p>
            <p>
              <TextTranslator label={'exportingTextB'} />
            </p>
            <p>
              <TextTranslator label={'exportingTextC'} />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight wide computer column text">
            <h3>
              <TextTranslator label={'qualityControlHeading'} />
            </h3>
            <p>
              <TextTranslator label={'qualityControlText'} />
            </p>
          </div>
          <div className="eight wide computer column">
            <img src={crops} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="eight wide computer column text align-left">
            <p>
              *According to Article 29 of regulations (EC) №834/2007 and
              889/2008 annex XII.
            </p>
            <p>
              **We can ship the products in paper bags of various weights: 20
              kg, 25 kg, 50 kg, 1 ton Big bags or in bulk according to
              customer’s requirements, as well as provide packages with specific
              labels or prints.
            </p>
            <p>***EC Regulation no.178/2002 and EU Regulation no. 834/07.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
