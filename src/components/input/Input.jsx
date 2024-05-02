"use client";
const Input = ({ label, type, setValue, placeholder }) => {
  const inputhandle = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="flex flex-col gap-1 justify-center ">
      {label && (
        <label
          htmlFor={label}
          className="text-gray-800 text-sm font-semibold ml-1"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        autoComplete="current-password"
        id={label}
        placeholder={placeholder}
        className="text-gray-500 p-2 rounded-lg w-full border focus-visible:outline-none "
        onChange={inputhandle}
      />
    </div>
  );
};

export default Input;
