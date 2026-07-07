function RealityFeature({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow">
      <Icon className="text-green-600 text-xl" />

      <span className="font-medium">
        {feature.title}
      </span>
    </div>
  );
}

export default RealityFeature;