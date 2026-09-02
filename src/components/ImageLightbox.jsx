import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function ImageLightbox({
  images,
  activeIndex,
  setActiveIndex,
  onClose,
}) {
  // Close lightbox with Escape
  // Navigate with Left / Right arrow keys
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === images.length - 1 ? 0 : current + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === 0 ? images.length - 1 : current - 1
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, images.length, onClose, setActiveIndex]);

  // Don't show anything when no image is selected
  if (activeIndex === null) {
    return null;
  }

  const nextImage = (event) => {
    event.stopPropagation();

    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = (event) => {
    event.stopPropagation();

    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
      >
        <X size={24} />
      </button>

      {/* Previous button */}
      <button
        type="button"
        onClick={previousImage}
        aria-label="Previous image"
        className="absolute left-3 md:left-6 z-20 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Main image */}
      <img
        src={images[activeIndex]}
        alt={`Wedding gallery ${activeIndex + 1}`}
        className="max-w-full max-h-[88vh] object-contain rounded-lg"
        onClick={(event) => event.stopPropagation()}
      />

      {/* Next button */}
      <button
        type="button"
        onClick={nextImage}
        aria-label="Next image"
        className="absolute right-3 md:right-6 z-20 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
      >
        <ChevronRight size={26} />
      </button>

      {/* Image counter */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-4 py-2 rounded-full">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default ImageLightbox;
