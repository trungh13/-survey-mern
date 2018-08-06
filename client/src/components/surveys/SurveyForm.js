import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', type: 'text', name: 'title' },
  { label: 'Subject Line', type: 'text', name: 'subject' },
  { label: 'Email body', type: 'text', name: 'emailBody' },
  { label: 'Recipient List', type: 'text', name: 'recipients' },
];
const SurveyForm = ({ handleSubmit }) => {
  const renderFields = () => _.map(FIELDS, ({ label, name, type }) => (
      <Field component={SurveyField} type={type} label={label} name={name} key={name} />
  ));
  return (
    <div>
      <form onSubmit={handleSubmit(values => console.log('values', values))}>
        {renderFields()}
        <Link className="red btn-flat white-text" to="/surveys">
          Cancel
        </Link>
        <button className="teal btn-flat right white-text" type="submit">
          Next <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};
function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || '');
  _.each(FIELDS, ({ label, name }) => {
    if (!values[name]) {
      errors[name] = `You must provide ${label}`;
    }
  });

  return errors;
}
SurveyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);
