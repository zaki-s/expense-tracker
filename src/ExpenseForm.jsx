

import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [expense, setExpense] = useState({
    itemDetail: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(expense);
    setExpense({ itemDetail: '', description: '', category: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="itemDetail"
        value={expense.itemDetail}
        onChange={handleChange}
        placeholder="Item Detail"
      />
      <input
        type="text"
        name="description"
        value={expense.description}
        onChange={handleChange}
        placeholder="Expense Description"
      />
      <input
        type="text"
        name="category"
        value={expense.category}
        onChange={handleChange}
        placeholder="Expense Category"
      />
      <input
        type="number"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        placeholder="Amount"
      />
      <input
        type="date"
        name="date"
        value={expense.date}
        onChange={handleChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
