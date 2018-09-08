import React from 'react';
import { Link } from 'react-router-dom';

const BillListItem = ({ description, name, billId, createdBy }) => (
  <Link to={`/edit/${billId}`} className="list-item">
    <h2>Click to add transactions</h2>
    <br />
    <p>{description} | {name} | {createdBy}</p>
  </Link>
);

export default BillListItem;
