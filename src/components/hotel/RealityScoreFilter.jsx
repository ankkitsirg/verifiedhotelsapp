import FilterSection from "./FilterSection";

const scores = [90, 80, 70, 60];

function RealityScoreFilter({
  value,
  onChange,
}) {
  return (
    <FilterSection title="Reality Score">

      <div className="space-y-3">

        {scores.map((score) => (
          <label
            key={score}
            className="flex cursor-pointer items-center gap-3"
          >
            <input
              type="radio"
              name="reality"
              checked={value === score}
              onChange={() => onChange(score)}
            />

            <span>{score}% & Above</span>

          </label>
        ))}

        <label className="flex cursor-pointer items-center gap-3">

          <input
            type="radio"
            name="reality"
            checked={value === 0}
            onChange={() => onChange(0)}
          />

          <span>All Scores</span>

        </label>

      </div>

    </FilterSection>
  );
}

export default RealityScoreFilter;