function ImageUploader() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Upload Hotel Photos
      </h2>

      <input
        type="file"
        multiple
        accept="image/*"
        className="w-full rounded-xl border p-4"
      />

      <p className="mt-3 text-sm text-slate-500">
        Upload clear photos of your room, bathroom,
        lobby, restaurant and amenities.
      </p>

    </div>
  );
}

export default ImageUploader;