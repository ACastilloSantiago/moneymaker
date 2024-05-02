"use client";
import Navbar from "@/components/navbar/Navbar";
import ProfileBar from "@/components/profileBar/ProfileBar";
import NavbarLG from "@/components/navbarLG/NavbarLG";
import EditProfile from "@/components/editProfile/EditProfile";
import { useState } from "react";
const User = () => {
  const [isOpen, setIsOpen] = useState("hidden");

  return (
    <main className=" relative min-h-screen bg-white/95 z-0 px-4">
      <section className="lg:ml-64 px-4 grid gap-4">
        <article className="flex flex-col md:flex-row justify-between md:items-center p-4 ">
          <h6 className="text-lg font-semibold ">Profile</h6>
          <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        </article>
        <ProfileBar />
        <div className="fixed min-h-72 bg-blue-500 right-0 top-0 w-full -z-10"></div>
        <EditProfile />
      </section>
      <NavbarLG isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
};

export default User;
