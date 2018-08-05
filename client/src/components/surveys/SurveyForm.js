import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

export class SurveyForm extends Component {
  static propTypes = {};

  render() {
    return <div>SurveyForm!</div>;
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
