import React from 'react';
import Grid from '../components/Grid.js';
import Header from '../components/Header.js';
import Button from '../components/Button.js';
import logo from '../images/logo.jpg';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';


function Home() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="section-a">
        <div className="container-b text-align">
          <Image size="large" src={logo} />
          <Header
            styleA={'text-lg text-black line-height'}
            styleB={'text-md-hover line-height'}
            text={'headingMain'}
          />
          <Link to={`/${i18n.language}/contact`}>
            <Button styles={'btn-lg btn'} text={t('contactHeading')}></Button>
          </Link>
        </div>
      </section>
      <section className="container  section-b">
        <Grid />
      </section>
    </React.Fragment>
  );
}

export default Home;
