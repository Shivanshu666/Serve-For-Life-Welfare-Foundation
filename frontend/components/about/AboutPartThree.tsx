"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaArrowRight,
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



export default function AboutPartThree() {


return (

<>


{/* ================= COMMITMENT ================= */}


<section
className="
relative
py-24
px-6
sm:px-8
lg:px-12
overflow-hidden
bg-gradient-to-b
from-[#F8FBF8]
via-white
to-[#FCFCFC]
"
>


{/* Background Glow */}


<div
className="
absolute
-top-20
-right-20
h-80
w-80
rounded-full
bg-emerald-200/40
blur-[150px]
"
/>



<div
className="
absolute
-bottom-20
-left-20
h-80
w-80
rounded-full
bg-lime-200/40
blur-[150px]
"
/>



<div
className="
relative
z-10
max-w-4xl
mx-auto
text-center
"
>


<motion.div

initial="hidden"
whileInView="visible"
viewport={{
once:true
}}

variants={fadeUp}

>



<FaHeart
className="
text-5xl
text-emerald-500
mx-auto
mb-6
"
/>




<h2
className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
text-slate-900
"
>


Our Commitment to{" "}


<span
className="
bg-gradient-to-r
from-emerald-500
to-lime-500
bg-clip-text
text-transparent
"
>

Change

</span>


</h2>





<p
className="
mt-6
text-lg
text-slate-600
leading-relaxed
"
>


At Serve For Life Welfare Foundation, we are committed
to mobilizing resources and building sustainable,
structured sports programs that make quality sports
education accessible to children from economically
disadvantaged backgrounds.


</p>






<div
className="
mt-10
inline-block
p-8
rounded-3xl
bg-white
border
border-emerald-100
shadow-xl
shadow-emerald-100/40
"
>


<p
className="
text-xl
sm:text-2xl
font-semibold
text-slate-900
leading-relaxed
"
>


We are not simply building athletes —

<br/>


<span
className="
text-emerald-500
"
>

we are building healthier children,

</span>


<br/>


<span
className="
text-lime-600
"
>

stronger communities,

</span>


<br/>


<span
className="
text-emerald-500
"
>

and brighter futures

</span>


<br/>


through the power of sport.



</p>



</div>



</motion.div>


</div>



</section>









{/* ================= CTA ================= */}



<section
className="
relative
py-24
px-6
sm:px-8
lg:px-12
bg-gradient-to-r
from-emerald-50
via-lime-50
to-emerald-50
"
>


<div
className="
max-w-4xl
mx-auto
text-center
"
>



<motion.div

initial="hidden"
whileInView="visible"
viewport={{
once:true
}}

variants={fadeUp}

>



<h2
className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
text-slate-900
"
>


Ready to{" "}


<span
className="
bg-gradient-to-r
from-emerald-500
to-lime-500
bg-clip-text
text-transparent
"
>

Make a Difference?

</span>


</h2>




<p
className="
mt-5
text-lg
text-slate-600
max-w-2xl
mx-auto
leading-relaxed
"
>


Join us in creating opportunities for every child
to experience the transformative power of play
and sport.


</p>





<div
className="
mt-10
flex
flex-wrap
justify-center
gap-4
"
>


<Link

href="/volunteer"

className="
px-8
py-3.5
rounded-full
bg-gradient-to-r
from-emerald-500
to-lime-500
text-white
font-semibold
shadow-lg
hover:scale-105
transition
flex
items-center
gap-2
"

>


Volunteer Now


<FaArrowRight/>


</Link>





<Link

href="/donate"

className="
px-8
py-3.5
rounded-full
border
border-emerald-300
text-emerald-700
font-semibold
hover:bg-emerald-100
transition
"

>


Make a Donation


</Link>




</div>



</motion.div>



</div>


</section>



</>

)

}