import React, { useState } from "react";

const AddLoanForm = ({ customerId, addLoan }) => {
  const [loan, setLoan] = useState({
    item: "",
    amount: "",
    dueDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoan({ ...loan, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loan.item || !loan.amount || !loan.dueDate) {
      alert("All fields are required.");
      return;
    }
    addLoan(customerId, loan); // This would be a function passed from the parent component to add the loan
    setLoan({ item: "", amount: "", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="item"
        placeholder="Item Sold"
        value={loan.item}
        onChange={handleInputChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        name="amount"
        placeholder="Loan Amount"
        value={loan.amount}
        onChange={handleInputChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="date"
        name="dueDate"
        placeholder="Due Date"
        value={loan.dueDate}
        onChange={handleInputChange}
        className="border p-2 rounded w-full"
      />
      <div className="text-right">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Loan
        </button>
      </div>
    </form>
  );
};

export default AddLoanForm;

