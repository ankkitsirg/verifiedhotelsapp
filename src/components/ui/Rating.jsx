import { FaStar } from "react-icons/fa";

function Rating({ value }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={
            index < value
              ? "text-yellow-400"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

export default Rating;