import Food from "@/svg/Food";
import House from "@/svg/House";
import PopCorn from "@/svg/PopCorn";
import Transport from "@/svg/Transport";
import React from "react";

const Category = ({ category, value, percentage, expensesMade, type }) => {
  return (
    <article className="flex  py-3 items-center">
      <div className="flex items-center gap-3 w-1/4">
        <div>
          {type && type === "House" ? (
            <House />
          ) : type === "Food" ? (
            <Food />
          ) : type === "PopCorn" ? (
            <PopCorn />
          ) : (
            type === "Transport" && <Transport />
          )}
        </div>
        <div className="overflow-hidden">
          <span className="text-gray-600 text-sm">Category:</span>
          <h4 className="text-gray-700 text-lg font-medium truncate ">
            {category}
          </h4>
        </div>
      </div>
      <div className="w-1/4 items-center flex flex-col">
        <span className="text-gray-600 text-sm">Expenses Made:</span>
        <h4 className="text-gray-700 text-lg font-medium">{expensesMade}</h4>
      </div>
      <div className="w-1/4 items-center flex flex-col">
        <span className="text-gray-600 text-sm">Percentaje:</span>
        <h4 className="text-gray-700 text-lg font-medium">{percentage}%</h4>
      </div>
      <div className="w-1/4 items-center flex flex-col">
        <span className="text-gray-600 text-sm">Value:</span>
        <h4 className="text-gray-700 text-lg font-medium">${value}</h4>
      </div>
    </article>
  );
};

export default Category;
