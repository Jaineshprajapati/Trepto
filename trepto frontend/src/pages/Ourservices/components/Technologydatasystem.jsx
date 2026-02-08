import React from 'react'
import Phantom from "../../../assets/images/Phantom.svg"
import BlackPlantom from "../../../assets/images/BlackPhantom.svg"

const Technologydatasystem = () => {
  return (
    <section className="w-full flex justify-center py-10 bg-background">
         {/* Card Container */}
         <div
           className="
             group
             relative
             w-full
             max-w-7xl
             bg-surface
             border
             border-border
             rounded-[20px]
             px-6 sm:px-10 lg:px-16
             py-10 lg:py-20
             overflow-hidden
             transition-all
             duration-50
             hover:bg-primary
           "
         >
           {/* BACKGROUND CUBE */}
   <div
     className="
       pointer-events-none
       absolute
       right-0
       bottom-0
       w-75
       h-75
       z-0
     "
   >
     {/* ORANGE CUBE (DEFAULT) */}
     <img
       src={Phantom}
       alt=""
       className="
         absolute
         inset-0
         w-full
         h-full
         
         transition-opacity
         duration-50
         opacity-100
         group-hover:opacity-0
       "
     />
   
     {/* BLACK CUBE (HOVER) */}
     <img
       src={BlackPlantom}
       alt=""
       className="
         absolute
         inset-0
         w-full
         h-full
         transition-opacity
         duration-50
         opacity-0
         group-hover:opacity-100
       "
     />
   </div>
   
           {/* CONTENT */}
          <div className="relative z-10 max-w-7xl">
   
     {/* TITLE */}
     <h3
       className="
         font-heading
         font-semibold
         tracking-[0.06em]
         mb-4
         text-h4
         sm:text-h3
         lg:text-h2
         text-primary
         transition-colors
         duration-50
         group-hover:text-white
       "
     >
       TECHNOLOGY & DATA SYSTEMS
     </h3>
   
     {/* PARA 1 */}
     <p
       className="
         mb-4
         font-normal
         text-small
         sm:text-medium
         lg:text-h4
         text-text-secondary
         transition-colors
         duration-50
         group-hover:text-white
       "
     >
      To empower faster and more accurate decisions, we build data and intelligence infrastructure for investors and businesses.
      </p>
   {/* PARA 2 */}
  <p
    className="
      mb-6
      font-normal
      text-small
      sm:text-medium
      lg:text-h4
      text-text-secondary
      transition-colors
      duration-50
      group-hover:text-white
    "
  >
    Our engineering capability converts fragmented datasets into clean, usable, and continuously updated intelligence.
  </p>
   
     {/* SUB TEXT */}
     <p
       className="
         mb-4
         font-normal
         text-small
         sm:text-medium
         lg:text-h4
         text-text-secondary
         transition-colors
         duration-50
         group-hover:text-white
       "
     >
       We build:
     </p>
   
     {/* BULLETS */}
     <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-y-3">
       {[
         "Automated data pipelines",
         "Dashboarding & visualization layers",
         "API-integrated reporting systems",
         "Portfolio tracking & analytics engines",
       ].map((item, index) => (
         <div key={index} className="flex items-start gap-3">
           
           {/* BULLET */}
           <span
             className="
               mt-2
               h-2
               w-2
               sm:h-3
               sm:w-3
               rounded-full
               bg-primary
               shrink-0
               transition-colors
               duration-50
               group-hover:bg-white
             "
           />
   
           {/* TEXT */}
           <span
             className="
               font-normal
               text-small
               sm:text-medium
               lg:text-h4
               text-text-secondary
               transition-colors
               duration-50
               group-hover:text-white
             "
           >
             {item}
           </span>
         </div>
       ))}
     </div>
   </div>
         </div>
       </section>
  )
}

export default Technologydatasystem
