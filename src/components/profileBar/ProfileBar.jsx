import Messages from "@/svg/Messages";
import Settings from "@/svg/Settings";
import Image from "next/image";

const ProfileBar = () => {
  return (
    <section className="flex flex-col md:flex-row gap-2 bg-white rounded-lg p-4 text-gray-700 md:justify-between md:items-center">
      <article className="flex gap-6 items-center">
        <Image
          src={"/cv_foto_fondoceleste.png"}
          width={80}
          height={80}
          className="rounded-lg"
          alt="je"
        />
        <div className="flex flex-col ">
          <h5 className=" font-semibold text-lg">Santiago Castillo</h5>
          <span className="text-gray-600">Developer Web</span>
        </div>
      </article>
      <ul className="text-center font-normal flex flex-col items-center md:flex-row md:gap-4 gap-1 ">
        <li className="flex justify-center gap-1 border p-2 rounded-lg shadow-md hover:cursor-pointer hover:scale-105 w-full max-w-64">
          <Settings />
          App
        </li>
        <li className="flex justify-center gap-1 border p-2 rounded-md shadow-md hover:cursor-pointer hover:scale-105 w-full max-w-64">
          <Messages />
          Messages
        </li>

        <li className="flex justify-center gap-1 border p-2 rounded-md shadow-md hover:cursor-pointer hover:scale-105 w-full max-w-64">
          <Settings />
          Settings
        </li>
      </ul>
    </section>
  );
};

export default ProfileBar;
