import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import FinancialReports from "./routes/FinancialReports";
import StudentRecords from "./routes/StudentRecords";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
