import React, { useEffect, useRef, useState } from "react";

const ExpenseForm = (props) => {
  const { setExpenses } = props;

  // const [title, setTitle] = useState('');
  // const [category, setCategory] = useState('');
  // const [amount, setAmount] = useState('');

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    // id: crypto.randomUUID(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expense);
    setExpenses((preState) => [...preState, {...expense, id:crypto.randomUUID()}]);
    setExpense({title: '', category: '', amount: ''});
    // setExpenses(preState =>[...preState,{
    //   title: titleRef.current.value,
    //   category: categoryRef.current.value,
    //   amount: amountRef.current.value,
    //   id: crypto.randomUUID(),
    // }])
    
  };

  useEffect(() => {
    console.log('rendering');
  },[])
  // console.log(title)

  // const getFormData = (form) => {
  //   const formData = new FormData(form);
  //   // const data = {
  //   //   title: formData.get("title"),
  //   //   category: formData.get("category"),
  //   //   amount: formData.get("amount"),
  //   // };
  //   // console.log(data);
  //   const data = {};
  //   for(const [key ,value] of formData.entries()){
  //     // console.log(key, value);
  //     data[key] = value;

  //   }
  //   return data;

  // }

  // const titleRef = useRef(null);
  // const categoryRef = useRef(null);
  // const amountRef = useRef(null);

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          required
          name="title"
          value={expense.title}
          onChange={(e) =>
            setExpense((preState) => ({ ...preState, title: e.target.value }))
          }
          // ref={titleRef }
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          required
          value={expense.category}
          onChange={(e) =>
            setExpense((preState) => ({
              ...preState,
              category: e.target.value,
            }))
          }
          // ref={categoryRef}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          required
          name="amount"
          value={expense.amount}
          onChange={(e) =>
            setExpense((preState) => ({ ...preState, amount: e.target.value }))
          }
          // ref={amountRef}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
