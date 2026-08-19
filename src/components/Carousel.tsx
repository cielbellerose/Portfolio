import useEmblaCarousel from "embla-carousel-react";
import { TriangleLeftIcon, TriangleRightIcon } from "../assets/Icons";

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
        className="bg-bg/70 text-purple absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full p-3 transition-opacity hover:opacity-80 lg:-left-12 lg:bg-transparent"
      >
        <TriangleLeftIcon className="h-10 w-10" />
      </button>

      <div className="min-w-0 overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {slides.map((slide) => (
            <div
              className="min-w-0 shrink-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
              key={slide.imageUrl}
            >
              <img
                src={slide.imageUrl}
                alt={slide.caption}
                className="rounded-image aspect-[4/3] w-full object-cover"
              />
              <p className="text-text mt-3 text-center text-sm">
                {slide.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => emblaApi?.scrollNext()}
        className="bg-bg/70 text-purple absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full p-3 transition-opacity hover:opacity-70 lg:-right-12 lg:bg-transparent"
      >
        <TriangleRightIcon className="h-10 w-10" />
      </button>
    </div>
  );
}

export default Carousel;
