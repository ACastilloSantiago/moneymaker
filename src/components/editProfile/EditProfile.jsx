import React, { useState } from "react";
import Input from "../input/Input";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postal, setPostal] = useState("");
  const [about, setAbout] = useState("");
  const [address, setAddress] = useState("");

  return (
    <section className="bg-white text-black p-6 rounded-lg ">
      <div>
        <h4 className="text-center font-medium text-lg text-gray-700">
          Edit Profile
        </h4>
      </div>
      <section className="grid gap-4">
        <article className="grid gap-4">
          <h5 className="text-gray-500 text-sm">USER INFORMATION</h5>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label={"Username"}
              placeholder="lucky.jesse"
              type="text"
              setValue={setName}
            />
            <Input
              label={"Email address"}
              placeholder="jesse@example.com"
              type="text"
              setValue={setEmail}
            />
            <Input
              label={"First name"}
              placeholder="Jesse"
              type="text"
              setValue={setFirstName}
            />
            <Input
              label={"Last name"}
              placeholder="Lucky"
              type="text"
              setValue={setLastName}
            />
          </div>
        </article>
        <hr />
        <article className="grid gap-4">
          <h5 className="text-gray-500 text-sm">CONTACT INFORMATION</h5>
          <article className="grid gap-4">
            <Input
              label={"Address"}
              placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
              type="text"
              setValue={setAddress}
            />
            <div className="grid grid-cols-3 gap-6">
              <Input
                label={"City"}
                placeholder="New York"
                type="text"
                setValue={setCity}
              />{" "}
              <Input
                label={"Country"}
                placeholder="United States"
                type="text"
                setValue={setCountry}
              />{" "}
              <Input
                label={"Postal code"}
                placeholder="437300"
                type="text"
                setValue={setPostal}
              />
            </div>
          </article>
        </article>
        <hr />
        <article className="grid gap-4">
          <h5 className="text-gray-500 text-sm">ABOUT ME</h5>
          <article>
            {" "}
            <Input
              label={"About me"}
              placeholder="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
              type="text"
              setValue={setAbout}
            />
          </article>
        </article>
      </section>
    </section>
  );
};

export default EditProfile;
