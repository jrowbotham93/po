import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
import svgA from '../images/Infrastructure.svg';
import svgB from '../images/FreshFood.svg';
import svgC from '../images/EmpowerHumans.svg';
import svgD from '../images/AiPlatform.svg';

const Grid = () => {
    return (
        <div className="ui stackable four column grid">
            <div className="Left floated left aligned column">
                <img className="image" src={svgA}></img>
            </div>
            <div className="Left floated left aligned column">
                <Header
                    styleA={"text-lg-hover"}
                    styleB={"text-md padding-top-1 padding-bottom-1"}
                    text={"services"}
                    subtext={"Check out our plug-in marketplace"}>
                </Header>
                <Link to="/services">
                    <Button styles={"btn btn-sm"} text={"Read more"}></Button>
                </Link>
            </div>
            <div className="Right floated right aligned column">
                <Header
                    styleA={"text-lg-hover"}
                    styleB={"text-md padding-top-1 padding-bottom-1"}
                    text={"products"}
                    subtext={"Check out our plug-in marketplace"}>
                </Header>
                <Link to="/products">
                    <Button styles={"btn btn-sm"} text={"Read more"}></Button>
                </Link>
            </div>
            <div className="Right floated right aligned column">
                <img className="image" src={svgB}></img>
            </div>
            <div className="Left floated left aligned column">
                <img className="image" src={svgC}></img>
            </div>
            <div className="Left floated left aligned column">
                <Header
                    styleA={"text-lg-hover"}
                    styleB={"text-md padding-top-1 padding-bottom-1"}
                    text={"why ukraine"}
                    subtext={"Check out our plug-in marketplace"}>
                </Header>
                <Link to="/ukraine">
                    <Button styles={"btn btn-sm"} text={"Read more"}></Button>
                </Link>
            </div>
            <div className="Right floated right aligned column">
                <Header
                    styleA={"text-lg-hover"}
                    styleB={"text-md padding-top-1 padding-bottom-1"}
                    text={"our story"}
                    subtext={"Check out our plug-in marketplace"}>
                </Header>
                <Link to="/ourstory">
                    <Button styles={"btn btn-sm"} text={"Read more"}></Button>
                </Link>
            </div>
            <div className="Right floated right aligned column">
                <img className="l-image" src={svgD}></img>
            </div>
        </div>
    );
}

export default Grid;
