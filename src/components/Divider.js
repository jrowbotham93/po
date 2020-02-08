import React from 'react';

const Divider = ({
  text,
  icon,
  }) => {
    return (
        <h4 className="ui horizontal divider header">
            <i className={icon}></i>{text}
        </h4>
    );
}

export default Divider;
