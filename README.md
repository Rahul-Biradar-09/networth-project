--------PROJECT NAME-------

CREDIKHAATA:- A loan ledger User Interface


--------DESCRIPTION--------

CrediKhaata is a responsive React.js web application designed for small shopkeepers to manage customer credit. It allows users to add customers, record credit and repayment transactions, track outstanding balances, and export individual customer statements as PDF files. The app aims to simplify credit tracking and provide an intuitive, mobile-friendly dashboard.


--------DEVELOPMENT PROCESS-------

Step 1: Project Setup
Install dependencies:
npm create vite@latest credikhaata --template react
cd credikhaata
npm install

Install additional packages:
npm install react-router-dom react-hook-form yup react-toastify jspdf
(Optional) Install Tailwind CSS:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Update tailwind.config.js and index.css.


Step 2: Folder Structure
Create folders inside src/:

css
Copy
Edit
src/
├── components/
├── context/
├── pages/
├── reducers/
├── utils/


Step 3: Routing and Layout
Set up BrowserRouter in main.jsx
Create pages like Dashboard, CustomerDetails, etc.
Use a Layout component for consistent header/sidebar.


Step 4: Context and Reducer
Use useReducer with Context for global state:
// context/GlobalContext.js
export const initialState = {
  customers: [],
  transactions: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.payload] };
    // Add other actions (DELETE_CUSTOMER, ADD_TRANSACTION, etc.)
    default:
      return state;
  }  
}


Step 5: Customer Management
Create components for:
AddCustomerForm
CustomerList
CustomerDetails
Validate forms using react-hook-form + Yup.


Step 6: Transaction Recording
Create forms for:
Giving Credit
Recording Repayments
Store transactions in context with type CREDIT or REPAYMENT.


Step 7: Balance & History
Calculate total credit, repayments, and outstanding balance per customer.
Create a TransactionHistory component with filters (by date/type).


Step 8: Export to PDF
Create generatePDF(customer) function in utils/pdfGenerator.js using jsPDF:
import jsPDF from "jspdf";
export const generatePDF = (customer) => {
  const doc = new jsPDF();
  doc.text(`Customer: ${customer.name}`, 10, 10);
  // Add transaction details
  doc.save(`${customer.name}_statement.pdf`);
};


Step 9: Notifications
Use react-toastify to show success/error messages:
toast.success("Customer added!");
Wrap <ToastContainer /> in your App.jsx.



Step 10: Responsive Design
Use Tailwind or CSS media queries to ensure mobile-friendly UI.
Use Flexbox/Grid to manage layout.





-------PROJECT LINK-------

LINK:- https://credikhaata-project.vercel.app



----------IMPORTANT NOTE-------------
---------DEPLOYMENT ISSUE-----------


If the link is not opening or showing 404 error in the browser, kindly copy and paste the Url in another tab

kindly paste this in URL section https://credikhaata-project.vercel.app

Do not paste this in URL Section [https://credikhaata-project.vercel.app/login] as it will again show 404 error paste above in Url section and run it...


----------THANK YOU------------
