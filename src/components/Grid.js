import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
import svgA from '../images/earth-outline.svg';
import svgB from '../images/layers-outline.svg';
import svgC from '../images/leaf-outline.svg';
import svgD from '../images/library-outline.svg';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

function Grid() {
  const { t } = useTranslation();

  return (
    <div className="ui stackable grid reverse-columns padding">
      <div className="row">
        <div className="eight wide column text">
          <img className="image" src={svgB}></img>
        </div>
        <div className="eight wide column text">
          <Link to={`/${i18n.language}/services`}>
            <Header
              styleA={'text-md-hover line-height text-black'}
              styleB={'text-sm line-height'}
              text={'ourServicesHeading'}
              subtext={'ourServicesSubHead'}
            ></Header>
            <Button styles={'btn btn-sm'} text={t('readMore')}></Button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="eight wide column text">
          <Link to={`/${i18n.language}/products`}>
            <Header
              styleA={'text-md-hover line-height text-black'}
              styleB={'text-sm line-height'}
              text={'ourProductsHeading'}
              subtext={'ourProductsSubHead'}
            ></Header>
            <Button styles={'btn btn-sm'} text={t('readMore')}></Button>
          </Link>
        </div>
        <div className="eight wide column text">
          <img className="image" src={svgC}></img>
        </div>
      </div>

      <div className="row">
        <div className="eight wide column text">
          <img className="image" src={svgA}></img>
        </div>
        <div className="eight wide column text">
          <Link to={`/${i18n.language}/ukraine`}>
            <Header
              styleA={'text-md-hover line-height text-black'}
              styleB={'text-sm line-height'}
              text={'whyUkraineHeading'}
              subtext={'whyUkraineSubHead'}
            ></Header>
            <Button styles={'btn btn-sm'} text={t('readMore')}></Button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="eight wide column text">
          <Link to={`/${i18n.language}/ourstory`}>
            <Header
              styleA={'text-md-hover line-height text-black'}
              styleB={'text-sm line-height'}
              text={'ourStoryHeading'}
              subtext={'ourHistorySubHead'}
            ></Header>
            <Button styles={'btn btn-sm'} text={t('readMore')}></Button>
          </Link>
        </div>
        <div className="eight wide column text">
          <img className="image" src={svgD}></img>
        </div>
      </div>
    </div>
  );
}

export default Grid;
