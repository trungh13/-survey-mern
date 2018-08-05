import React from 'react';
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div className="fixed-action-btn">
        <Link to="/survey/news" className="btn-floating btn-large red" href="">
          <i className="material-icons large">add</i>
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
