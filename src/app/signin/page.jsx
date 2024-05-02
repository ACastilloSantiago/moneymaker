"use client";
import Form from "@/components/form/Form";
import Input from "@/components/input/Input";
import NavbarSignin from "@/components/navbarSignin/NavbarSignin";
import Link from "next/link";
import React, { useState } from "react";
const page = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email:", email, "password", password);
  };
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <main className="bg-white h-screen ">
      <section className="max-w-7xl h-full  p-6 relative z-10  flex flex-col  mx-auto">
        <NavbarSignin />
        <article className="flex-grow flex items-center w-full ">
          <form
            action=""
            className="w-full p-8 flex flex-col gap-2 md:w-8/12 md:mx-auto
          lg:mx-0 lg:w-2/6 "
          >
            <h2 className="text-gray-600 text-xl  font-medium">Sign in</h2>
            <span className="text-gray-400 ">
              Enter your email and password to sign in
            </span>
            <Input label="Email" type="email" setValue={setEmail} />

            <Input label="Password" type="password" setValue={setPassword} />

            <article className="flex gap-2 justify-start items-start">
              <div>
                <input type="checkbox" className="w-4 h-4" />
              </div>
              <span className=" text-gray-500 text-sm">Remember me</span>
            </article>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 font-medium p-2 rounded-lg py-3"
            >
              Sign in
            </button>

            <article className="text-center">
              <span className="text-gray-400 text-sm ">
                Don't have an account?{" "}
                <Link href={"/signup"}>
                  <strong className="font-semibold text-gray-700">
                    Sign up
                  </strong>
                </Link>{" "}
              </span>
            </article>
          </form>
          <div className="bg-blue-500 w-3/6 lg:bottom-0 absolute top-0 right-0 m-4 rounded-xl opacity-85  -z-10 flex justify-center items-center ">
            <div className="mx-16 hidden lg:inline-block px-12 text-center">
              <h4 className="text-center font-semibold text-3xl p-8 py-6">
                "Attention is the new currency"
              </h4>
              <span className="">
                The more effortless the writing looks, the more effort the
                writer actually put into the process.
              </span>
            </div>
          </div>
        </article>
      </section>
    </main>

    // <section className="bg-red-500 h-screen ">
    //   <span>hola</span>
    //   <article className="bg-blue-500 h- flex flex-col justify-center">
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
    //       cupiditate voluptate! Dignissimos, iure impedit, aut nostrum excepturi
    //       nulla aspernatur illum corrupti sapiente iste voluptates doloremque
    //       labore! Doloribus, animi. Repellat, fugiat? Libero asperiores
    //       blanditiis officia ex voluptates quidem quibusdam minus quisquam
    //       incidunt rem repudiandae nemo, expedita sit vitae architecto tempora
    //       commodi corrupti! Animi ullam rerum, facilis provident minima ipsum
    //       quam quos?
    //     </p>
    //   </article>
    // </section>
  );
};

export default page;
