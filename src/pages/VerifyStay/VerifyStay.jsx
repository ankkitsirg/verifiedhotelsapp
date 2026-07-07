import { useParams } from "react-router-dom";

import ReviewForm from "./sections/ReviewForm";
import ImageUploader from "./sections/ImageUploader";
import VideoUploader from "./sections/VideoUploader";
import RealityQuestions from "./sections/RealityQuestions";

import Button from "@/components/ui/Button";

function VerifyStay() {
  const { bookingId } = useParams();

  function handleSubmit() {
    alert("Verification Submitted Successfully!");
  }

  return (
    <section className="bg-slate-50 py-12">

      <div className="mx-auto max-w-5xl px-4">

        <h1 className="mb-2 text-4xl font-bold">
          Verify Your Stay
        </h1>

        <p className="mb-8 text-slate-500">
          Booking ID : {bookingId}
        </p>

        <div className="space-y-8">

          <ReviewForm />

          <ImageUploader />

          <VideoUploader />

          <RealityQuestions />

          <Button
            fullWidth
            size="lg"
            onClick={handleSubmit}
          >
            Submit Verification
          </Button>

        </div>

      </div>

    </section>
  );
}

export default VerifyStay;