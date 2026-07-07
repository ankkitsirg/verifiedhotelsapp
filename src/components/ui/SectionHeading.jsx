function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      {badge && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          {badge}
        </p>
      )}

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;