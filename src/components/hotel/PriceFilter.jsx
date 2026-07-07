import FilterSection from "./FilterSection";

function PriceFilter({
  value,
  onChange,
}) {
  return (
    <FilterSection title="Price per Night">

      <input
        type="range"
        min="1000"
        max="10000"
        step="500"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer"
      />

      <div className="mt-3 flex justify-between text-sm text-slate-500">
        <span>₹1,000</span>

        <span className="font-semibold text-blue-600">
          ₹{value.toLocaleString()}
        </span>
      </div>

    </FilterSection>
  );
}

export default PriceFilter;