function VideoUploader() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Upload Hotel Videos
      </h2>

      <input
        type="file"
        accept="video/*"
        multiple
        className="w-full rounded-xl border p-4"
      />

      <p className="mt-3 text-sm text-slate-500">
        Short walkthrough videos help verify the
        hotel's actual condition.
      </p>

    </div>
  );
}

export default VideoUploader;