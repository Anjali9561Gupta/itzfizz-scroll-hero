function ScrollVisual({ progress }) {
  

  const carX = -48 + progress * 96;

  const carScale = 0.85 + progress * 0.15;

  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      <div
        className="absolute left-1/2 top-[42%]"
        style={{
          transform: `
            translate(-50%, -50%)
            translateX(${carX}vw)
            scale(${carScale})
          `,
          willChange: "transform",
        }}
      >
        <svg
          width="420"
          height="190"
          viewBox="0 0 420 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[230px] sm:w-[300px] md:w-[380px] lg:w-[420px]"
        >
        
          <ellipse
            cx="210"
            cy="165"
            rx="155"
            ry="12"
            fill="rgba(0,0,0,0.14)"
          />

         
          <path
            d="M48 132
               C55 105 78 90 111 86
               L143 42
               C153 28 168 21 187 21
               H250
               C273 21 288 31 302 46
               L337 86
               C360 89 378 102 382 132
               L370 145
               H50
               Z"
            fill="#FACC15"
          />

        
          <path
            d="M151 80
               L169 48
               C174 39 182 35 194 35
               H244
               C258 35 267 40 276 50
               L299 80
               Z"
            fill="#747D82"
          />

          
          <path
            d="M224 37 L224 80"
            stroke="#111111"
            strokeWidth="5"
          />

         
          <path
            d="M348 105
               C360 106 369 111 375 119
               L364 124
               H346
               Z"
            fill="#F5C400"
          />

         
          <path
            d="M51 111
               C61 106 72 104 81 105
               L77 123
               H54
               Z"
            //fill="#2b7ad5"
          />

        
          <path
            d="M99 119 H319"
            stroke="#555555"
            strokeWidth="3"
          />

          
          <circle
            cx="101"
            cy="139"
            r="29"
            fill="#0A0A0A"
          />

          <circle
            cx="101"
            cy="139"
            r="13"
            fill="#777777"
          />

          <circle
            cx="101"
            cy="139"
            r="5"
            fill="#222222"
          />

          
          <circle
            cx="319"
            cy="139"
            r="29"
            fill="#0A0A0A"
          />

          <circle
            cx="319"
            cy="139"
            r="13"
            fill="#777777"
          />

          <circle
            cx="319"
            cy="139"
            r="5"
            fill="#222222"
          />

          {/* Door */}
          <path
            d="M225 83 V122"
            stroke="#444444"
            strokeWidth="2"
          />

          
          <rect
            x="238"
            y="94"
            width="22"
            height="3"
            rx="1.5"
            fill="#777777"
          />
        </svg>
      </div>
    </div>
  );
}

export default ScrollVisual;