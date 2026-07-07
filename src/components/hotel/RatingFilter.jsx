import FilterSection from "./FilterSection";

const ratings = [5, 4, 3];

function RatingFilter({
  value,
  onChange,
}) {
  return (
    <FilterSection title="Minimum Rating">

      <div className="space-y-3">

        {ratings.map((rating) => (
          <label
            key={rating}
            className="flex cursor-pointer items-center gap-3"
          >
            <input
              type="radio"
              name="rating"
              checked={value === rating}
              onChange={() => onChange(rating)}
            />

            <span>
              {rating} ★ & Above
            </span>

          </label>
        ))}

        <label className="flex cursor-pointer items-center gap-3">

          <input
            type="radio"
            name="rating"
            checked={value === 0}
            onChange={() => onChange(0)}
          />

          <span>All Ratings</span>

        </label>

      </div>

    </FilterSection>
  );
}

export default RatingFilter;