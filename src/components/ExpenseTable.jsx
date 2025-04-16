

import React from 'react';

const ExpenseTable = ({ expenses }) => {
  return (
    <div className="expense-table-container">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Item Detail</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description} - {expense.itemDetail}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
