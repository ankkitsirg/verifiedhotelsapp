function PriceTag({ price }) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        Starting from
      </p>

      <p className="text-2xl font-bold text-blue-600">
        ₹{price.toLocaleString()}
        <span className="text-base text-gray-500">
          /night
        </span>
      </p>
    </div>
  );
}

export default PriceTag;