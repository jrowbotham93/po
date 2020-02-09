import React from 'react';
import { useTranslation } from 'react-i18next';
import TextTranslator from '../components/TextTranslator';


function Contact() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="container">
        <section className="ui stackable grid">
          <div className="row">
            <div className="sixteen wide tablet eight wide computer column">
              <h1>
                <TextTranslator label={"contactSubheading"}/>
              </h1>
            </div>
          </div>
          <div className="row margin-top">
            <h2><TextTranslator label={"contactHeading"}/></h2>
          </div>
          <div className="ui equal width stackable grid">
            <div className="row">
              <div className=" column">
                <p><TextTranslator label={"nameA"}/></p>
                <p><TextTranslator label={"positionA"}/> </p>
                <p>
                  <a href="mailto:eugene.blokhin@proorganica.com" target="_top">
                    eugene.blokhin@proorganica.com
                  </a>
                </p>
                <p>{t("mobHeading")} {t("mobA")}</p>
              </div>
              <div className=" column">
                <p><TextTranslator label={"nameB"}/></p>
                <p><TextTranslator label={"positionB"}/></p>
                <p>
                  <a href="mailto:pavel.gukov@proorganica.com" target="_top">
                    pavel.gukov@proorganica.com
                  </a>
                </p>
                <p>{t("mobHeading")} {t("mobB")}</p>
              </div>
              <div className=" column">
                <p><TextTranslator label={"nameC"}/></p>
                <p><TextTranslator label={"positionC"}/></p>
                <p>
                  <a
                    href="mailto:iryna.sholokhova@proorganica.com"
                    target="_top"
                  >
                    iryna.sholokhova@proorganica.com
                  </a>
                </p>
                <p> {t("mobHeading")} {t("mobC")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Contact;
