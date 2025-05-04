import React, { useState } from "react";

const RepaymentForm = ({ customerId, loans, recordRepayment }) => {
  const [repayment, setRepayment] = useState({
    loanId: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRepayment({ ...repayment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!repayment.loanId || !repayment.amount || !repayment.date) {
      alert("All fields are required.");
      return;
    }
    recordRepayment(customerId, repayment); // This would be a function passed from the parent component to record repayment
    setRepayment({ loanId: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select
        name="loanId"
        value={repayment.loanId}
        onChange={handleInputChange}
        className="border p-2 rounded w-full"
      >
        <option value="">Select Loan</option>
        {loans.map((loan) => (
          <option key={loan.item} value={loan.item}>
            {loan.item}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="amount"
        placeholder="Repayment Amount"
        value={repayment.amount}
        onChange={handleInputChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="date"
        name="date"
        placeholder="Repayment Date"
        value={repayment.date}
        onChange={handleInputChange}
        className="border p-2 rounded w-full"
      />
      <div className="text-right">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Record Repayment
        </button>
      </div>
    </form>
  );
};

export default RepaymentForm;

