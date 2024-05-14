/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7t0MC8NS1bJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import AddExp from "./addExp";
import Header from "./header";

export default function Component() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-[#f3f4f6] dark:bg-[#0f172a] py-8 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white dark:bg-[#4b5563] shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Total Expenses 💸</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-[#f58800]">
                    $2,345.67
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-[#22c55e]">+5.2%</span>
                    from last month{"\n                              "}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-[#4b5563] shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Expenses This Month 📆</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-[#f58800]">
                    $1,234.56
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-[#ef4444]">-3.1%</span>
                    from last month{"\n                              "}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-[#4b5563] shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Remaining Budget 💰</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-[#f58800]">
                    $765.43
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-[#f8bc24]">+8.9%</span>
                    from last month{"\n                              "}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-[#4b5563] shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Savings 🏦</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-[#f58800]">
                    $5,432.10
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-[#22c55e]">+12.4%</span>
                    from last month{"\n                              "}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Recent Transactions 📋</h2>
                <Button
                  className="bg-[#4b5563] hover:bg-[#374151] text-white shadow-md hover:shadow-lg transition-shadow duration-300"
                  size="sm"
                >
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Add Expense 🧾
                </Button>
              </div>
              <Card className="mt-4 bg-white dark:bg-[#4b5563] shadow-md hover:shadow-lg transition-shadow duration-300">
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
                    <TableRow>
                      <TableCell>2023-04-15</TableCell>
                      <TableCell>Groceries 🍞</TableCell>
                      <TableCell>$45.67</TableCell>
                      <TableCell>Weekly grocery shopping</TableCell>
                      <TableCell className="flex items-center gap-2">
                        <Button
                          className="bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#4b5563] shadow-md hover:shadow-lg transition-shadow duration-300"
                          size="sm"
                          variant="outline"
                        >
                          <DeleteIcon className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button
                          className="bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#ef4444] shadow-md hover:shadow-lg transition-shadow duration-300"
                          size="sm"
                          variant="outline"
                        >
                          <Trash2Icon className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-04-10</TableCell>
                      <TableCell>Utilities 🔌</TableCell>
                      <TableCell>$123.45</TableCell>
                      <TableCell>Electricity bill</TableCell>
                      <TableCell className="flex items-center gap-2">
                        <Button
                          className="bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#4b5563] shadow-md hover:shadow-lg transition-shadow duration-300"
                          size="sm"
                          variant="outline"
                        >
                          <DeleteIcon className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button
                          className="bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#ef4444] shadow-md hover:shadow-lg transition-shadow duration-300"
                          size="sm"
                          variant="outline"
                        >
                          <Trash2Icon className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-04-05</TableCell>
                      <TableCell>Entertainment 🎬</TableCell>
                      <TableCell>$78.90</TableCell>
                      <TableCell>Movie tickets</TableCell>
                      <TableCell className="flex items-center gap-2">
                        <Button
                          className="bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#4b5563] shadow-md hover:shadow-lg transition-shadow duration-300"
                          size="sm"
                          variant="outline"
                        >
                          <DeleteIcon className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button
                          className="bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#ef4444] shadow-md hover:shadow-lg transition-shadow duration-300"
                          size="sm"
                          variant="outline"
                        >
                          <Trash2Icon className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </div>
          </div>
        </main>
        <AddExp />
      </div>
    </>
  );
}

function DeleteIcon(props) {
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

function PlusIcon(props) {
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

function Trash2Icon(props) {
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
