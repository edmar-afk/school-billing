import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import FinancialReports from "./routes/FinancialReports";
import StudentRecords from "./routes/StudentRecords";
import PaymentRecords from "./routes/PaymentRecords";
import BillingStatement from "./routes/BillingStatement";
function Logout() {
  localStorage.clear();
  return <Navigate to="/" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/financial-reports" element={<FinancialReports />} />
        <Route path="/student-records" element={<StudentRecords />} />
        <Route path="/payment-records" element={<PaymentRecords />} />
        <Route path="/billing-statement" element={<BillingStatement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
