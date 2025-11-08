"use client";

import Image from "next/image";

// Entertainment brands
const entertainmentBrands = [
  { src: "/brands/Colors.png" },
  { src: "/brands/ZEE CINEMA.png" },
  { src: "/brands/Zee TV.png" },
  { src: "/brands/Sony LIv.png" },
  { src: "/brands/Chrome PIC.png" },
  { src: "/brands/Disney.png" },
  { src: "/brands/SPTI.png" },
  { src: "/brands/Shop Disney_.png" },
  { src: "/brands/Shop Marvel.png" },
  { src: "/brands/WB.png" },
  { src: "/brands/Toy Room.png" },
  { src: "/brands/TOPSIFY INDIA.png" },
  { src: "/brands/SNOW WORL.png" },
  { src: "/brands/Pooja ENt.png" },
  { src: "/brands/TBR.png" },
  { src: "/brands/TOPSIFY INDIA.png" },
  { src: "/brands/DIABLO.png" },
  { src: "/brands/EVA LIFE.png" },
  { src: "/brands/ZING.png" },
  { src: "/brands/FSE.png" },
  { src: "/brands/GAME PALACIO.png" },
  { src: "/brands/GSK.png" },
  { src: "/brands/DRAGONFLY.png" }
];

// Non-entertainment brands
const nonEntertainmentBrands = [
  { src: "/brands/WMI.png" },
  { src: "/brands/GW.png" },
  { src: "/brands/IDFC.png" },
  { src: "/brands/SPTI.png" },
  { src: "/brands/LOTD.png" },
  { src: "/brands/SKE.png" },
  { src: "/brands/SP.png" },
  { src: "/brands/SPS_.png" },
  { src: "/brands/R_ADDA.png" },
  { src: "/brands/Pret.png" },
  { src: "/brands/GSK.png" },
  { src: "/brands/IDFC.png" },
  { src: "/brands/ZEBPAY.png" },
  { src: "/brands/EDAMAMA.png" },
  { src: "/brands/DEXOLAC.png" },
  { src: "/brands/MI_.png" },
  { src: "/brands/TRIVANDI.png" },
  { src: "/brands/TSA.png" },
  { src: "/brands/TSBI_.png" },
  { src: "/brands/JIO_.png" },
  { src: "/brands/PNL.png" },
  { src: "/brands/Mhendra.png" },
  { src: "/brands/QUICKLYZ.png" },
];

export default function BrandSection() {
  return (
    <section
      className="section py-20 font-[avenir-light]"
      style={{ backgroundColor: "#3971b8" }}
    >
      <h2
        className="text-3xl font-bold text-center mb-12"
        style={{ color: "#fbfcee" }}
      >
        BRANDS I HAVE WORKED WITH
      </h2>

      {/* Top row (Entertainment - Left to Right) */}
      <div className="w-full overflow-hidden">
        <div
          className="flex whitespace-nowrap items-center"
          style={{
            animation: "scroll-ltr 30s linear infinite",
          }}
        >
          {entertainmentBrands.concat(entertainmentBrands).map((brand, i) => (
            <div
              key={i}
              className="inline-block mx-4 flex-shrink-0 w-40 h-40 rounded-xl overflow-hidden shadow-md bg-white flex items-center justify-center"
            >
              <Image
                src={brand.src}
                alt="brand"
                width={160}
                height={160}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row (Non-Entertainment - Right to Left) */}
      <div className="w-full overflow-hidden mt-8">
        <div
          className="flex whitespace-nowrap items-center"
          style={{
            animation: "scroll-rtl 30s linear infinite",
          }}
        >
          {nonEntertainmentBrands.concat(nonEntertainmentBrands).map(
            (brand, i) => (
              <div
                key={i}
                className="inline-block mx-4 flex-shrink-0 w-40 h-40 rounded-xl overflow-hidden shadow-md bg-white flex items-center justify-center"
              >
                <Image
                  src={brand.src}
                  alt="brand"
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Scoped keyframes */}
      <style jsx>{`
        @keyframes scroll-ltr {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
