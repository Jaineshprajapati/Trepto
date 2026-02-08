import React from 'react'
import Triangle from "../../../assets/images/Triangle.svg"
import BlackTriangle from "../../../assets/images/BlackTriangle.svg"

const Dealrevelution = () => {
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
    src={Triangle}
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
    src={BlackTriangle}
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
    DEAL EVALUATION & SUPPORT
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
    We offer comprehensive analytical support for investors assessing opportunities—ensuring decisions are grounded in evidence, not assumptions.
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
    Our deal evaluation support includes:
  </p>

  {/* BULLETS */}
  <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-y-3">
    {[
      "Early-stage opportunity screening",
      "Business model viability assessment",
      "Revenue & cost modelling",
      "Sensitivity & scenario analysis",
      "Investment committee–ready deal notes and IC decks",
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

export default Dealrevelution
