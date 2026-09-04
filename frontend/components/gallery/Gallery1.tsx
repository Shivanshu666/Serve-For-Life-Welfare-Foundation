
// components/GallerySection.tsx
"use client";

import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1530549387789-4c1017266635",
    title: "Junior Championship 2025",
    category: "tournaments",
    aspect: "square",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1560012057-8d7d7d7d7d7d",
    title: "Coaching Clinic with Pro",
    category: "coaching",
    aspect: "portrait",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8",
    title: "Foundation Gala 2026",
    category: "events",
    aspect: "landscape",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1543269865-7a6a4c6e5e4e",
    title: "Community Outreach",
    category: "community",
    aspect: "square",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1529626455594-4a0802da2c3e",
    title: "Pro Exhibition Match",
    category: "tournaments",
    aspect: "portrait",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
    title: "Youth Summer Camp",
    category: "coaching",
    aspect: "landscape",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1518035157260-3e1d7b1b6f1f",
    title: "Awards Ceremony 2025",
    category: "events",
    aspect: "square",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    title: "Ball Kids Training",
    category: "community",
    aspect: "landscape",
  },
];

export default function GallerySection() {
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-23">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
            Gallery
          </span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Relive the moments – from thrilling matches to community outreach.
          Explore our journey through the lens.
        </p>
      </div>

      {/* Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="break-inside-avoid relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            <div
              className={`relative w-full ${getHeightClass(
                image.aspect
              )}`}
            >
              <Image
                src={`${image.src}?auto=format&fit=crop&w=900&q=75`}
                alt={image.title}
                fill
                priority={index < 2}
                loading={index < 2 ? undefined : "lazy"}
                quality={75}
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  (max-width: 1280px) 33vw,
                  25vw
                "
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                <div className="w-full text-white">
                  <p className="text-sm font-medium truncate">
                    {image.title}
                  </p>

                  <span className="text-xs opacity-80 capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

