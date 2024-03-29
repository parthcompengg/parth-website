import React from 'react';
import PropTypes from 'prop-types';

import Certificate from './Certificates/Certificate';

const Certificates = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Certificates</h3>
    </div>
    {data.map((item) => (
      <Certificate
        data={item}
        key={item.company}
      />
    ))}
  </div>
);

Certificates.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Certificates.defaultProps = {
  data: [],
};

export default Certificates;
