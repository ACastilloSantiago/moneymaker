import Food from "@/svg/Food";
import House from "@/svg/House";
import PopCorn from "@/svg/PopCorn";
import Transport from "@/svg/Transport";

const Expense = ({ name, price, type, date }) => {
  return (
    <main className=" bg-white   text-black p-4 rounded-lg">
      <section className="flex justify-between items-center">
        <div>
          {name && (
            <h2 className="text-gray-600 text-base font-medium uppercase">
              {name}
            </h2>
          )}
          <span className="text-gray-800  text-xl font-semibold">${price}</span>
        </div>
        <div className="mr-2">
          {type && type === "Food" ? (
            <Food />
          ) : type === "Transport" ? (
            <Transport />
          ) : type === "PopCorn" ? (
            <PopCorn />
          ) : (
            type === "House" && <House />
          )}
        </div>
      </section>
      <p className="text-gray-400">{date}</p>
    </main>
  );
};

export default Expense;
