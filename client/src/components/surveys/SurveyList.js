import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSurveys as fetchSurveysActionCreator } from '../../actions';

export class SurveyList extends Component {
  componentDidMount() {
    const { fetchSurveys } = this.props;
    fetchSurveys();
  }

  renderSurveys() {
    const { surveys } = this.props;
    console.log(surveys);
    return surveys.reverse().map(survey => (
      <div className="card blue-grey darken-1 white-text" key={survey._id}>
        <div className="card-content">
          <span className="card-title">{survey.title}</span>
          <p>{survey.body}</p>
          <p className="right">Sent On : {new Date(survey.dateSent).toLocaleDateString()}</p>
        </div>
        <div className="card-action">
          <a>
            Yes:
            {survey.yes}
          </a>
          <a>
            No:
            {survey.no}
          </a>
        </div>
      </div>
    ));
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

SurveyList.propTypes = {
  surveys: PropTypes.arrayOf(PropTypes.shape({})),
  fetchSurveys: PropTypes.func.isRequired,
};
SurveyList.defaultProps = {
  surveys: {},
};

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys: fetchSurveysActionCreator },
)(SurveyList);
