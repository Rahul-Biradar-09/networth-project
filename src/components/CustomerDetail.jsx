import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddLoanForm from "../forms/AddLoanForm";
import RepaymentForm from "../forms/RepaymentForm";

// Mock Customer Data (as previously defined in Dashboard)
const mockCustomerData = [
  {
    id: "1",
    name: "Ravi Kumar",
    balance: 12000,
    dueDate: "2025-05-10",
    status: "Overdue",
    loans: [
      {
        item: "Television",
        amount: 10000,
        dueDate: "2025-05-15",
        repayments: [{ amount: 3000, date: "2025-04-20" }],
      },
      {
        item: "Refrigerator",
        amount: 5000,
        dueDate: "2025-06-01",
        repayments: [],
      },
    ],
  },
  {
    id: "2",
    name: "Sita Devi",
    balance: 4500,
    dueDate: "2025-05-15",
    status: "Up-to-date",
    loans: [
      {
        item: "Washing Machine",
        amount: 7000,
        dueDate: "2025-05-30",
        repayments: [],
      },
    ],
  },
  {
    id: "3",
    name: "Amit Sharma",
    balance: 8000,
    dueDate: "2025-05-20",
    status: "Overdue",
    loans: [
      {
        item: "Microwave",
        amount: 8000,
        dueDate: "2025-06-10",
        repayments: [{ amount: 2000, date: "2025-04-25" }],
      },
    ],
  },
];

const formatRupees = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

const CustomerDetail = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // Fetch customer details using the `id`
    const customerData = mockCustomerData.find((customer) => customer.id === id);
    setCustomer(customerData);
  }, [id]);

  const calculateRemainingBalance = (loan) => {
    const repaid = loan.repayments.reduce((sum, repay) => sum + repay.amount, 0);
    return loan.amount - repaid;
  };

  if (!customer) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {customer.name}'s Loan Details
      </h2>

      {/* Customer Info */}
      <div className="mb-10 p-6 bg-white shadow rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Customer Information</h3>
        <div>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Outstanding Balance:</strong> {formatRupees(customer.balance)}</p>
          <p><strong>Next Due Date:</strong> {customer.dueDate}</p>
          <p><strong>Status:</strong> 
            <span className={customer.status === "Overdue" ? "text-red-500" : "text-green-600"}>
              {customer.status}
            </span>
          </p>
        </div>
      </div>

      {/* Loans Table */}
      <div className="overflow-x-auto shadow rounded-lg mb-10">
        <table className="min-w-full text-sm bg-white border">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Item Sold</th>
              <th className="px-4 py-2 text-left">Loan Amount</th>
              <th className="px-4 py-2 text-left">Due Date</th>
              <th className="px-4 py-2 text-left">Repayment History</th>
              <th className="px-4 py-2 text-left">Remaining Balance</th>
            </tr>
          </thead>
          <tbody>
            {customer.loans.map((loan, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-3">{loan.item}</td>
                <td className="px-4 py-3">{formatRupees(loan.amount)}</td>
                <td className="px-4 py-3">{loan.dueDate}</td>
                <td className="px-4 py-3">
                  {loan.repayments.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1">
                      {loan.repayments.map((repay, index) => (
                        <li key={index}>
                          {formatRupees(repay.amount)} on {repay.date}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-400">No repayments</span>
                  )}
                </td>
                <td className="px-4 py-3 text-red-500 font-medium">
                  {formatRupees(calculateRemainingBalance(loan))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Loan & Repayment Forms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Add New Loan</h3>
          <AddLoanForm customerId={customer.id} />
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Record Repayment</h3>
          <RepaymentForm customerId={customer.id} loans={customer.loans} />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;

