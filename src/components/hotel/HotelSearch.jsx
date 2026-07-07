import { FaSearch } from "react-icons/fa";

function HotelSearch({ value, onChange }) {
  return (
    <div className="relative mb-8">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search hotels, cities..."
        className="w-full rounded-2xl border border-gray-300 bg-white py-4 pl-12 pr-4 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}

export default HotelSearch;