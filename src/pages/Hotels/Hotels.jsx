import { useMemo, useState } from "react";
import { useEffect } from "react";
import { hotels } from "@/data/hotels";

import HotelsHeader from "./Sections/HotelsHeader";
import HotelFilters from "./Sections/HotelFilters";
import HotelSort from "./Sections/HotelSort";
import HotelGrid from "./Sections/HotelGrid";

import HotelSearch from "@/components/hotel/HotelSearch";
import Pagination from "@/components/hotel/Pagination";

function Hotels() {
  const [currentPage, setCurrentPage] = useState(1);

  const HOTELS_PER_PAGE = 6;

  const [filters, setFilters] = useState({
    search: "",
    price: 10000,
    rating: 0,
    reality: 0,
    amenities: [],
    hotelType: "",
  });

  const [sortBy, setSortBy] = useState("popularity");

  const filteredHotels = useMemo(() => {

    const keyword = filters.search.toLowerCase();

    const filtered = hotels.filter((hotel) => {

      const searchMatch =
        hotel.name.toLowerCase().includes(keyword) ||
        hotel.city.toLowerCase().includes(keyword);

      const priceMatch =
        hotel.price <= filters.price;

      const ratingMatch =
        hotel.rating >= filters.rating;

      const realityMatch =
        hotel.realityScore >= filters.reality;

      const amenitiesMatch =
        filters.amenities.length === 0 ||
        filters.amenities.every((amenity) =>
          hotel.amenities.includes(amenity)
        );

      const hotelTypeMatch =
        filters.hotelType === "" ||
        hotel.type === filters.hotelType;

      return (
        searchMatch &&
        priceMatch &&
        ratingMatch &&
        realityMatch &&
        amenitiesMatch &&
        hotelTypeMatch
      );
    });

    switch (sortBy) {

      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      case "reality":
        filtered.sort(
          (a, b) => b.realityScore - a.realityScore
        );
        break;

      default:
        filtered.sort(
          (a, b) => b.reviews - a.reviews
        );
    }

    return filtered;

  }, [filters, sortBy]);

  const totalPages = Math.ceil(
    filteredHotels.length / HOTELS_PER_PAGE
  );

  const paginatedHotels = filteredHotels.slice(
    (currentPage - 1) * HOTELS_PER_PAGE,
    currentPage * HOTELS_PER_PAGE
  );
  useEffect(() => {
  setCurrentPage(1);
}, [filters, sortBy]);
  return (
    <>
      <HotelsHeader />

      <section className="bg-slate-50 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <HotelFilters
              filters={filters}
              setFilters={setFilters}
            />
          </div>

          <div className="lg:col-span-3">
            <HotelSearch
              value={filters.search}
              onChange={(value) =>
                setFilters((prev) => ({
                  ...prev,
                  search: value,
                }))
              }
            />

            <HotelSort
              total={filteredHotels.length}
              value={sortBy}
              onChange={setSortBy}
            />

            <HotelGrid hotels={paginatedHotels} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hotels;