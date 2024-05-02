"use client";
import Account from "@/svg/Account";
import Dashboard from "@/svg/Dashboard";
import Link from "next/link";
import Signin from "@/svg/Signin";
import Signup from "@/svg/Signup";
import { menuHandle } from "@/cosas";
const NavbarLG = ({ isOpen, setIsOpen }) => {
  const exitModal = () => {
    setIsOpen(menuHandle(isOpen));
  };
  return (
    <aside
      className={` ${isOpen} lg:block animate-slideRight  text-gray-700 fixed bg-white m-4 top-0 bottom-0 left-0 rounded-2xl p-4 w-60`}
    >
      <div id="xd" className="relative ">
        <h4 className="font-medium text-gray-700 lg:flex-1 text-center py-2">
          Money Maker
        </h4>
        <button
          onClick={exitModal}
          className="font-semibold text-gray-500 absolute top-0 right-0 text-lg"
        >
          X
        </button>
      </div>
      <article className="  ">
        <div className=" ">
          <Link
            href={"/"}
            className="flex gap-2 items-center p-2 rounded-md hover:bg-gray-200 w-full"
          >
            <Dashboard />
            Dashboard
          </Link>
        </div>
      </article>
      <article className="">
        <div className="flex flex-col ">
          <h6
            className="text-
        gray-700 py-2"
          >
            Account Pages
          </h6>
          <Link
            href={"/user"}
            className="flex gap-2 items-center p-2 rounded-md hover:bg-gray-200 w-full"
          >
            <Account />
            Profile
          </Link>
          <Link
            href={"/signup"}
            className="flex gap-2 items-center p-2 rounded-md hover:bg-gray-200 w-full"
          >
            <Signup /> SingUp
          </Link>
          <Link
            href={"/signin"}
            className="flex gap-2 items-center p-2 rounded-md hover:bg-gray-200 w-full"
          >
            <Signin />
            SignIn
          </Link>
        </div>
      </article>
    </aside>
  );
};

export default NavbarLG;
