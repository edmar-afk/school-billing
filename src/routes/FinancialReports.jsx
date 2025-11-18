import React from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/financial-reports/Table";

function FinancialReports() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-900">Financial Reports</h1>
        <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
          <Table/>
        </div>
      </main>
    </div>
  );
}

export default FinancialReports;
