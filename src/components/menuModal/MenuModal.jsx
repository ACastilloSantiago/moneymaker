"use client";
import React from "react";

const MenuModal = ({ setIsOpen }) => {
  const exitHandle = () => {
    setIsOpen(false);
  };
  return (
    <div className="">
      MenuModal
      <span onClick={exitHandle}>x</span>
    </div>
  );
};

export default MenuModal;
// h-screen w-full absolute bg-red-500 inset-0
