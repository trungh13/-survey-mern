import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const Header = (props) => {
  const { auth } = props;
  const renderContent = () => {
    switch (auth) {
      case null:
        return (
          <li>
            <a href="/auth/google">Login with google </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  };
  console.log('auth', auth);
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={auth ? '/surveys' : '/'} className="brand-logo left">
          Survey application
        </Link>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};
Header.propTypes = {
  auth: PropTypes.shape({}),
};
Header.defaultProps = {
  auth: null,
};
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
