
import React from "react";
import Menu from '../components/Menu.js';
import Divider from '../components/Divider';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Card from '../components/Card.js';
function Contact() {
    return(
    <React.Fragment>
        <section className="section-a">
            <Menu/>
            <div className="container-b text-align">
                <Header
                    styleA={"text-md text-black line-height"}
                    styleB={"text-md-hover"}
                    text={"Get in touch "}
                />
            <div className="flex-center flex-row text-align">
                <div>
                <Card
                    head={"Eugene Blokhin"}
                    subHead={"Logistics & Marketing"}
                    desc={"E-mail: [iryna.sholokhova@proorganica.com](mailto:iryna.sholokhova@proorganica.com"}>
                    >
                </Card>
                </div>
                <div>
                <Card
                    head={"Eugene Blokhin"}
                    subHead={"Logistics & Marketing"}
                    desc={"E-mail: [iryna.sholokhova@proorganica.com](mailto:iryna.sholokhova@proorganica.com"}>
                </Card>
                </div>
                <div class="padding-top-10">
                <Card
                    head={"Eugene Blokhin"}
                    subHead={"Logistics & Marketing"}
                    desc={"E-mail: [iryna.sholokhova@proorganica.com](mailto:iryna.sholokhova@proorganica.com"}>
                </Card>
              </div>
            </div>
          </div>
        </section>
      <Footer/>
    </React.Fragment>
  );
}

export default Contact;