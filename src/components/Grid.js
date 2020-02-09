import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
import svgA from '../images/Infrastructure.svg';
import svgB from '../images/FreshFood.svg';
import svgC from '../images/EmpowerHumans.svg';
import svgD from '../images/AiPlatform.svg';
import i18n from '../i18n';

function Grid(){
    return (
        <div className="ui stackable four column grid">
            <div className="Left floated left aligned column">
                <img className="image" src={svgA}></img>
            </div>
            <div className="Left floated left aligned column text-black">
                <Link to={`/${i18n.language}/services`}>
                    <Header
                        styleA={"text-md-hover line-height text-black"}
                        styleB={"text-sm line-height"}
                        text={"ourServicesHeading"}
                        subtext={"ourServicesSubHead"}>
                    </Header>
                    <Button styles={"btn btn-sm"} text={"Read more"}></Button>
                </Link>
            </div>
            <div className="Right floated right aligned column">
                <Link to={`/${i18n.language}/products`}>
                    <Header
                        styleA={"text-md-hover line-height text-black"}
                        styleB={"text-sm line-height"}
                        text={"ourProductsHeading"}
                        subtext={"ourProductsSubHead"}>
                    </Header>
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
                <Link to={`/${i18n.language}/ukraine`}>
                    <Header
                        styleA={"text-md-hover line-height text-black"}
                        styleB={"text-sm line-height"}
                        text={"whyUkraineHeading"}
                        subtext={"whyUkraineSubHead"}>
                    </Header>
                    <Button styles={"btn btn-sm"} text={"Read more"}></Button>
                </Link>
            </div>
            <div className="Right floated right aligned column">
                <Link to={`/${i18n.language}/ourstory`}>
                    <Header
                        styleA={"text-md-hover line-height text-black"}
                        styleB={"text-sm line-height"}
                        text={"ourHistoryHeading"}
                        subtext={"ourHistorySubHead"}>
                    </Header>
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
