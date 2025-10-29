import React from "react";

const contentSections = [
  {
    title: "Guest list approvals",
    description:
      "Enjoy instant discounts on bookings and drinks, only for app users.",
    mainImage: "/image-2528.png",
    mainImageClasses: "w-96 h-[545px]",
    decorativeImages: [
      { src: "/image-2537.png", classes: "w-[289px] h-[86px]" },
      { src: "/image-2535.png", classes: "w-[271px] h-[83px]" },
      { src: "/image-2536.png", classes: "w-[350px] h-[53px]" },
    ],
  },
  {
    title: "Connect & Vibe",
    description:
      "Chat freely with fellow partygoers, plan meetups, and make memories.",
    mainImage: "/image-2529.png",
    mainImageClasses: "w-[365px] h-[365px]",
    decorativeImages: [],
  },
];

export const ConnectVibeSection = (): JSX.Element => {
  return (
    <section className="relative flex-1 bg-black overflow-hidden">
      <div className="absolute left-0 bottom-[-1064px] h-[1945px] w-full rotate-180 bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(255,0,103,0.2)_100%)]" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 py-16 min-h-[881px]">
        <div className="flex flex-col justify-start pt-16">
          <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-[52px] tracking-[0] leading-[normal] mb-8">
            {contentSections[0].title}
          </h2>

          <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] max-w-[580px] mb-12">
            {contentSections[0].description}
          </p>

          <div className="relative flex justify-center items-center max-w-[450px] mx-auto">
            <img
              className="w-full h-auto max-h-[480px] object-contain"
              alt="Guest list approvals interface"
              src={contentSections[0].mainImage}
            />

            <img
              className="absolute top-[140px] -left-8 w-[240px] h-auto object-cover"
              alt="Decorative element"
              src={contentSections[0].decorativeImages[0].src}
            />

            <img
              className="absolute top-[240px] -left-12 w-[220px] h-auto object-cover"
              alt="Decorative element"
              src={contentSections[0].decorativeImages[1].src}
            />

            <img
              className="absolute bottom-[20px] -left-4 w-[280px] h-auto object-cover"
              alt="Decorative element"
              src={contentSections[0].decorativeImages[2].src}
            />
          </div>
        </div>

        <div className="flex flex-col justify-start pt-16">
          <div className="flex justify-center mb-8">
            <img
              className={`${contentSections[1].mainImageClasses} object-cover rounded-full`}
              alt="Connect and vibe profile"
              src={contentSections[1].mainImage}
            />
          </div>

          <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-[52px] tracking-[0] leading-[normal] mb-8">
            {contentSections[1].title}
          </h2>

          <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] max-w-[580px]">
            {contentSections[1].description}
          </p>
        </div>
      </div>
    </section>
  );
};
