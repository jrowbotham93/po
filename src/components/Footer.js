import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import logo from '../images/logo.jpg';
import TextTranslator from '../components/TextTranslator';
<<<<<<< HEAD
import certificateA from '../files/Chemex_Organic_Certificate(EU).pdf';
import certificateB from '../files/Chemex_Organic_Certificate(COR).pdf';
=======
import certificateA from '../images/Certificate-1.png';
import certificateB from '../images/Certificate-1.png';
import certificateC from '../images/Certificate-1.png';
>>>>>>> some stuff

const Footer = props => {
  const { i18n } = props;
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <Link to={`/${i18n.language}/`}>
          <Image size="small" src={logo} />
        </Link>

        <p className="footer-company-name">ProOrganica © 2020</p>
      </div>
      <div>
        <p>
          <i className="fa fa-certificate"></i>
          <a download href={certificateA}>
            Organic Standard Certification (EU)
          </a>
        </p>
        <p>
          <i className="fa fa-certificate"></i>
<<<<<<< HEAD
          <a download href={certificateB}>
=======
          <a download href={certificateC}>
>>>>>>> some stuff
            Chemex Product Certification
          </a>
        </p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>
              <TextTranslator label={'address'} />
            </span>
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>
            <TextTranslator label={'mobA'} />
          </p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:eugene.blokhin@proorganica.com">
              eugene.blokhin@proorganica.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-company-about">
          <h3>Upcoming events</h3>
          <p>BioFach: 12. - 15. February 2020, Nürnberg, Germany</p>
          <a href="https://www.biofach.de/">https://www.biofach.de/</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
