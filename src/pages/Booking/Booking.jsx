import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

import { hotels } from "@/data/hotels";

import BookingHeader from "./sections/BookingHeader";
import GuestForm from "./sections/GuestForm";
import BookingSummary from "./sections/BookingSummary";
import PaymentMethods from "./sections/PaymentMethods";

function Booking() {
    const { id } = useParams();
    const navigate = useNavigate();

    const location = useLocation();

    const bookingData = location.state;
    const hotel = hotels.find(
        (hotel) => hotel.id === Number(id)
    );

    if (!hotel) {

        if (!bookingData) {
            navigate(`/hotels/${hotel.id}`);
            return null;
        }


        return (
            <div className="py-40 text-center text-3xl">
                Hotel Not Found
            </div>
        );
    }

    return (
        <>
            <BookingHeader hotel={hotel} />

            <section className="bg-slate-50 py-12">

                <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3">

                    <div className="space-y-8 lg:col-span-2">

                        <GuestForm  bookingData={bookingData}/>

                        <PaymentMethods />

                    </div>

                    <BookingSummary hotel={hotel} bookingData={bookingData} />

                </div>

            </section>
        </>
    );
}

export default Booking;