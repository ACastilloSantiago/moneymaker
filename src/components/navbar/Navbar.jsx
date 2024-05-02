"use client";
import Magnify from "@/svg/Magnify";
import Menu from "@/svg/Menu";
import Account from "@/svg/Account";
import { menuHandle } from "@/cosas";
import Link from "next/link";
const Navbar = ({ setIsOpen, isOpen }) => {
  const exitModal = () => {
    setIsOpen(menuHandle(isOpen));
  };
  return (
    <section className="flex justify-between ">
      <div
        className="flex items-center rounded-lg
      bg-white w-3/5"
      >
        <div className="ml-2">
          <Magnify />
        </div>
        <input
          type={"text"}
          id={"label"}
          placeholder="Escribe aquí"
          className="text-gray-500 p-2  w-full rounded-r-lg focus-visible:outline-none"
        />
      </div>
      <div className="flex items-center">
        <Link href={"/user"} className="hover:cursor-pointer">
          <Account />
        </Link>
        <div className="hover:cursor-pointer lg:hidden">
          <Menu onClick={exitModal} color="white" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
