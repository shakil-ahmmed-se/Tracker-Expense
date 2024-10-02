// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTabel from "./components/ExpenseTabel";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm />
          <ExpenseTabel />
        </div>
      </main>
    </>
  );
}

export default App;
