
"use client"
const Purpose = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-5 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-lime-100/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-emerald-100/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-16 w-16 rounded-full bg-lime-200/30 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[30%] left-[5%] h-20 w-20 rounded-full bg-emerald-200/30 blur-2xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full border border-lime-200 bg-lime-100 px-4 py-2 text-lg font-semibold uppercase tracking-widest text-lime-700">
            Our Purpose
          </span>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-xl">
            To transform lives through sport by making quality sports
            education accessible to every child <br /> — nurturing character,
            promoting inclusion, and creating opportunities that extend far
            beyond the playgrounds.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">


  {/* Vision */}
          <div className="group relative rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white via-emerald-50/30 to-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-200/20 blur-3xl" />

            <div className="relative flex items-start gap-4">
              {/* Icon */}
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 text-2xl text-white shadow-lg shadow-emerald-200/50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                </svg>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="h-1 w-10 rounded-full bg-emerald-400" />
                  <span className="text-md font-semibold uppercase tracking-[0.2em] text-emerald-600">
                   Our Vision
                  </span>
                </div>

                <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  An Inclusive Society Built Through Sport
                </h3>
              </div>
            </div>

            <p className="relative mt-5 text-lg leading-relaxed text-slate-600 sm:text-lg">
              A future where every child, regardless of background, has access
              to quality sport and the opportunity to realise their potential -
              creating{" "}
              <span className="font-bold italic">
                healthier individuals, stronger communities and a more equitable
                society
              </span>.
            </p>
          </div>


          {/* Mission */}
          <div className="group relative rounded-3xl border border-lime-200/60 bg-gradient-to-br from-white via-lime-50/30 to-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-lime-300 hover:shadow-xl sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lime-200/20 blur-3xl" />

            <div className="relative flex items-start gap-4">
              {/* Icon */}
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-400 text-2xl text-white shadow-lg shadow-lime-200/50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z" />
                </svg>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="h-1 w-10 rounded-full bg-lime-400" />
                  <span className="text-md font-semibold uppercase tracking-[0.2em] text-lime-600">
                   Our Mission
                  </span>
                </div>

                <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Sustainable, Inclusive, Structured Sport - for ALL
                </h3>
              </div>
            </div>

            <p className="relative mt-5 text-lg leading-relaxed text-slate-600 sm:text-lg">
              Create inclusive, structured and sustainable opportunities for
              children to play, learn, grow and thrive through sport. Through
              our{" "}
              <span className="font-bold text-black">SET</span>{" "}
              framework—
              <span className="font-bold text-black">
                Serve, Empower, Transform,
              </span>{" "}
              we use sport to{" "}
              <span className="font-bold italic">
                build confidence, character, skills and pathways to a better
                future
              </span>.
            </p>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Purpose;
