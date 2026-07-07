function AppFeature({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="flex items-center gap-3">
      <Icon className="text-xl text-green-600" />
      <span>{feature.title}</span>
    </div>
  );
}

export default AppFeature;