"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Replace these imports with your actual team images
import ravinderImg from "@/assets/team/ravinder.jpeg";
import rachnaImg from "@/assets/team/rachna.png";
import kiranImg from "@/assets/team/kiran.jpeg";
import kavitaImg from "@/assets/team/kavitasha.jpeg";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const teamMembers = [
  {
    name: "Ravinder Singh Madan",
    role: "Independent Founder - Member",
    bio: `Ravinder is a passionate tennis enthusiast and a former college-level tennis player who continues to compete in the ITF Seniors 65+ category.His enduring connection with the sport is matched by a strong commitment to community initiatives and the development of grassroot sports. \n
With over 15 years of experience in real estate, Ravinder brings extensive business and entrepreneurial experience to the Foundation.
Prior to entering real estate, he spent 20 years managing and running industrial ventures.\n
His experience across sport, business and community engagement reflects his commitment to using sport as a means to create opportunities, empower individuals and strengthen communities.`,
    image: ravinderImg,
  },

  {
    name: "Rachna Sharma",
    role: "Founder - Member",
    bio: `Rachna is a former tennis player who achieved success both in state and national tournaments.In 2022, she won the ITF Singles Women (35) title at ITF World Tennis Masters Tour MT 200, Bhilai in Singles event.From 2004-07, she also won State Championship tournaments in Singles event and had achieved highest National Ranking of # 28 in Women’s Category.

She is an experienced sports development and management professional, coach and leader who comes with extensive national and international working experience of over 15 years in the field of sports administration, business development, grassroots coaching systems, event management and operations management who believes passionately in active and experiential learning.

She has a track record of working in leading sports corporates and with high performing teams to facilitate great learning opportunities.`,
    image: rachnaImg,
  },

  {
    name: "Kiran Sarjapuram",
    role: "Board - Member",
    bio: `Kiran is a fitness enthusiast who believes in a healthy lifestyle, discipline, and the value of a good routine. With over 15 years of experience in sports operations and development, she brings expertise in administration, team leadership, partnerships, and program execution.

Over the years, she has played an important role in building teams, systems, and grassroots programs that have reached thousands of young people. 

She brings a hands-on, yet strategic approach to developing sustainable programs, strengthening partnerships, and creating meaningful social impact through sport.`,
    image: kiranImg,
  },

  {
    name: "Kavita Sharma",
    role: "Board-Member",
    bio: `Kavita brings a wealth of experience and dedication to the Foundation.

Her passion for community service and sport makes her an invaluable member of the team, working tirelessly to support the foundation's mission.`,
    image: kavitaImg,
  },
];

// Helper to get first ~150 characters for summary
function getSummary(bio) {
  if (bio.length <= 150) return bio;
  return bio.slice(0, 150) + "...";
}

export default function CoreTeam() {
  // Track expanded state for each member
  const [expanded, setExpanded] = useState(
    teamMembers.map(() => false)
  );

  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.map((state, i) =>
        i === index ? !state : state
      )
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-emerald-50/30 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-emerald-200/20 blur-[180px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-lime-200/20 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold text-slate-800 sm:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
              Team,
            </span>
            Our{" "}
             <span className="bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
              Strength
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            SFLWF brings together passionate sports professionals and business leaders who believe in the power of sport to transform lives.
          </p>

          <p className="mt-3 text-base text-slate-500">
            United by a shared purpose, we turn this belief into meaningful action—creating opportunities, inspiring change, and building lasting impact through sport.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="mt-16 space-y-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm transition-all hover:shadow-xl hover:shadow-emerald-200/30"
            >
              <div className="flex flex-col md:flex-row">

                {/* Image */}
                <div className="relative h-64 w-full bg-slate-200 md:h-auto md:min-h-[300px] md:w-1/3">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-emerald-100 text-emerald-700">
                      <span className="text-4xl font-bold">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 md:p-8">

                  <h3 className="text-2xl font-bold text-slate-800">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-emerald-600">
                    {member.role}
                  </p>

                  <div className="mt-3 h-px w-12 bg-emerald-500 transition-all group-hover:w-16" />

                  {/* Bio */}
                  <div className="mt-4 flex-1">
                    <p className="whitespace-pre-line leading-relaxed text-slate-600">
                      {expanded[index]
                        ? member.bio
                        : getSummary(member.bio)}
                    </p>
                  </div>

                  {/* Read More / Show Less */}
                  {member.bio.length > 150 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-800"
                    >
                      {expanded[index] ? (
                        <>
                          Show Less
                          <FaChevronUp size={14} />
                        </>
                      ) : (
                        <>
                          Read More
                          <FaChevronDown size={14} />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}