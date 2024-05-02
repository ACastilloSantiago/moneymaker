"use client";
import Form from "@/components/form/Form";
import Navbar from "@/components/navbar/Navbar";
import NavbarSignin from "@/components/navbarSignin/NavbarSignin";

const page = () => {
  return (
    <main className="bg-white">
      <section className="relative  overflow-hidden min-h-screen -z-0 flex flex-col gap-12 pb-4 max-w-7xl mx-auto">
        <div className="absolute bg-blue-500  min-h-96 rounded-lg m-4 right-0 left-0 -z-10"></div>
        <section className="p-8 flex flex-col gap-10 pb-0 ">
          <NavbarSignin />
          <article className="flex flex-col gap-4 mt-24">
            <h1
              className="text-center font-medium text-4xl 
        "
            >
              Welcome!
            </h1>
            <p className="text-center">
              Use these awesome forms to login or create new account in your
              project for free.
            </p>
          </article>
        </section>
        <div
          className=" bg-white border rounded-lg w-3/4 mx-auto max-w-xs
      "
        >
          <Form />
        </div>
      </section>
    </main>
  );
};

export default page;
