function Card({
  children,
  className = "",
  hover = false,
  padding = "p-6",
}) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-sm
        border
        border-gray-100
        ${padding}
        ${
          hover
            ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;