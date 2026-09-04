// components/Team.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

// Replace these imports with your actual team images (or use public URLs)
import ravinderImg from "@/assets/team/ravinder.jpeg";
import rachnaImg from "@/assets/team/rachna.png";
import kiranImg from "@/assets/team/kiran.jpeg";
// import kavitaImg from "@/assets/team/kavita.jpg";

// If you don't have images yet, use placeholder URLs:
// const ravinderImg = "https://ui-avatars.com/api/?name=Ravinder+Singh+Madan&size=300&background=4CAF50&color=fff";
// etc.

// No explicit type annotation – TypeScript infers these perfectly
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const teamMembers = [
  {
    name: "Ravinder Singh Madan",
    role: "Independent Founder-Member",
    bio: "Ravinder is a passionate tennis enthusiast and a former college-level tennis player who continues to compete in the ITF Seniors 65+ category. His enduring connection with the sport is matched by a strong commitment to community initiatives and the development of grassroot sports. With over 15 years of experience in real estate, Ravinder brings extensive business and entrepreneurial experience to the Foundation. Prior to entering real estate, he spent 20 years managing and running industrial ventures. His experience across sport, business and community engagement reflects his commitment to using sport as a means to create opportunities, empower individuals and strengthen communities.",
    image: ravinderImg,
  },
  {
    name: "Rachna Sharma",
    role: "Founder-Member",
    bio: "Rachna is a former tennis player who achieved success both in state and national tournaments. In 2022, she won the ITF Singles Women (35) title at ITF World Tennis Masters Tour MT 200 Bhilai in Singles event. From 2004-07, she also won State Championship tournaments in Singles event and had achieved highest National Ranking of # 28 in Women’s Category. She is an experienced sports development and management professional, coach and leader who comes with extensive national and international working experience of over 15 years in the field of sports administration, business development, grassroots coaching systems, event management and operations management who believes passionately in active and experiential learning. She has a track record of working in leading sports corporates and with high performing teams to facilitate great learning opportunities.",
    image: rachnaImg,
  },
  {
    name: "Kiran Sarjapuram",
    role: "Board-Member",
    bio: "Kiran is a fitness enthusiast and has an extensive working experience of 25 years in the Corporate Sector. In 2011, after migrating from US and settling down in Bangalore, she worked with one of the leading Bangalore based Sports Management Private Limited Company for 8 years as HR Head. She also had a experience of 6 years working with a Company. She loves to work with under resourced communities.",
    image: kiranImg,
  },
  {
    name: "Kavita Sharma",
    role: "Board-Member",
    bio: "Kavita brings a wealth of experience and dedication to the Foundation. Her passion for community service and sport makes her an invaluable member of the team, working tirelessly to support the foundation's mission.",
    // image: kavitaImg,
  },
];

export default function CoreTeam() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-emerald-50/30 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-emerald-200/20 blur-[180px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-lime-200/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
       
          <h2 className="mt-4 text-4xl font-bold text-slate-800 sm:text-5xl">
            Meet the <span className="bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
              Core Team
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            SFLWF brings together passionate sports professionals and business leaders who believe in the power of sport to transform lives.
          </p>
          <p className="mt-3 text-base text-slate-500">
            United by a shared purpose, we turn this belief into meaningful action—creating opportunities, inspiring change, and building lasting impact through sport.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200/30"
            >
              {/* Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-800">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-emerald-600">
                  {member.role}
                </p>
                <div className="mt-3 h-px w-12 bg-emerald-200 transition-all duration-300 group-hover:w-20" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-4">
                  {member.bio}
                </p>
                {/* Optional social icons – add if you have links */}
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#"
                    className="text-slate-400 transition-colors hover:text-emerald-600"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 transition-colors hover:text-emerald-600"
                    aria-label="Email"
                  >
                    <FaEnvelope size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center text-sm text-slate-500"
        >
          <p>Together, we are building a brighter future through sport.</p>
        </motion.div>
      </div>
    </section>
  );
}