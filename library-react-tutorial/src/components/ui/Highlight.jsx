import React from 'react';

const Highlight = ({ icon, title, description }) => {
  return (
        <div className="highlight">
            <div className="highlight__img">
                {icon}
            </div>
            <h3 className="highlight__subtitle">
                {title}
            </h3>
            <p className="highlight__para">
                {description}
            </p>
        </div>
  );
};

export default Highlight;