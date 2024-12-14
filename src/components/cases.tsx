"use client";

import {useEffect, useState} from "react";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";

export const Case = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const imageLocations = [
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    "/images/xops-logo-black.png",
    // ...add more image paths as needed
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        if (current === 0) {}
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-10 items-center">
          <div className="relative w-full col-span-5">
            <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {imageLocations.map((src, index) => (
                  <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                    <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                      {/* <img src={src} alt={`Image ${index + 1}`} className="object-cover w-full h-full rounded-md" /> */}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
