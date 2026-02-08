import React from 'react'
import Diamond from "../../../assets/images/Diamond.svg"
import BlackDiamond from "../../../assets/images/BlackDiamond.svg"

const Stategicadvisory = () => {
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
        src={Diamond}
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
        src={BlackDiamond}
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
        STRATEGIC ADVISORY
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
       For founders, investors and CXOs, we provide structured strategic guidance rooted in financial intelligence and sector insight.
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
        Our advisory work extends across domains such as consumer markets, industrials, energy, healthcare, technology and mobility.
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
        Our advisory includes:
      </p>
    
      {/* BULLETS */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-y-3">
        {[
          "Business model evaluation",
          "Go-to-market & scale-up frameworks",
          "Investment strategy design",
          "Market positioning & competitive analysis",
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

export default Stategicadvisory
