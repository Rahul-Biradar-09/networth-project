import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([
    {
      id: "1",
      name: "Ravi Kumar",
      balance: 12000,
      dueDate: "2025-05-10",
      status: "Overdue",
    },
    {
      id: "2",
      name: "Sita Devi",
      balance: 4500,
      dueDate: "2025-05-15",
      status: "Up-to-date",
    },
    {
      id: "3",
      name: "Amit Sharma",
      balance: 8000,
      dueDate: "2025-05-20",
      status: "Overdue",
    },
  ]);

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    balance: "",
    dueDate: "",
  });

  const formatRupees = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = (e) => {
    e.preventDefault();

    if (!newCustomer.name || !newCustomer.balance || !newCustomer.dueDate) {
      alert("All fields are required.");
      return;
    }

    const newEntry = {
      id: Date.now().toString(),
      ...newCustomer,
      balance: parseInt(newCustomer.balance),
      status: "Up-to-date",
    };

    setCustomers([...customers, newEntry]);
    setNewCustomer({ name: "", balance: "", dueDate: "" });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Customer List</h2>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full text-sm bg-white border">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Outstanding Balance</th>
              <th className="px-4 py-2 text-left">Next Due Date</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                onClick={() => navigate(`/customer/${customer.id}`)}
                className="border-b hover:bg-gray-50 cursor-pointer"
              >
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{formatRupees(customer.balance)}</td>
                <td className="px-4 py-2">{customer.dueDate}</td>
                <td
                  className={`px-4 py-2 ${
                    customer.status === "Overdue"
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {customer.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Customer Form */}
      <div className="mt-10 p-6 bg-white shadow rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Add New Customer</h3>
        <form onSubmit={handleAddCustomer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Customer Name"
            value={newCustomer.name}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="balance"
            placeholder="Opening Balance"
            value={newCustomer.balance}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            name="dueDate"
            placeholder="Next Due Date"
            value={newCustomer.dueDate}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
          <div className="col-span-full text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;


