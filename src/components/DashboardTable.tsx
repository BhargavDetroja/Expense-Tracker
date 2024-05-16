import React from "react";
import { Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { getExpenses } from "@/lib/data";
const expenses = getExpenses();

const DashboardTable = () => {
  return (
    <Card className="mt-4shadow-md hover:shadow-lg transition-shadow duration-300">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date 📅</TableHead>
            <TableHead>Category 🏷️</TableHead>
            <TableHead>Amount 💰</TableHead>
            <TableHead>Description 📝</TableHead>
            <TableHead>Actions 🔧</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* <TableRow>
            <TableCell>2023-04-15</TableCell>
            <TableCell>Groceries 🍞</TableCell>
            <TableCell>$45.67</TableCell>
            <TableCell>Weekly grocery shopping</TableCell>
            <TableCell className="flex items-center gap-2">
              <Button
                className="shadow-md hover:shadow-lg transition-shadow duration-300"
                size="sm"
                variant="outline"
              >
                <DeleteIcon className="mr-2 h-4 w-4" />
                Edit
              </Button>
              <Button
                className="text-[#ef4444] shadow-md hover:shadow-lg transition-shadow duration-300"
                size="sm"
                variant="outline"
              >
                <Trash2Icon className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </TableCell>
          </TableRow> */}
          {expenses.map((expense, index) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>{expense.amount}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Button
                  className="shadow-md hover:shadow-lg transition-shadow duration-300"
                  size="sm"
                  variant="outline"
                >
                  <DeleteIcon className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button
                  className="text-[#ef4444] shadow-md hover:shadow-lg transition-shadow duration-300"
                  size="sm"
                  variant="outline"
                >
                  <Trash2Icon className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

function DeleteIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function Trash2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}

export default DashboardTable;
