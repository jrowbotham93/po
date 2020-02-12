import React, { useRef } from 'react';
import Grid from '../components/Grid.js';
import Header from '../components/Header.js';
import logo from '../images/logo.jpg';
import { Image } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 80);

const Home = () => {
  const { t } = useTranslation();
  const myRef = useRef(null);

  return (
    <React.Fragment>
      <section className="section-a">
        <div className="container-b text-align">
          <Image size="large" src={logo} />
          <Header
            styleA={'text-lg text-black line-height-low'}
            styleB={'text-md-hover line-height-low'}
            text={'headingMain'}
          />
          <h4 className="text-black">{t('headingSub')}</h4>
          <button
            onClick={() => scrollToRef(myRef)}
            className={'btn-lg btn btn-animated'}
          >
            {t('readMore')}
          </button>
        </div>
      </section>
      <section className="container section-b flex-center" ref={myRef}>
        <Grid />
      </section>
    </React.Fragment>
  );
};

export default Home;
