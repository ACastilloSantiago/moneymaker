"use client";

const Menu = ({ onClick, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path fill={color} d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
    </svg>
  );
};

export default Menu;
