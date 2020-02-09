import React from 'react';
import svgUkraine from '../images/ukraine.svg';
import TextTranslator from "../components/TextTranslator";

function Ukraine() {
  return (
    <div className="services">
      <div className="container">
        <section className="ui centered grid">
          <div className="row">
            <div className="sixteen wide tablet eight wide computer column">
              <h1 className="centered"><TextTranslator label={'ukraineHeading'}/></h1>
              <p className="centered text-md"><TextTranslator label={'ukraineTextA'}/></p>
            </div>
          </div>
        </section>
      </div>
      <section className="ui stacked grid">
        <div className="row margin-top">
          <div className="sixteen wide tablet eight wide computer column text">
            <h3><TextTranslator label={'ukraineSubHeadingA'}/></h3>
            <p><TextTranslator label={'ukraineTextB'}/></p>
            <h3><TextTranslator label={'ukraineSubHeadingB'}/></h3>
            <p><TextTranslator label={'ukraineTextC'}/></p>
            <h3><TextTranslator label={'ukraineSubHeadingC'}/></h3>
            <p><TextTranslator label={'ukraineTextD'}/></p>
            <h3><TextTranslator label={'ukraineSubHeadingD'}/></h3>
            <p><TextTranslator label={'ukraineTextE'}/></p>
          </div>
          <div className="sixteen wide tablet eight wide computer column">
            <img className="image" src={svgUkraine} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ukraine;
