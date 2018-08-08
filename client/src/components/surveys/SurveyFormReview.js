import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({
  onCancel, formValues, submitSurvey, history,
}) => {
  const reviewFields = _.map(formFields, ({ name, label }) => (
    <div key={name}>
      <h6>{label}</h6>
      <div>{formValues[name]}</div>
    </div>
  ));
  return (
    <div>
      <h5>Please confirm your entities</h5>
      {reviewFields}
      <button className="yellow darken-2 white-text btn-flat" type="button" onClick={onCancel}>
        Back
      </button>
      <button
        type="button"
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}>
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

SurveyFormReview.propTypes = {
  onCancel: PropTypes.func.isRequired,
  formValues: PropTypes.shape({}).isRequired,
  submitSurvey: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};  
function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}
export default connect(
  mapStateToProps,
  actions,
)(withRouter(SurveyFormReview));
