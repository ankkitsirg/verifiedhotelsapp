import SectionHeading from "@/components/ui/SectionHeading";
import RealityStepCard from "@/components/ai/RealityStepCard";
import RealityFeature from "@/components/ai/RealityFeature";

import {
  realitySteps,
  realityFeatures,
} from "@/data/realityScoreSteps";

function RealityScoreSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          badge="AI Powered"
          title="How AI Reality Score Works"
          subtitle="Our AI evaluates verified reviews and guest photos to help you book with confidence."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {realitySteps.map((step) => (
            <RealityStepCard
              key={step.id}
              step={step}
            />
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {realityFeatures.map((feature) => (
            <RealityFeature
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RealityScoreSection;