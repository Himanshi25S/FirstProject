import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// 100% working image URLs
const bankLogos = [
    {
        id: 1,
        img: "https://www.vinayakafinserv.com/media/partner_logos/14.png",
      },
      {
        id: 2,
        img: "https://www.vinayakafinserv.com/media/partner_logos/13.png",
      },
      {
        id: 3,
        img: "https://www.vinayakafinserv.com/media/partner_logos/5.png",
      },
      {
        id: 4,
        img: "https://www.vinayakafinserv.com/media/partner_logos/7.png",
      },
      {
        id: 5,
        img: "https://www.vinayakafinserv.com/media/partner_logos/11.png",
      },
    
      // Existing banks, but with NON-WIKIMEDIA links (IDs 6 to 10)
      {
        id: 6,
        img: "https://www.vinayakafinserv.com/media/partner_logos/6.png", // Canara Bank
      },
      {
        id: 7,
        img: "https://www.vinayakafinserv.com/media/partner_logos/9.png", // Kotak Mahindra Bank
      },
      {
        id: 8,
        img: "https://www.vinayakafinserv.com/media/partner_logos/4.png", // Bank of Baroda
      },
      {
        id: 9,
        img: "https://www.vinayakafinserv.com/media/partner_logos/12.png", // ICICI Bank
      },
      {
        id: 10,
        img: "https://www.vinayakafinserv.com/media/partner_logos/3.png", // HDFC Bank
      }
  ];
  

const Slider = () => {
  return (
    <section className="w-full bg-white py-14">
      {/* Heading Section */}
      <div className="mx-auto mb-10 max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
          Our Trusted Banking & Finance Partners
        </h2>
        <p className="mt-3 text-sm text-gray-500 sm:text-base">
          Backed by leading banks and financial institutions to offer you smarter
          loan options and seamless approvals.
        </p>
      </div>

      {/* Slider Section */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={false}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          centeredSlides={false}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 18 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 24 },
          }}
          className="mySwiper"
        >
          {bankLogos.map((bank) => (
            <SwiperSlide
              key={bank.id}
              className="flex items-center justify-center"
            >
              <div className="flex border-1 border-[#4A5565] h-24 w-full max-w-[180px] items-center justify-center rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:h-28 sm:max-w-[200px]">
                <img
                  src={bank.img}
                  alt="Bank Logo"
                  className="h-20 w-auto object-contain sm:h-15"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
