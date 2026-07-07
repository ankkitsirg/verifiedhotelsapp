import { useParams } from "react-router-dom";

import { hotels } from "@/data/hotels";

import HotelGallery from "./sections/HotelGallery";
import HotelInfo from "./sections/HotelInfo";
import BookingCard from "./sections/HotelBookingCard";
import Amenities from "./sections/Amenities";
import AboutHotel from "./sections/AboutHotel";
import AIRealityAnalysis from "./sections/AIRealityAnalysis";
import Reviews from "./sections/Reviews";
import NearbyMap from "./sections/NearbyMap";
import SimilarHotels from "./sections/SimilarHotels";

function HotelDetails() {
    const { id } = useParams();

    const hotel = hotels.find(
        (hotel) => hotel.id === Number(id)
    );

    if (!hotel) {
        return (
            <div className="py-40 text-center text-3xl">
                Hotel Not Found
            </div>
        );
    }

    return (
        <>
            <HotelGallery hotel={hotel} />

            <section className="py-12">
                <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-3">

                    <div className="space-y-12 lg:col-span-2">

                        <HotelInfo hotel={hotel} />
                        <Amenities hotel={hotel} />
                        <AboutHotel hotel={hotel} />
                        <AIRealityAnalysis hotel={hotel} />
                        <Reviews hotel={hotel} />
                        <NearbyMap hotel={hotel} />
                        <SimilarHotels hotel={hotel} />
                    </div>

                    <div>

                        <BookingCard hotel={hotel} />

                    </div>

                </div>
            </section>
        </>
    );
}

export default HotelDetails;