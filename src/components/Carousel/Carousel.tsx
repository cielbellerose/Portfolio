import useEmblaCarousel from "embla-carousel-react";
import { TriangleLeftIcon, TriangleRightIcon } from "../../assets/Icons";

export interface CarouselSlide {
  imageUrl: string;
  caption: string;
}

export interface CarouselProps {
  slides: CarouselSlide[];
}

function Carousel({ slides }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });

  return (
    <div className="relative w-full">
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => emblaApi?.scrollPrev()}
        className="text-purple absolute top-1/2 -left-12 z-10 -translate-y-1/2 p-3 transition-opacity hover:opacity-80"
      >
        <TriangleLeftIcon className="h-10 w-10" />
      </button>

      <div className="min-w-0 overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {slides.map((slide) => (
            <div
              className="min-w-0 shrink-0 basis-1/3 pl-4"
              key={slide.imageUrl}
            >
              <img
                src={slide.imageUrl}
                alt={slide.caption}
                className="h-90 w-full rounded-[5px] object-cover"
              />
              <p className="text-text mt-3 text-center">{slide.caption}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => emblaApi?.scrollNext()}
        className="text-purple absolute top-1/2 -right-12 z-10 -translate-y-1/2 p-3 transition-opacity hover:opacity-70"
      >
        <TriangleRightIcon className="h-10 w-10" />
      </button>
    </div>
  );
}

export default Carousel;
