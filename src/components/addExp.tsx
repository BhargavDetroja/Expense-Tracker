import React from "react";
import {
  DrawerTrigger,
  DrawerTitle,
  DrawerHeader,
  DrawerFooter,
  DrawerContent,
  Drawer,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const AddExp = () => {  
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 shadow-md hover:shadow-lg transition-shadow duration-300"
          size="sm"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Expense 🧾
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add Expense 💸</DrawerTitle>
        </DrawerHeader>
        <div className="space-y-4 p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date 📅</Label>
              <Input
                className="shadow-md hover:shadow-lg transition-shadow duration-300"
                id="date"
                type="date"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category 🏷️</Label>
              <Select
                className="shadow-md hover:shadow-lg transition-shadow duration-300"
                id="category"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="groceries">Groceries 🍞</SelectItem>
                  <SelectItem value="utilities">Utilities 🔌</SelectItem>
                  <SelectItem value="entertainment">
                    Entertainment 🎬
                  </SelectItem>
                  <SelectItem value="transportation">
                    Transportation 🚗
                  </SelectItem>
                  <SelectItem value="other">Other 🧾</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount 💰</Label>
            <Input
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
              id="amount"
              type="number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description 📝</Label>
            <Textarea
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
              id="description"
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes 📋</Label>
            <Textarea
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
              id="notes"
              rows={3}
            />
          </div>
        </div>
        <DrawerFooter>
          <Button
            className="mr-2 shadow-md hover:shadow-lg transition-shadow duration-300"
            variant="outline"
          >
            Cancel
          </Button>
          <Button className="shadow-md hover:shadow-lg transition-shadow duration-300">
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

function PlusIcon(props : any) {
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

export default AddExp;
