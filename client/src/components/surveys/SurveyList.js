import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSurveys } from '../../actions';

export class SurveyList extends Component {
  static propTypes = {
    surveys: PropTypes.shape.isRequired,
  };

  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    const { surveys } = this.props;
    return surveys.map(survey => (
      <div className="card darken-1" key={survey._id}>
        {console.log(survey)}
        <div className="card-content">
          <span className="card-title">{survey.title}</span>
          <p>{survey.body}</p>
          <p className="right">Sent On : {new Date(survey.dateSent).toLocaleDateString()}</p>
        </div>
        <div className="card-action">
          <a href="#">
            Yes:
            {survey.yes}
          </a>
          <a href="#">
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
  { fetchSurveys },
)(SurveyList);
