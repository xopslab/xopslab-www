import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {CalendarIcon, MapPin, Users} from "lucide-react";
import Image from "next/image";
import {useEffect, useState} from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselApi} from "@/components/ui/carousel";
import {useCallback} from "react";
import {cn} from "@/lib/utils";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
  tags: string[];
};

const events: Event[] = [
  {
    id: "1",
    title: "Azure ML Designer for Health Monitoring",
    date: "September 16, 2023",
    location: "Virtual",
    attendees: 59,
    image: "/images/banner2.jpg",
    tags: ["Azure", "ML", "Cloud"],
  },
  {
    id: "2",
    title: "গিট (Git) এবং গিটহাব (GitHub) পরিচিতি",
    date: "September 19, 2024",
    location: "Virtual",
    attendees: 99,
    image: "/images/banner.jpg",
    tags: ["GitHub", "Version Control"],
  },
  {
    id: "3",
    title: "Azure ML Designer for Health Monitoring",
    date: "September 16, 2023",
    location: "Virtual",
    attendees: 59,
    image: "/images/banner2.jpg",
    tags: ["Azure", "ML", "Cloud"],
  },
  {
    id: "4",
    title: "গিট (Git) এবং গিটহাব (GitHub) পরিচিতি",
    date: "September 19, 2024",
    location: "Virtual",
    attendees: 99,
    image: "/images/banner.jpg",
    tags: ["GitHub", "Version Control"],
  },
];

export default function EventCards() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(1); // Start with the middle card (index 1)

  // Set up auto-sliding
  const autoSlide = useCallback(() => {
    if (api) {
      setCurrent((prev) => {
        const next = (prev + 1) % events.length;
        return next;
      });
      api.scrollNext();
    }
  }, [api]);

  // Initialize auto-sliding with 2 second intervals
  useEffect(() => {
    const interval = setInterval(autoSlide, 3000);
    return () => clearInterval(interval);
  }, [autoSlide]);

  // Set initial position to middle card
  useEffect(() => {
    if (api) {
      // Set initial position to the middle card
      api.scrollTo(1);
    }
  }, [api]);
  return (
    <section className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-slate-600">Previous Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of our previous community events and workshops
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="max-w-5xl mx-auto"
          opts={{
            loop: true,
            align: "center",
            startIndex: 1,
          }}
          onClick={() => {
            if (api) setCurrent(api.selectedScrollSnap());
          }}>
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={event.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card
                    className={cn(
                      "overflow-hidden transition-all duration-300 h-full flex flex-col border",
                      current === index ? "opacity-100 scale-100" : "opacity-70 scale-95"
                    )}>
                    <div className="relative w-full" style={{paddingBottom: "56.25%"}}>
                      <Image src={event.image} alt={event.title} fill className="object-cover" unoptimized />
                    </div>
                    <CardHeader className="p-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                        <Badge variant="outline" className="text-xs shrink-0 ml-2">
                          {event.tags[0]}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3 pt-0 flex-grow">
                      <div className="flex flex-col space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1 shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1 shrink-0" />
                          <span>{event.attendees} attendees</span>
                        </div>
                        <div className="flex items-center">
                          <CalendarIcon className="h-3 w-3 mr-1 shrink-0" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-1 p-3 pt-0">
                      {event.tags.slice(1).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Removed navigation arrows */}
        </Carousel>
      </div>
    </section>
  );
}
