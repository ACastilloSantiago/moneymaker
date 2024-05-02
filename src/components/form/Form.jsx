"use client";
import { useState } from "react";
import Input from "../input/Input";
import Facebook from "@/svg/Facebook";
import Google from "@/svg/Google";
import Apple from "@/svg/Apple";
import Link from "next/link";
const Form = ({ button }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email:", email, "password", password, "name", name);
  };
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <form action="" className=" p-4 flex flex-col gap-2 ">
      <h2 className="text-gray-600 text-xl text-center font-medium">
        Register with
      </h2>
      <article className="flex justify-around">
        <div className="p-3 border rounded-lg">
          <Facebook />
        </div>
        <div className="p-3 border rounded-lg">
          <Google />
        </div>
        <div className="p-3 border rounded-lg">
          <Apple />
        </div>
      </article>
      <span className="text-center text-gray-500 font-medium ">or</span>
      <Input placeholder="name" type="text" setValue={setName} />
      <Input placeholder="email" type="email" setValue={setEmail} />

      <Input placeholder="Password" type="password" setValue={setPassword} />

      <article className="flex gap-2 justify-center items-start">
        <div>
          <input type="checkbox" className="w-4 h-4" />
        </div>
        <span className=" text-gray-500 text-sm">
          I agree the{" "}
          <strong className="font-semibold text-gray-700">
            {" "}
            Terms and Conditions
          </strong>
        </span>
      </article>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-gray-800 font-medium p-2 rounded-lg py-3"
      >
        Sign up
      </button>

      <article>
        <span className="text-gray-400 text-sm">
          Already have an account?{" "}
          <Link href={"/signin"}>
            <strong className="font-semibold text-gray-700">Sign in</strong>
          </Link>{" "}
        </span>
      </article>
    </form>
  );
};

export default Form;
