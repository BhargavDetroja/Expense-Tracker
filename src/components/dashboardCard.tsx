import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { getTotalExpenses } from "@/lib/data";

const DashboardCard = () => {

  const total =getTotalExpenses();

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Total Expenses 💸</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-[#f58800]">${total}</div>
        {/* <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-bold text-[#22c55e]">+5.2%</span>
          from last month
        </div> */}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
