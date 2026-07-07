import Button from "@/components/ui/Button";

function SearchSection() {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-2xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          <input
            type="text"
            placeholder="Where are you going?"
            className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="date"
            className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="date"
            className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-500">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>

          <Button fullWidth size="lg">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;