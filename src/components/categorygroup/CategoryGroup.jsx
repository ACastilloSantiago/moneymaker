import React from "react";
import Category from "../category/Category";

const CategoryGroup = () => {
  const expenses = [
    {
      category: "House",
      expensesMade: 4,
      value: 1140,
      percentage: 38,
      type: "House",
    },
    {
      category: "Food",
      expensesMade: 40,
      value: 960,
      percentage: 32,
      type: "Food",
    },
    {
      category: "Transport",
      expensesMade: 60,
      value: 540,
      percentage: 18,
      type: "Transport",
    },
    {
      category: "Recreation",
      expensesMade: 10,
      value: 360,
      percentage: 12,
      type: "PopCorn",
    },
  ];

  return (
    <section className="rounded-lg bg-white p-4">
      <h1 className="text-gray-800 font-medium text-xl">Expenses</h1>
      <article className="">
        {expenses.map((expense, index) => {
          return (
            <Category
              key={index}
              category={expense.category}
              value={expense.value}
              percentage={expense.percentage}
              expensesMade={expense.expensesMade}
              type={expense.type}
            />
          );
        })}
      </article>
    </section>
  );
};

export default CategoryGroup;
