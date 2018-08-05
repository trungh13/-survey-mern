import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SurveyForm from './SurveyForm';

export class SurveyNew extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
