
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import './App.css';


const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="app">
      {/* Header */}
      <header>
        <h1>ExpeTrack</h1>
        <p>Track your Finances in a clever way!!</p>
      </header>

      <div className="container">

        <div className="expense-form">
          <h3>ADD EXPENSE</h3>
          <p>Enter Details</p>
          <ExpenseForm addExpense={addExpense} />
        </div>

        <div className="expense-table">
          <ExpenseTable expenses={expenses} />
        </div>
      </div>

    </div>
  );
};

export default App;

