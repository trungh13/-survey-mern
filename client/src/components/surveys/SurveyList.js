import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

export class SurveyList extends Component {
  static propTypes = {
    surveys: PropTypes.shape.isRequired,
    fetchSurveys: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchSurveys } = this.props;
    fetchSurveys();
  }

  renderSurveys() {
    const { surveys } = this.props;
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
function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  actions.fetchSurveys,
)(SurveyList);
