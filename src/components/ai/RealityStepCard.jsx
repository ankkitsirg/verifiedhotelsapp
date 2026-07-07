function RealityStepCard({ step }) {
  const Icon = step.icon;

  return (
    <div className="relative rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <Icon className="text-3xl text-blue-600" />
      </div>

      <h3 className="text-2xl font-bold">
        {step.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {step.description}
      </p>
    </div>
  );
}

export default RealityStepCard;