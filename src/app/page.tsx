import Component from "@/components/Component";
import DashboardTable from "@/components/DashboardTable";
import AddExp from "@/components/addExp";
import DashboardCard from "@/components/dashboardCard";
import Header from "@/components/header";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard />
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recent Transactions 📋</h2>
            </div>
            <DashboardTable />
          </div>
        </div>
      </main>
      <AddExp />
    </div>
  );
}
