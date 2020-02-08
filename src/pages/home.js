import React from "react";
import Menu from '../components/Menu.js';
import Grid from '../components/Grid.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Button from '../components/Button.js';
import logo from '../images/logo.jpg';
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <React.Fragment>
            <section className="section-a">
                <Menu/>
                <div className="container-b text-align">
                    <Image size="large" src={logo}/>
                    <Header
                        styleA={"text-lg text-black line-height"}
                        styleB={"text-md-hover line-height"}
                        text={"progressive, protactive, professional"}
                    />
                    <Link to="/contact"><Button styles={"btn-lg btn"} text={"Get in touch"}></Button></Link>
                </div>
            </section>
            <section className="section-b">
                <Grid/>
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default Home;