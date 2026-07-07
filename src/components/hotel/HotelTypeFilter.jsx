import FilterSection from "./FilterSection";

const TYPES = [
  "Luxury",
  "Resort",
  "Business",
  "Budget",
 
];

function HotelTypeFilter({ value, onChange }) {
  return (
    <FilterSection title="Hotel Type">
      <div className="space-y-3">

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="hotelType"
            checked={value === ""}
            onChange={() => onChange("")}
          />

          <span>All Types</span>
        </label>

        {TYPES.map((type) => (
          <label
            key={type}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              name="hotelType"
              checked={value === type}
              onChange={() => onChange(type)}
            />

            <span>{type}</span>
          </label>
        ))}

      </div>
    </FilterSection>
  );
}

export default HotelTypeFilter;