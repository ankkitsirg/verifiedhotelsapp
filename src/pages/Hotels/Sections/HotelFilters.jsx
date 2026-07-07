import Button from "@/components/ui/Button";

import PriceFilter from "@/components/hotel/PriceFilter";
import RatingFilter from "@/components/hotel/RatingFilter";
import RealityScoreFilter from "@/components/hotel/RealityScoreFilter";
import AmenitiesFilter from "@/components/hotel/AmenitiesFilter";
import HotelTypeFilter from "@/components/hotel/HotelTypeFilter";

function HotelFilters({
  filters,
  setFilters,
}) {
  function resetFilters() {
    setFilters({
      search: "",
      price: 10000,
      rating: 0,
      reality: 0,
      amenities: [],
       hotelType: "",
    });
  }


  return (
    <aside className="space-y-8 rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold">
        Filters
      </h2>

      <PriceFilter
        value={filters.price}
        onChange={(value) =>
          setFilters((prev) => ({
            ...prev,
            price: value,
          }))}
      />

      <RatingFilter
        value={filters.rating}
        onChange={(value) =>
          setFilters((prev) => ({
            ...prev,
            rating: value,
          }))
        }
      />

      <RealityScoreFilter
        value={filters.reality}
        onChange={(value) =>
          setFilters((prev) => ({
            ...prev,
            reality: value,
          }))
        }
      />

      <AmenitiesFilter
        value={filters.amenities}
        onChange={(value) =>
          setFilters((prev) => ({
            ...prev,
            amenities: value,
          }))
        }
      />
      <HotelTypeFilter
        value={filters.hotelType}
        onChange={(value) =>
          setFilters((prev) => ({
            ...prev,
            hotelType: value,
          }))
        }
      />

      <Button
        variant="secondary"
        fullWidth
        onClick={resetFilters}
      >
        Reset Filters
      </Button>
    </aside>
  );
}

export default HotelFilters;