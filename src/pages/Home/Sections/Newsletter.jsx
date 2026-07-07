import Button from "@/components/ui/Button";

function Newsletter() {
  return (
    <section className="bg-blue-600 py-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-2xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Stay Updated
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Join Our Newsletter
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Get exclusive hotel deals, travel tips, verified reviews,
            and the latest AI Reality Score updates delivered straight
            to your inbox.
          </p>
        </div>

        <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />

          <Button size="lg">
            Subscribe
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

export default Newsletter;