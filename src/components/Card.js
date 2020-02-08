
import React from 'react';

const Card = ({
  head,
  subHead,
  image,
  desc,
  }) => {
    return (
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={image}/>
          </div>
          <div className="content">
            <div className="header">{head}</div>
          </div>
          <div className="content">
            <div className="meta">{subHead}</div>
            <div class="description">{desc}</div>
          </div>
        </div>
      </div>
    );
  }

export default Card;
