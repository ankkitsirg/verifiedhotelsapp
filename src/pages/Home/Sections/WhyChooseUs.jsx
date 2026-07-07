import FeatureCard from "@/components/common/FeatureCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { features } from "@/data/features";

function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          badge="Why StayTrue?"
          title="Book Hotels With Confidence"
          subtitle="Every hotel on StayTrue is backed by verified reviews, authentic guest photos, and AI-powered analysis."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;