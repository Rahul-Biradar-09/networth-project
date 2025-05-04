import React from "react";

const AddCustomerForm = ({ newCustomer, handleInputChange, handleAddCustomer }) => {
  return (
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
  );
};

export default AddCustomerForm;

