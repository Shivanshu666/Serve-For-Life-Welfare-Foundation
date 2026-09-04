// components/Values.jsx
"use client";

const values = [
  {
    title: "Respect",
    desc: "We foster a culture of respect - for oneself and for others. We believe respect is the foundation of good sportsmanship, positive relationships, and responsible citizenship.",
    head:"Courtesy, Kindness, Consideration",
    image:
      "/images/value3.jpeg",
  },
  {
    title: "Inclusion",
    desc: "Every child deserves an equal opportunity to participate in sport regardless of gender, ability or economic background.",
    head:(<>  
    Everyones belongs, <br /> Everyone matters
    </>),

    image:
      "/images/value4.jpeg",
  },
 {
  title: "Integrity",
  desc: "We uphold the highest standards of honesty, transparency, accountability and ethical conduct in everything we do.",
  head: (
    <>
      Bound by Values,
      <br />
      Guided by honesty
    </>
  ),
  image: "/images/value2.jpeg",
},
  {
    title: "Excellence",
    desc: "We are committed to delivering high-quality coaching, meaningful programs and measurable outcomes that create lasting value.",
    head:"Continuous improvement, Limitless potential",

    image: "/images/value1.jpeg",
  },
  {
    title: "Collaboration",
    desc: "We believe sustainable impact is achieved through strong partnerships with schools, families, communities, corporate CSR partners and government institutions.",
    head:"We support each other to grow together",
   
    image:
      "/images/value5.jpeg",
  },
];

export default function Values() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FBF8] via-white to-[#FCFCFC] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-lime-100 blur-[180px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-emerald-100 blur-[180px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-lime-200 bg-lime-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-lime-700">
            What We Stand For
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Everything we do is guided by these Core Values that inspire our
            mission and <br /> shape the future of every child we support.
          </p>
        </div>

        {/* Value Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-lime-100
                bg-white
                shadow-md
                shadow-lime-100/30
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-lime-300
                hover:shadow-xl
                hover:shadow-lime-200/40
              "
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-200 sm:h-48 lg:h-40">
                <img
                  src={value.image}
                  alt={`${value.title} - Serve For Life Welfare Foundation`}
                  className="
                    h-full
                    w-full
                    object-contain
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent" />

                {/* Number */}
                <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 text-xs font-bold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="absolute bottom-4 left-4 right-3 text-xl font-bold text-white">
                  {value.title}
                </h3>
              </div>

              {/* Content */}
{/* Content */}
<div className="relative flex flex-col p-5">
  {/* Small Accent */}
  <div className="mx-auto mb-4 h-1 w-8 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 transition-all duration-500 group-hover:w-14" />

  {/* Heading */}
  <p className="mb-3 min-h-[42px] text-center text-sm font-bold leading-5 text-teal-600">
    {value.head}
  </p>

  {/* Description */}
  <div className="h-[144px] overflow-hidden">
    <p className="text-xs leading-6 text-slate-600">
      {value.desc}
    </p>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}