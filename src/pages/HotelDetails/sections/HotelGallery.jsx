import GalleryImage from "@/components/hotel/GalleryImage";
import Button from "@/components/ui/Button";

function HotelGallery({ hotel }) {

    const images = hotel.gallery;

    return (
        <section className="bg-slate-100 py-10">

            <div className="mx-auto grid max-w-7xl grid-cols-4 gap-4 px-4">

                {/* Main Image */}

                <div className="col-span-2 row-span-2">

                    <GalleryImage
                        src={images[0]}
                        alt={hotel.name}
                    />

                </div>

                {/* Small Images */}

                <GalleryImage
                    src={images[1]}
                    alt={hotel.name}
                />

                <GalleryImage
                    src={images[2]}
                    alt={hotel.name}
                />

                <GalleryImage
                    src={images[3]}
                    alt={hotel.name}
                />

                <div className="relative">

                    <GalleryImage
                        src={images[4]}
                        alt={hotel.name}
                    />

                    <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/40">

                        <Button variant="secondary">
                            View All Photos
                        </Button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default HotelGallery;