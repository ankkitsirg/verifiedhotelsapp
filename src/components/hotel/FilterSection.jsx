function FilterSection({ title, children }) {
  return (
    <div className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
      <h3 className="mb-4 text-lg font-semibold text-slate-800">
        {title}
      </h3>

      {children}
    </div>
  );
}

export default FilterSection;