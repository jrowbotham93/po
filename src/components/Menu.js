import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import logo from '../images/logo.jpg';
import Lng from './LanguageSelector.js';
import '../styles/navbar.css';
import '../styles/hamburger.css';
import i18n from '../i18n';
import Popup from 'reactjs-popup';
import BurgerIcon from '../components/BurgerIcon';
import PopUpMenu from '../components/PopUpMenu';

const contentStyle = {
  background: '#01bb85',
  width: '80%',
  border: 'none'
};

export default function Menu() {
  return (
    <nav className="navbar">
      <Link to={`/${i18n.language}/`}>
        <Image size="medium" src={logo} />
      </Link>
      <div className="flex-center ">
        <Lng />
        <Popup
          modal
          overlayStyle={{ background: '#01bb85' }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <BurgerIcon open={open} />}
        >
          {close => <PopUpMenu close={close} />}
        </Popup>
      </div>
    </nav>
  );
}
