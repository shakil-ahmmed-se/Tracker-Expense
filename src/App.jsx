import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTabel from "./components/ExpenseTabel";
import ExpenseData from './ExpenseData';

function App() {
  const [expenses, setExpenses] = useState(ExpenseData)

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} />
          <ExpenseTabel expenses={expenses} />
        </div>
      </main>
    </>
  );
}

export default App;
