import React from 'react';
import PropTypes from 'prop-types';

const SurveyField = ({ input = {}, label, meta: { error, touched } }) => (
  <div>
    <label htmlFor={input.name}>
      {label}
      <input {...input} id={input.name} style={{ marginBottom: '5px' }} />
    </label>
    <div className="red-text">{touched && error}</div>
  </div>
);

SurveyField.propTypes = {
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};
SurveyField.defaultProps = {
  meta: {
    touched: false,
    error: '',
  },
};

export default SurveyField;
