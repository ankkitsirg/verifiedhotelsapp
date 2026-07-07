function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <Icon className="text-3xl text-blue-600" />
      </div>

      <h3 className="mb-3 text-xl font-bold">
        {feature.title}
      </h3>

      <p className="leading-7 text-gray-600">
        {feature.description}
      </p>
    </article>
  );
}

export default FeatureCard;