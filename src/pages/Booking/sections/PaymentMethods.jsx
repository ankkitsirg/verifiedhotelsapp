import { useState } from "react";

function PaymentMethods() {
  const [method, setMethod] = useState("card");

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Payment Method
      </h2>

      <div className="space-y-4">

        <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4">

          <input
            type="radio"
            value="card"
            checked={method === "card"}
            onChange={(e) => setMethod(e.target.value)}
          />

          💳 Credit / Debit Card

        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4">

          <input
            type="radio"
            value="upi"
            checked={method === "upi"}
            onChange={(e) => setMethod(e.target.value)}
          />

          📱 UPI

        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4">

          <input
            type="radio"
            value="netbanking"
            checked={method === "netbanking"}
            onChange={(e) => setMethod(e.target.value)}
          />

          🏦 Net Banking

        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4">

          <input
            type="radio"
            value="cod"
            checked={method === "cod"}
            onChange={(e) => setMethod(e.target.value)}
          />

          🏨 Pay at Hotel

        </label>

      </div>

    </section>
  );
}

export default PaymentMethods;