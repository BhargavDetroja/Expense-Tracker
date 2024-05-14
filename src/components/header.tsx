import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeButton } from "./ui/theme-button";
import { AvatarImage, Avatar } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="bg-[#4b5563] py-4 px-6 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">💸 Expense Tracker</h1>
        <nav className="flex items-center space-x-4">
          <Link className="hover:text-[#f8bc24]" href="#">
            Dashboard
          </Link>
          <Link className="font-bold hover:text-[#f8bc24]" href="#">
            Settings
          </Link>
          <Link className="font-bold hover:text-[#f8bc24]" href="#">
            Reports
          </Link>
          <Link className="font-bold hover:text-[#f8bc24]" href="#">
            Categories
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
