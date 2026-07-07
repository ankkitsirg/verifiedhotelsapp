import FilterSection from "./FilterSection";

const OPTIONS = [
  {
    label: "Free WiFi",
    value: "wifi",
  },
  {
    label: "Swimming Pool",
    value: "pool",
  },
  {
    label: "Parking",
    value: "parking",
  },
  {
    label: "Breakfast",
    value: "breakfast",
  },
  {
    label: "Gym",
    value: "gym",
  },
];

function AmenitiesFilter({
  value,
  onChange,
}) {
  function toggleAmenity(item) {
    if (value.includes(item)) {
      onChange(
        value.filter((a) => a !== item)
      );
    } else {
      onChange([...value, item]);
    }
  }

  return (
    <FilterSection title="Amenities">
      <div className="space-y-3">
        {OPTIONS.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-3"
          >
            <input
              type="checkbox"
              checked={value.includes(option.value)}
              onChange={() =>
                toggleAmenity(option.value)
              }
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
}

export default AmenitiesFilter;