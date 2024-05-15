import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeButton } from "./ui/theme-button";
import { AvatarImage, Avatar } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">💸 Expense Tracker</h1>
        <nav className="flex items-center space-x-4">
          <Link className="" href="/">
            Dashboard
          </Link>
          <Link className="font-bold " href="/setting">
            Settings
          </Link>
          <Link className="font-bold " href="#">
            Reports
          </Link>
          <Link className="font-bold " href="#">
            Categories
          </Link>
          <ThemeButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
