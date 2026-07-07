import ReviewCard from "@/components/review/ReviewCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { reviews } from "@/data/reviews";

function LatestReviews() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          badge="Verified Reviews"
          title="What Our Guests Say"
          subtitle="Read genuine experiences shared by verified travelers."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestReviews;