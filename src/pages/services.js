import React from 'react';
import crops from '../images/crops.jpg';
import grainHand from '../images/grain-hand.jpg';
import grain from '../images/grain.jpg';
import containers from '../images/containers.jpg';
import TextTranslator from '../components/TextTranslator';
import certificateA from '../files/Chemex_Organic_Certificate(EU).pdf';
import certificateB from '../files/Chemex_Organic_Certificate(COR).pdf';

function Services() {
  return (
    <div className="services">
      <div className="container">
        <section className=" ui centered grid">
          <div className="row">
            <div className="sixteen wide tablet eight wide computer column">
              <h1 className="centered">
                <TextTranslator label={'ourServicesHeading'} />
              </h1>
              <p className="centered text-md">
                <TextTranslator label={'serviceText'} />
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="reverse-columns ui stackable grid">
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
            <img src={grainHand} alt="" />
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
              <TextTranslator label={'handlingHeading'} />
            </h3>
            <p>
              <TextTranslator label={'handlingText'} />
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
            <div>
              <p>
                <a className="green" download href={certificateA}>
                  {' '}
                  Organic Standard Certification (EU)
                </a>
              </p>

              <p>
                <a className="green" download href={certificateB}>
                  {' '}
                  Chemex Product Certification
                </a>
              </p>
            </div>
          </div>
          <div className="eight wide computer column">
            <img src={crops} alt="" />
          </div>
        </div>
        <div className="row margin-top-medium">
          <div className="eight wide computer column text align-left">
            <p>
              <TextTranslator label={'servicesFootnoteA'} />
            </p>
            <p>
              <TextTranslator label={'servicesFootnoteB'} />
            </p>
            <p>
              <TextTranslator label={'servicesFootnoteC'} />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
