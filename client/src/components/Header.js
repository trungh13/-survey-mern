import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = (props) => {
  const renderContent = () => {
    const { auth } = props;
    switch (auth) {
      case null:
        return '';
      case false:
        return (
          <li>
            <a href="/auth/google">Login with google </a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  };
  return (
    <nav>
      {console.log('props', props)}
      <div className="nav-wrapper">
        <a href="/" className="brand-logo left">
          Survey application
        </a>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};
Header.propTypes = {
  auth: PropTypes.shape.isRequired,
};
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
