function HotelSort({
  total,
  value,
  onChange,
}) {
  return (
    <div className="mb-6 flex items-center justify-between">

      <div>
        <h2 className="text-2xl font-bold">
          Hotels
        </h2>

        <p className="text-gray-500">
          {total} hotel{total !== 1 ? "s" : ""} found
        </p>
      </div>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-gray-300 px-4 py-2"
      >
        <option value="popularity">
          Popularity
        </option>

        <option value="price-low">
          Price: Low to High
        </option>

        <option value="price-high">
          Price: High to Low
        </option>

        <option value="rating">
          Highest Rating
        </option>

        <option value="reality">
          Reality Score
        </option>
      </select>

    </div>
  );
}

export default HotelSort;