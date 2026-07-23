"use client";

import { motion } from "framer-motion";
import {
  FaBullseye,
  FaGlobeAsia,
  FaTree,
  FaHeart,
  FaGraduationCap,
  FaShieldAlt,
  FaStar,
  FaTrophy,
} from "react-icons/fa";


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};


const stagger = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};



const approaches = [

{
icon:<FaHeart/>,
title:"Physical & Mental Well-being",
desc:"Improving children's health through structured physical activity and mental wellness programs."
},


{
icon:<FaGraduationCap/>,
title:"Education & Attendance",
desc:"Encouraging regular school attendance and reducing dropout rates through sport."
},


{
icon:<FaShieldAlt/>,
title:"Values & Character",
desc:"Instilling discipline, respect, teamwork, perseverance, and integrity."
},


{
icon:<FaStar/>,
title:"Confidence & Leadership",
desc:"Building confidence, leadership, and essential life skills through sport."
},


{
icon:<FaTrophy/>,
title:"Talent Identification",
desc:"Identifying and nurturing sporting talent irrespective of socio-economic background."
},


{
icon:<FaGlobeAsia/>,
title:"Pathways to Success",
desc:"Creating pathways for education, employment, and sporting excellence."
},


];




export default function AboutPartTwo(){

return(

<>


{/* ================= MISSION VISION ================= */}


<section className="
py-20
px-6
sm:px-8
lg:px-12
bg-gradient-to-b
from-[#F8FBF8]
to-white
">


<div className="
max-w-7xl
mx-auto
">


<motion.div

initial="hidden"
whileInView="visible"
viewport={{once:true}}
variants={stagger}

className="
grid
md:grid-cols-2
gap-8
"

>



{/* Mission */}


<motion.div

variants={fadeUp}

className="
p-8
rounded-3xl
bg-white
border
border-emerald-100
shadow-lg
shadow-emerald-100/40
hover:-translate-y-2
transition
"

>


<div className="
flex
items-center
gap-4
mb-5
">


<div className="
p-3
rounded-full
bg-emerald-100
text-emerald-600
">

<FaBullseye className="text-2xl"/>

</div>


<h3 className="
text-2xl
font-bold
text-emerald-600
">

Our Mission

</h3>


</div>



<p className="
text-slate-600
leading-relaxed
">

To transform lives through the power of sport by
creating sustainable, inclusive, and structured
sports development programs that empower children
with opportunities to learn, grow, and succeed.

</p>



<div className="
mt-6
flex
flex-wrap
gap-3
">


<span className="
px-4
py-1.5
rounded-full
bg-emerald-100
text-emerald-700
text-xs
font-semibold
">

Serve

</span>


<span className="
px-4
py-1.5
rounded-full
bg-emerald-100
text-emerald-700
text-xs
font-semibold
">

Empower

</span>


<span className="
px-4
py-1.5
rounded-full
bg-emerald-100
text-emerald-700
text-xs
font-semibold
">

Transform

</span>


</div>



</motion.div>





{/* Vision */}



<motion.div

variants={fadeUp}

className="
p-8
rounded-3xl
bg-white
border
border-lime-100
shadow-lg
shadow-lime-100/40
hover:-translate-y-2
transition
"


>


<div className="
flex
items-center
gap-4
mb-5
">


<div className="
p-3
rounded-full
bg-lime-100
text-lime-600
">


<FaGlobeAsia className="text-2xl"/>


</div>


<h3 className="
text-2xl
font-bold
text-lime-600
">

Our Vision

</h3>


</div>




<p className="
text-slate-600
leading-relaxed
">

To create an inclusive society where every child,
irrespective of socio-economic background,
has access to quality sports education and
the opportunity to realize their full potential
through sport.

</p>



<div className="
mt-6
flex
items-center
gap-3
text-sm
text-slate-500
">


<FaTree className="text-lime-500"/>

Sport as an essential pillar of education


</div>



</motion.div>



</motion.div>



</div>


</section>







{/* ================= APPROACH ================= */}



<section className="
py-20
px-6
sm:px-8
lg:px-12
bg-white
">


<div className="
max-w-7xl
mx-auto
">


<motion.div

initial="hidden"
whileInView="visible"
viewport={{once:true}}
variants={fadeUp}

className="
text-center
max-w-3xl
mx-auto
"

>


<span className="
text-emerald-600
font-semibold
tracking-widest
uppercase
text-sm
">

How We Work

</span>



<h2 className="
mt-3
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
text-slate-900
">


Our 

<span className="
text-emerald-500
">

Approach

</span>


</h2>



<p className="
mt-5
text-lg
text-slate-600
">

We use sport as a powerful medium to create
lasting change in children's lives.

</p>


</motion.div>






<motion.div

initial="hidden"
whileInView="visible"
viewport={{once:true}}

variants={stagger}

className="
mt-12
grid
sm:grid-cols-2
lg:grid-cols-3
gap-7
"


>


{

approaches.map((item,index)=>(


<motion.div

key={index}

variants={fadeUp}

className="
group
p-7
rounded-3xl
bg-white
border
border-emerald-100
shadow-lg
shadow-emerald-100/30
hover:-translate-y-2
transition
"


>


<div className="
text-4xl
text-emerald-500
group-hover:scale-110
transition
">


{item.icon}


</div>



<h3 className="
mt-5
text-xl
font-bold
text-slate-900
">


{item.title}


</h3>



<p className="
mt-3
text-slate-600
text-sm
leading-relaxed
">


{item.desc}


</p>



</motion.div>



))


}



</motion.div>



</div>


</section>



</>

)

}