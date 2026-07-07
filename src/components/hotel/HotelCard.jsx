import Button from "@/components/ui/Button";
import Rating from "@/components/ui/Rating";
import RealityScore from "@/components/ui/RealityScore";
import PriceTag from "@/components/ui/PriceTag";
import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <Link to={`/hotel/${hotel.id}`}>
   
    <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between">
          <Rating value={hotel.rating} />
          <RealityScore score={hotel.realityScore} />
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            {hotel.name}
          </h3>

          <p className="text-gray-500">
            {hotel.city}
          </p>

          <p className="mt-2 text-sm text-green-600">
            {hotel.reviews} Verified Reviews
          </p>
        </div>

        <div className="flex items-center justify-between">
          <PriceTag price={hotel.price} />

          <Button size="sm">
            View Details
          </Button>
        </div>
      </div>
    </article>

    </Link>
    
  );
}

export default HotelCard;