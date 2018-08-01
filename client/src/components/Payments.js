import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Payments = ({ handleToken }) => (
  <StripeCheckout
    name="Survey application"
    description="5€ for 5 email credits, hyst "
    currency="EUR"
    amount={500}
    token={(token) => {
      handleToken(token);
      console.log('token', token);
    }}
    stripeKey={process.env.REACT_APP_STRIPE_KEY}>
    <button className="btn" type="button">
      Add Credits
    </button>
  </StripeCheckout>
);

Payments.propTypes = {
  handleToken: PropTypes.func.isRequired,
};

export default connect(
  null,
  actions,
)(Payments);
