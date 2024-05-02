export const menuHandle = (isOpen) => {
  if (isOpen === "hidden") {
    return "block";
  } else {
    return "hidden";
  }
};
export const expenses = [
  {
    name: "Milk",
    price: "4.12",
    date: "21/02",
    type: "Food",
  },
  {
    name: "Bus",
    price: "2.00",
    date: "20/02",
    type: "Transport",
  },
  {
    name: "Mirror",
    price: "20.00",
    date: "15/02",
    type: "House",
  },
  {
    name: "Cine",
    price: "5.00",
    date: "10/02",
    type: "PopCorn",
  },
];
