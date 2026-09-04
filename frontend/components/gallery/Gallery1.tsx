
"use client";

import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/Gallery1.avif",
    title: "Junior Championship 2025",
    category: "tournaments",
    aspect: "square",
  },
  {
    id: 2,
    src: "/gallery/G2.avif",
    title: "Coaching Clinic with Pro",
    category: "coaching",
    aspect: "portrait",
  },
  {
    id: 3,
    src: "/gallery/G3.avif",
    title: "Foundation Gala 2026",
    category: "events",
    aspect: "landscape",
  },
  {
    id: 4,
    src: "/gallery/G4.avif",
    title: "Community Outreach",
    category: "community",
    aspect: "square",
  },
  {
    id: 5,
    src: "/gallery/G5.avif",
    title: "Pro Exhibition Match",
    category: "tournaments",
    aspect: "portrait",
  },
  {
    id: 6,
    src: "/gallery/G6.avif",
    title: "Youth Summer Camp",
    category: "coaching",
    aspect: "landscape",
  },
  {
    id: 7,
    src: "/gallery/G7.avif",
    title: "Awards Ceremony 2025",
    category: "events",
    aspect: "square",
  },
  {
    id: 8,
    src: "/gallery/G8.avif",
    title: "Ball Kids Training",
    category: "community",
    aspect: "landscape",
  },
  {
    id: 9,
    src: "/gallery/G9.avif",
    title: "Ball Kids Training",
    category: "community",
    aspect: "landscape",
  },
  {
    id: 10,
    src: "/gallery/G10.avif",
    title: "Ball Kids Training",
    category: "community",
    aspect: "landscape",
  },
  {
    id: 11,
    src: "/gallery/G11.avif",
    title: "Youth Tennis Program",
    category: "coaching",
    aspect: "portrait",
  },
  {
    id: 12,
    src: "/gallery/G12.avif",
    title: "Community Tennis Event",
    category: "community",
    aspect: "landscape",
  },
  {
    id: 13,
    src: "/gallery/G13.avif",
    title: "Junior Tennis Match",
    category: "tournaments",
    aspect: "square",
  },
 
  {
    id: 15,
    src: "/gallery/G15.avif",
    title: "Foundation Event",
    category: "events",
    aspect: "landscape",
  },
  {
    id: 16,
    src: "/gallery/G16.avif",
    title: "Sports Community Program",
    category: "community",
    aspect: "square",
  },
  {
    id: 17,
    src: "/gallery/G17.avif",
    title: "Tennis Championship",
    category: "tournaments",
    aspect: "portrait",
  },
  {
    id: 18,
    src: "/gallery/G18.avif",
    title: "Young Athletes Training",
    category: "coaching",
    aspect: "landscape",
  },
  {
    id: 19,
    src: "/gallery/G19.avif",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  },
  {
    id: 20,
    src: "/gallery/G20.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  },
   {
    id: 21,
    src: "/gallery/G21.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  }, {
    id: 22,
    src: "/gallery/G22.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  }, {
    id: 23,
    src: "/gallery/G23.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  }, {
    id: 24,
    src: "/gallery/G24.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  },
  {
    id: 25,
    src: "/gallery/G25.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  },
  {
    id: 26,
    src: "/gallery/G26.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  },
   {
    id: 27,
    src: "/gallery/G27.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  },
   {
    id: 28,
    src: "/gallery/G28.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  }, {
    id: 29,
    src: "/gallery/G29.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  }, {
    id: 30,
    src: "/gallery/G30.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  }, {
    id: 31,
    src: "/gallery/G31.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  }, {
    id: 32,
    src: "/gallery/G32.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  }, {
    id: 33,
    src: "/gallery/G33.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  }, {
    id: 34,
    src: "/gallery/G34.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  }, {
    id: 35,
    src: "/gallery/G35.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  },
  {
    id: 36,
    src: "/gallery/G36.jpeg",
    title: "Together Through Sport",
    category: "community",
    aspect: "square",
  },
];

export default function Gallery1() {
  const getHeightClass = (aspect: string) => {
    switch (aspect) {
      case "square":
        return "h-64 sm:h-72 md:h-80";

      case "portrait":
        return "h-80 sm:h-96 md:h-[28rem]";

      case "landscape":
        return "h-56 sm:h-64 md:h-72";

      default:
        return "h-64";
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
          Our{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
            Gallery
          </span>
        </h1>

        <p className="mx-auto italic font-bold text-base max-w-2xl text-gray-600">
          Your Lens, Our Journey
        </p>
      </div>

      {/* Gallery */}
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            <div
              className={`relative w-full ${getHeightClass(image.aspect)}`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                priority={index < 2}
                quality={75}
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  (max-width: 1280px) 33vw,
                  25vw
                "
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

           
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}