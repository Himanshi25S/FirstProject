
import React from 'react'
import SearchBar from '../components/SearchBar'
import React from "react";

// Images
import genericsImg from "../assets/generics.png";
import ayurvedaImg from "../assets/ayurveda.png";
import cosmeticsImg from "../assets/cosmetics.png";
import homecareImg from "../assets/ethical.png";
import ciplaImg from "../assets/cipla.png";

const Home = () => {
  const categories = [
    { img: genericsImg, label: "Generics" },
    { img: cosmeticsImg, label: "Cosmetics" },
    { img: ayurvedaImg, label: "Ayurvedic" },
    { img: homecareImg, label: "Home & Hygiene" },
  ];

  return (
    <div>
      <SearchBar/>
    <div className="min-h-screen bg-slate-50 flex justify-center px-3 md:px-6 lg:px-8 py-4 md:py-8">
      <div className="w-full max-w-5xl text-gray-900">

        {/* ------------ CATEGORY STRIP ------------ */}
        <div
          className="
            flex gap-4 overflow-x-auto no-scrollbar pb-3 mb-6
            snap-x snap-mandatory
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:snap-none
          "
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="
                flex-none snap-start
                w-[95px] xs:w-[105px]
                md:w-auto
              "
            >
              <div
                className="
                  flex flex-col items-center text-center
                  rounded-2xl bg-white/80 border border-slate-100
                  shadow-sm hover:shadow-md hover:-translate-y-0.5
                  transition-transform duration-150 ease-out
                  px-2 py-3 md:px-3 md:py-4
                "
              >
                <div
                  className="
                    w-[70px] h-[70px] md:w-[90px] md:h-[90px]
                    rounded-2xl bg-[#f0f5ff]
                    flex items-center justify-center
                    mb-2
                  "
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="max-w-[55px] md:max-w-[70px] object-contain"
                  />
                </div>
                <p className="text-[11px] md:text-sm font-medium leading-tight">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ------------ MAIN BANNER ------------ */}
        <section
          className="
            flex flex-col md:flex-row
            items-center md:items-center
            justify-between
            rounded-2xl
            px-4 md:px-8 lg:px-10
            py-6 md:py-8
            mb-6
            bg-gradient-to-r from-[#e5f2ff] via-[#edf5ff] to-[#f3f9ff]
            shadow-md
          "
        >
          {/* LEFT TEXT */}
          <div className="md:flex-1 text-center md:text-left">
            <div className="inline-block bg-blue-700 text-white text-[10px] md:text-xs px-3 py-1 rounded-full mb-3 tracking-wide">
              Mankind
            </div>

            <h2 className="text-xl md:text-3xl font-bold mb-2 leading-snug">
              Get{" "}
              <span className="text-indigo-700">
                Mankind&apos;s
              </span>{" "}
              Complete Product Range
            </h2>

            <p className="text-[12px] md:text-sm text-gray-600 mb-5 max-w-md mx-auto md:mx-0">
              Now available on your platform. Order easily and earn more margin with every purchase.
            </p>

            <button
              className="
                inline-flex items-center justify-center
                text-[11px] md:text-sm font-medium
                px-6 py-2.5
                rounded-full
                bg-gray-900 text-white
                hover:bg-gray-800
                active:scale-95
                transition
              "
            >
              Order Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:flex-1 flex justify-center mt-5 md:mt-0">
            <img
              src={ciplaImg}
              alt="Products"
              className="w-32 sm:w-40 md:w-56 lg:w-64 object-contain drop-shadow-md"
            />
          </div>
        </section>

        {/* ------------ SLIDER DOTS ------------ */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-500" />
          <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300" />
        </div>

        {/* ------------ FOOTER ------------ */}
        <footer className="pt-4 md:pt-6 pb-6 text-left">
  <p className="font-semibold text-gray-900">
    Earn More with{" "} 
      <span className="text-xs md:text-sm text-gray-600">
      Medilink Indore
    </span>
  </p>
</footer>

      </div>
    </div>
    </div>
  );
};

export default Home;
