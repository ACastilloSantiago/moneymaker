import Account from "@/svg/Account";
import Menu from "@/svg/Menu";
import Link from "next/link";
import React, { useState } from "react";
import Signup from "@/svg/Signup";
import Dashboard from "@/svg/Dashboard";
import Signin from "@/svg/Signin";

const NavbarSignin = () => {
  const [isOpen, setIsOpen] = useState("max-h-0");
  const menuHandle = () => {
    isOpen === "max-h-0" ? setIsOpen("max-h-52") : setIsOpen("max-h-0");
  };
  return (
    <section className="absolute left-0 right-0 mx-6 rounded-lg px-8 py-2 shadow-md bg-white/80 backdrop-blur-2xl backdrop-saturate-200">
      <div
        className=" flex justify-between lg:justify-normal  py-2 
        "
      >
        <h4 className="font-medium text-gray-700 lg:flex-1">Money Maker</h4>
        <article className="hover:cursor-pointer lg:hidden">
          <Menu onClick={menuHandle} color="gray" />
        </article>
        <article className=" hidden lg:block">
          <div className=" text-gray-500 overflow-hidden  duration-500 ease-linear delay-0 flex gap-4">
            <Link href={"/"} className="flex gap-2 items-center w-min">
              <Dashboard />
              Dashboard
            </Link>
            <Link href={"/user"} className="flex gap-2 items-center w-min">
              <Account />
              Profile
            </Link>
            <Link href={"/signup"} className="flex gap-2 items-center w-min">
              <Signup /> SingUp
            </Link>
            <Link href={"/signin"} className="flex gap-2 items-center w-min">
              <Signin />
              SignIn
            </Link>
          </div>
        </article>
        <div className="hidden lg:block flex-1"></div>
      </div>
      <div
        className={`${isOpen}  text-gray-500 overflow-hidden  duration-500 ease-linear delay-0 flex flex-col gap-2`}
      >
        <Link href={"/"} className="flex gap-2 items-center w-min">
          <Dashboard />
          Dashboard
        </Link>
        <Link href={"/user"} className="flex gap-2 items-center w-min">
          <Account />
          Profile
        </Link>
        <Link href={"/signup"} className="flex gap-2 items-center w-min">
          <Signup /> SingUp
        </Link>
        <Link href={"/signin"} className="flex gap-2 items-center w-min">
          <Signin />
          SignIn
        </Link>
      </div>
    </section>
  );
};

export default NavbarSignin;
