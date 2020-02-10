import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import logo from '../images/logo.jpg';
import TextTranslator from '../components/TextTranslator';
import certificateA from '../images/Certificate-1.png'
import certificateB from '../images/Certificate-1.png'
import certificateC from '../images/Certificate-1.png'

const Footer = (props) => {
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
        <p><i className="fa fa-certificate"></i><a download href={certificateA}>Organic Standard Certification (EU)</a></p>
        <p><i className="fa fa-certificate"></i><a download href={certificateC}>Chemex Product Certification</a></p>
        <p><i className="fa fa-certificate"></i><a download href={certificateB}>Chemex Product Certification</a></p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span><TextTranslator label={"address"}/></span>
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p><TextTranslator label={"mobA"}/></p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:eugene.blokhin@proorganica.com">eugene.blokhin@proorganica.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span><TextTranslator label={"ourStoryHeading"}/></span>
          <TextTranslator label={"ourStoryTextA"}/>
        </p>
        <p>Upcoming events</p>
        <p>Natural&Organic Products Europe, London, UK / 19-20 April, 2020</p>
        <a href="https://www.naturalproducts.co.uk/">https://www.naturalproducts.co.uk/</a>
      </div>
    </footer>
  );
};

export default Footer;
