import * as React from "react";

const Button = React.forwardRef(
  (
    {
      type,
      value,
      disabled = false,
      className,
      onClick,
      hasError,
      onChange,
      children,
      selected,
    },
    ref
  ) => {
    return (
      <button
        disabled={disabled}
        type={type}
        value={value}
        onChange={onChange}
        onClick={onClick}
        className={` rounded-sm p-1 ${
          selected ? "bg-LJ_LightBlue" : "hover:bg-LJ_LightBlue bg-LJ_Green"
        } text-black px-4 text-2xl ${className} ${hasError && "text-red-400"}`}
      >
        {children}
      </button>
    );
  }
);

export default Button;
