import React from 'react';
import cropA from '../images/cropB.svg';
import cropB from '../images/cropA.svg';
import TextTranslator from '../components/TextTranslator';

function Story() {
  return (
    <div className="services">
      <div className="margin-top">
        <section className="ui centered stackable grid">
          <div className="row">
            <div className="sixteen wide tablet eight wide computer column">
              <h1 className="centered">
                <TextTranslator label={'ourStoryHeading'} />
              </h1>
              <p className="centered text-md">
                <TextTranslator label={'ourStoryTextA'} />
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="ui stackable grid">
        <div className="row margin-top">
          <div className="sixteen wide tablet eight wide computer column text">
            <h2>
              <TextTranslator label={'ourStorySubHeadingA'} />
            </h2>
            <p>
              <TextTranslator label={'ourStoryTextB'} />
            </p>
            <h2>
              <TextTranslator label={'ourStorySubHeadingB'} />
            </h2>
            <p>
              <TextTranslator label={'ourStoryTextC'} />
            </p>
          </div>
          <div className="mobile hidden sixteen wide tablet eight wide computer column ">
            <img className="image-sm" src={cropA} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Story;
