"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import NaviLogo from "@/assets/sflwflogo.jpeg";


const links = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "About Us", href: "/about" },
  { name: "Get Involved", href: "/getInvolved" },
  { name: "Our Work", href: "/ourWork" },
  { name: "Contact", href: "/contact" },
];


const menuVariants = {
  closed: { opacity: 0, x: -30 },

  open: (i:number) => ({
    opacity:1,
    x:0,
    transition:{
      delay:i*0.08,
      duration:0.5,
      ease:[0.6,0.05,-0.01,0.9] as const
    }
  })
};



export default function Navbar(){

const [isOpen,setIsOpen]=useState(false);
const [scrolled,setScrolled]=useState(false);

const pathname=usePathname();



useEffect(()=>{

const handleScroll=()=>{

setScrolled(window.scrollY>30);

};


window.addEventListener("scroll",handleScroll);

return ()=>window.removeEventListener("scroll",handleScroll);


},[]);



useEffect(()=>{

document.body.style.overflow=isOpen?"hidden":"auto";


return()=>{

document.body.style.overflow="auto";

};


},[isOpen]);



return(

<>


<nav

className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
scrolled

?
"bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200 py-2"

:

"bg-white/60 backdrop-blur-md py-5"

}`}

>


<div className="absolute left-6 top-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-emerald-300/30 blur-2xl"/>




<div className={`max-w-7xl mx-auto flex items-center justify-between ${
scrolled?"px-5":"px-6 sm:px-8 lg:px-12"
}`}>


{/* LOGO */}

<Link
href="/"
className="flex items-center gap-3 group relative z-10"
>


<div className="relative">


<Image

src={NaviLogo}

alt="Serve For Life Foundation"

width={48}

height={48}

priority

className="h-12 w-auto rounded-xl shadow-md transition duration-500 group-hover:scale-110"

/>


<div className="absolute inset-0 rounded-xl bg-emerald-300/30 blur-xl -z-10"/>


</div>



<span className="hidden sm:block text-xl font-bold text-slate-900">

Serve For Life

</span>


</Link>






{/* DESKTOP MENU */}

<ul className="hidden md:flex items-center gap-2">


{
links.map((link)=>(


<li key={link.name}>


<Link

href={link.href}

className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300

${pathname===link.href

?

"text-emerald-600 bg-emerald-50"

:

"text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"

}

`}

>


{link.name}



{pathname===link.href && (

<motion.div

layoutId="nav"

className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full"

/>

)}



</Link>



</li>


))
}



</ul>






{/* CTA + MOBILE */}

<div className="flex items-center gap-4">



<Link

href="/donate"

className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold text-sm shadow-lg hover:scale-105 transition"

>

Donate Now

</Link>




<button

onClick={()=>setIsOpen(!isOpen)}

className="md:hidden text-slate-800 hover:text-emerald-600 transition"

>

{
isOpen?

<X size={30}/>

:

<Menu size={30}/>

}

</button>


</div>



</div>


</nav>






{/* MOBILE MENU */}

<AnimatePresence>


{

isOpen && (

<>


<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

className="fixed inset-0 bg-slate-900/20 backdrop-blur-xl z-40"

onClick={()=>setIsOpen(false)}

/>





<motion.div

initial={{opacity:0,scale:0.95}}

animate={{opacity:1,scale:1}}

exit={{opacity:0,scale:0.95}}

className="fixed inset-0 z-50 flex items-center justify-center p-8"

>


<div className="w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200 p-6">


<ul className="space-y-3">


{
links.map((link,index)=>{


const active=pathname===link.href;


return(

<motion.li

key={link.name}

custom={index}

initial="closed"

animate="open"

variants={menuVariants}

>


<Link

href={link.href}

onClick={()=>setIsOpen(false)}

className={`block text-center py-4 rounded-2xl text-3xl font-bold transition

${active

?

"text-emerald-600 bg-emerald-50"

:

"text-slate-800 hover:text-emerald-600 hover:bg-emerald-50"

}

`}

>

{link.name}

</Link>


</motion.li>


)


})

}



<motion.li

custom={links.length}

initial="closed"

animate="open"

variants={menuVariants}

>


<Link

href="/donate"

onClick={()=>setIsOpen(false)}

className="block text-center py-4 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white text-xl font-bold shadow-lg"

>

Donate Now ❤️

</Link>


</motion.li>



</ul>



<p className="text-center mt-8 text-sm text-slate-400 uppercase tracking-widest">

Serve. Empower. Transform.

</p>


</div>


</motion.div>


</>

)

}


</AnimatePresence>


</>

)

}