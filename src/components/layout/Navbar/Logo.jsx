import { Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import { APP } from "@/constants/app";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-2xl font-bold text-blue-600"
    >
      <FaHotel className="text-3xl" />
      <span>{APP.name}</span>
    </Link>
  );
}

export default Logo;