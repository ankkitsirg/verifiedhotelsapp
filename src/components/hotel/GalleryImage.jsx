function GalleryImage({
    src,
    alt,
    className = "",
}) {
    return (
        <img
            src={src}
            alt={alt}
            className={`h-full w-full rounded-2xl object-cover ${className}`}
        />
    );
}

export default GalleryImage;