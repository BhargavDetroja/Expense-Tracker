import React from "react";
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
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-[#f3f4f6] dark:bg-[#0f172a] py-8 px-6">
          <div className="container mx-auto">
            <Card className="bg-white dark:bg-[#4b5563] shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Settings ⚙️</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency 💱</Label>
                    <Select
                      className="bg-white dark:bg-[#4b5563] shadow-md hover:shadow-lg transition-shadow duration-300"
                      id="currency"
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD 🇺🇸</SelectItem>
                        <SelectItem value="eur">EUR 🇪🇺</SelectItem>
                        <SelectItem value="gbp">GBP 🇬🇧</SelectItem>
                        <SelectItem value="cad">CAD 🇨🇦</SelectItem>
                        <SelectItem value="aud">AUD 🇦🇺</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Monthly Budget 💰</Label>
                    <Input
                      className="bg-white dark:bg-[#4b5563] shadow-md hover:shadow-lg transition-shadow duration-300"
                      id="budget"
                      type="number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notification">
                      Notification Preferences 🔔
                    </Label>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        className="bg-white dark:bg-[#4b5563] shadow-md hover:shadow-lg transition-shadow duration-300"
                        defaultChecked
                        id="notification"
                      />
                      <span>Receive notifications for new expenses</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme 🎨</Label>
                    <RadioGroup
                      className="flex items-center gap-4"
                      defaultValue="light"
                      id="theme"
                    >
                      <Label
                        className="flex items-center gap-2 cursor-pointer"
                        htmlFor="theme-light"
                      >
                        <RadioGroupItem id="theme-light" value="light" />
                        Light
                      </Label>
                      <Label
                        className="flex items-center gap-2 cursor-pointer"
                        htmlFor="theme-dark"
                      >
                        <RadioGroupItem id="theme-dark" value="dark" />
                        Dark
                      </Label>
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
