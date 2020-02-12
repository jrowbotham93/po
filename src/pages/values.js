import React from 'react';
import svgWheat from '../images/wheat.svg';
import TextTranslator from '../components/TextTranslator';
import Divider from '../components/Divider';

function Values() {
  return (
    <div className="services">
      <section className="ui stacked grid">
        <div className="row margin-top">
          <div className="sixteen wide tablet eight wide computer column text">
            <h1>
              <TextTranslator label={'ourValuesHeading'} />
            </h1>
            <Divider></Divider>
            <h3>
              <TextTranslator label={'valuesSubHeadingA'} />
            </h3>
            <p>
              <TextTranslator label={'valuesTextA'} />
            </p>
            <hr></hr>
            <h3>
              <TextTranslator label={'valuesSubHeadingB'} />
            </h3>
            <p>
              <TextTranslator label={'valuesTextB'} />
            </p>
            <hr></hr>
            <h3>
              <TextTranslator label={'valuesSubHeadingC'} />
            </h3>
            <p>
              <TextTranslator label={'valuesTextC'} />
            </p>
            <hr></hr>
          </div>
          <div className="sixteen wide tablet eight wide computer column center">
            <img className="image" src={svgWheat} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Values;
