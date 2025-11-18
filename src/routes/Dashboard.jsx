import React from "react";
import Sidebar from "../components/Sidebar";
import CTA from "../components/dashboard/CTA";

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <div className="mt-4">
          <CTA />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
