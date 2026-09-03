
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const values = [
 
  {
    title: "Respect",
    desc: "We foster a culture of respect - for oneself and for others. We believe respect is the foundation of good sportsmanship, positive relationships, and responsible citizenship.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Inclusion",
    desc: "Every child deserves an equal opportunity to participate in sport regardless of gender, ability or economic background.",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Integrity",
    desc: "We uphold the highest standards of honesty, transparency, accountability and ethical conduct in everything we do.",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Excellence",
    desc: "We are committed to delivering high-quality coaching, meaningful programs and measurable outcomes that create lasting value.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Collaboration",
    desc: "We believe sustainable impact is achieved through strong partnerships with schools, families, communities, corporate CSR partners and government institutions.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Values() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FBF8] via-white to-[#FCFCFC] px-6 py-24 sm:px-8 lg:px-12">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-lime-100 blur-[180px]" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-emerald-100 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-lime-200 bg-lime-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-lime-700">
            What We Stand For
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Our Core{" "}
            <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
              Values
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Everything we do is guided by these core values that inspire our
            mission and shape the future of every child we support.
          </p>
        </motion.div>

     {/* Value Cards */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  variants={stagger}
  className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-6"
>
  {values.map((value, index) => (
    <motion.article
      key={index}
      variants={fadeUp}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-lime-100
        bg-white
        shadow-lg
        shadow-lime-100/40
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-lime-300
        hover:shadow-2xl
        hover:shadow-lime-200/40

        lg:col-span-2

        ${index === 3 ? "lg:col-start-2" : ""}
        ${index === 4 ? "lg:col-start-4" : ""}
      `}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={value.image}
          alt={`${value.title} - Serve For Life Welfare Foundation`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

        {/* Number */}
        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 text-sm font-bold text-white backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Title */}
        <h3 className="absolute bottom-5 left-6 text-2xl font-bold text-white">
          {value.title}
        </h3>
      </div>

      {/* Content */}
      <div className="relative p-7">
        {/* Small Accent */}
        <div className="mb-5 h-1 w-10 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 transition-all duration-500 group-hover:w-20" />

        <p className="leading-7 text-slate-600">
          {value.desc}
        </p>
      </div>
    </motion.article>
  ))}
</motion.div>
      </div>
    </section>
  );
}
