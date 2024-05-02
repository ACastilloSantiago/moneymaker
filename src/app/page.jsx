"use client";
import CategoryGroup from "@/components/categorygroup/CategoryGroup";
import Expense from "@/components/expense/Expense";

import Navbar from "@/components/navbar/Navbar";
import NavbarLG from "@/components/navbarLG/NavbarLG";
import { useState } from "react";
import { expenses } from "@/cosas";
export default function Home() {
  const [isOpen, setIsOpen] = useState("hidden");

  return (
    <main className=" px-4 relative min-h-screen bg-white/95 z-0">
      <section className="lg:ml-64 px-4 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between md:items-center p-4 ">
          <h6 className="text-lg font-semibold ">Dashboard</h6>
          <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <section className="grid  md:grid-cols-2 gap-6">
          {expenses.map((expense, index) => {
            return (
              <Expense
                key={index}
                name={expense.name}
                price={expense.price}
                date={expense.date}
                type={expense.type}
              />
            );
          })}
        </section>
        <CategoryGroup />
        <div className=" fixed min-h-72 bg-blue-500 right-0 top-0 w-full -z-10"></div>
      </section>
      <NavbarLG isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
