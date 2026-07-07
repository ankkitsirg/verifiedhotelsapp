import { useState } from "react";

function GuestForm({ bookingData }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <section className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">
                Guest Information
            </h2>
            <div className="mb-6 rounded-xl bg-blue-50 p-4">

                <p>
                    Check-In :
                    <strong> {bookingData.checkIn}</strong>
                </p>

                <p>
                    Check-Out :
                    <strong> {bookingData.checkOut}</strong>
                </p>

                <p>
                    Guests :
                    <strong> {bookingData.guests}</strong>
                </p>

            </div>
            <div className="grid gap-5 md:grid-cols-2">

                <input
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    className="rounded-xl border p-3"
                />

                <input
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    className="rounded-xl border p-3"
                />

                <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="rounded-xl border p-3"
                />

                <input
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="rounded-xl border p-3"
                />

            </div>

        </section>
    );
}

export default GuestForm;