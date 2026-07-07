import { forwardRef } from "react";

const Input = forwardRef(function Input(
  {
    label,
    error,
    type = "text",
    placeholder,
    className = "",
    ...props
  },
  ref
) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`
          w-full
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          outline-none
          transition
          focus:border-blue-600
          focus:ring-2
          focus:ring-blue-200
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

export default Input;