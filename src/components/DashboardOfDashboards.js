import React from 'react';
import { Link } from 'react-router-dom';

import BillDashboard from './BillDashboard';

export default class DashboardOfDashboards extends React.Component {
  onComplete = (billId) => {
    this.props.history.push(`/edit/${billId}`)
  }
  render() {
    return (
      <div>
        <Link to="/addbill">Add a Bill</Link>
        <hr />
        <h2>Your Bills</h2>
        <BillDashboard />
      </div>
    )
  }
};

