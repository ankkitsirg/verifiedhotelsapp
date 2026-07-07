function RealityScore({ score }) {
  let color = "bg-red-500";

  if (score >= 90) color = "bg-green-600";
  else if (score >= 75) color = "bg-yellow-500";

  return (
    <span
      className={`${color} rounded-full px-3 py-1 text-sm font-semibold text-white`}
    >
      Reality {score}%
    </span>
  );
}

export default RealityScore;