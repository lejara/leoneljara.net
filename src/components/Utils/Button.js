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
        disabled={disabled || selected}
        type={type}
        value={value}
        onChange={onChange}
        onClick={onClick}
        className={` rounded-sm p-1 transition-colors duration-150 ${
          selected
            ? "bg-LJ_LightBlue cursor-default"
            : "hover:bg-LJ_LightBlue bg-LJ_Green"
        } text-black px-4 text-xl md:text-2xl ${className} ${
          hasError && "text-red-600"
        }`}
      >
        {children}
      </button>
    );
  }
);

export default Button;
