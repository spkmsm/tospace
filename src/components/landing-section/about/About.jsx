import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sponsors from "./sponsors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, FreeMode,Autoplay } from "swiper";

import imageSlide from "./about_data";
function About() {
  const [currentState, setcurrentState] = useState(0);

  //   console.log(imageSlide[currentState].url);
  //   useEffect(() => {
  //     const animate = setTimeout(() => {
  //       if (currentState === 2) {
  //         setcurrentState(0);
  //       } else {
  //         setcurrentState(currentState + 1);
  //       }
  //     }, 8000);
  //     return () => clearTimeout(animate);
  //   }, [currentState]);

  return (
    <div className="bg-[#0B0B0F] h-[100%] pb-[2vh] text-white ">
      <div className="about_content  flex justify-around items-center laptop:flex-row mobile-sm:flex-col desktop-lg:pt-[1%]  laptop:pt-[5%] mobile-sm:px-3 ">
        <div className="description mobile-sm:order-last laptop:order-first  ">
          <motion.h1 className="laptop:text-heading pb-[10vh] font-spacereg text-[#9747FF] laptop:text-justify mobile-sm:text-center">
            THE HISTORY OF TOSPACE LEARN
          </motion.h1>

          <motion.p
            className="mobile-sm:w-[90vw]  laptop-lg:w-[90vh] laptop:text-paragraph text-justify laptop:w-[50vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            {imageSlide[currentState].message}
          </motion.p>
          <div className="explore_btn font-Azonix mt-[5vh]">
            <motion.button
              className="view text-white laptop-lg:w-[14%] h-[4vh] mobile-sm:w-[15vh] 4k:text-4k desktop:text-desk mobile-sm:text-mob  rounded border-none "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
            >
              View More
            </motion.button>
          </div>
        </div>

        <div className="image_content  laptop:mt-[15vh] rotate-180">
          <motion.img
            src={imageSlide[currentState].url}
            alt=""
            className="laptop-lg:w-[50vh]  mobile-sm:w-[20vh] laptop:w-[50vh] "
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.5,

              transition: {
                type: "spring",
                duration: 6,
                bounce: 0.1,
                repeat: Infinity,
                repeatDelay: 2,
              },
            }}
            whileHover={{ opacity: 1 }}
          />
        </div>
        {/* <div className="m-auto w-[21vh] h-[9vh] p-1 sponsor rounded-lg"><img src={Lmes} alt=""  className="pt-2"/></div> */}
      </div>
      {/* <Swiper
        onSlideChange={() => console.log("changed")}
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerView={3}
        spaceBetween={35}
        freeMode={false}
        autoplay={{
          pauseOnMouseEnter:true,
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {Sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.url}>
            
            <div className=" w-[25vh] h-[10vh] mt-5 m-auto sponsor rounded-lg"><img src={sponsor.url} alt={sponsor.id}  className=" "/></div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <div className="sponsor_content text-center mt-[5vh]">
        <h3 className="font-Azonix laptop:text-[24px] text-[#9747FF] mobile-sm:text-desk pb-5">
          {" "}
          Trusted by 10+ Companies Worldwide
        </h3>
      </div>
    </div>
  );
}

export default About;
