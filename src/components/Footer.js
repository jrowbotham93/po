import React from 'react';

const Footer = ({}) => {
    return (
        <div className="ui vertical footer segment">
            <div className="ui center aligned container">
                <div className="ui stackable grid">
                <div className="ui column">
                    <div className="ui link list">
                    <a className="item" href="https://www.transifex.com/organization/semantic-org/" target="_blank">product portfolio</a>
                    <a className="item" href="https://github.com/Semantic-Org/Semantic-UI/issues" target="_blank">contact us</a>
                    <a className="item" href="https://gitter.im/Semantic-Org/Semantic-UI" target="_blank">chemex</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;
