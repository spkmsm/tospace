import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, FreeMode, Autoplay } from "swiper";
import EventsCard from "./event_data";
import { useSwiperSlide } from "swiper/react";
import "./event.css";

function Event() {
  const swiperSlide = useSwiperSlide();
  return (
    <>
      <div className="event_section h-[100%] bg-[#020202] text-white pb-5 mobile-sm:hidden tablet:block">
        <div className="event_heading text-center pt-10 ">
          <h1 className="font-spaceage text-[#9747FF] text-desk1">Events</h1>
          <h5 className="mobile-sm:text-justify mobile-sm:p-1 tablet:text-center ">
            Instructors from around the world teach millions of students on
            Udemy. <br />
            We provide the tools and skills to teach what you love.
          </h5>
        </div>
        <div className="event_aligning_section pt-[10vh] laptop:block mobile-sm:hidden">
          <div className="event_images flex gap-x-[5vh] laptop:flex-col laptop-lg:flex-row laptop:items-center">
            <div className="event_main flex gap-x-1 ">
              <div className="laptop-lg:w-[20vw]    laptop:w-[25vw] ">
                <div className="section-1 flex flex-col items-end mt-[15vh] gap-y-1 4k:mt-[19vh] desktop-lg-4k:mt-[16.6vh]">
                  <div className="text-black bg-slate-700 w-[200px] h-[126px] "></div>
                  <div className="text-black flex flex-row gap-x-1">
                    <div className="small_image w-[120px] h-[70px] bg-slate-700"></div>
                    <div className="small_image w-[120px] h-[94px] bg-slate-700"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="w-[40vw] desktop-lg:h-[25vh]   ">
                  <div className="section_2 flex flex-row gap-x-1">
                    <div className="text-black bg-slate-700 w-[107px] h-[80px] laptop:mt-[16.9vh]  desktop-lg:mt-[15vh] desktop-lg-4k:mt-[16.65vh] "></div>
                    <div className="text-black bg-slate-700 w-[140px] h-[197px] laptop-lg:mt-[0vh] desktop-lg-4k:mt-[4.5vh]  "></div>
                    <div className="text-black bg-slate-700 w-[208px] h-[157px]  laptop:mt-[5.8vh] desktop-lg:mt-[5.1vh] desktop-lg-4k:mt-[8.7vh]   "></div>
                    <div className="text-black bg-slate-700 w-[146px] h-[91px] laptop:mt-[15.3vh] desktop-lg:mt-[13.6vh] desktop-lg-4k:mt-[15.5vh]  "></div>
                    <div className="text-black bg-slate-700 w-[146px] h-[72px] laptop:mt-[18vh] desktop-lg:mt-[16vh] desktop-lg-4k:mt-[17.5vh]  "></div>
                  </div>
                </div>
                <div className="w-[35vw]   ">
                  <div className="section_3 flex flex-row gap-x-1">
                    <div className="text-black bg-slate-700 w-[140px] h-[213px]"></div>
                    <div className="text-black bg-slate-700 w-[212px] h-[169px]"></div>
                    <div className="flexible flex flex-col gap-y-1">
                      <div className="text-black bg-slate-700 w-[146px] h-[72px]"></div>
                      <div className="text-black bg-slate-700 w-[146px] h-[129px]"></div>
                    </div>
                    <div className="text-black bg-slate-700 w-[146px] h-[129px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="event_main_content  laptop-lg:w-[27vw] laptop: w-[100vh]  laptop:overflow-y-scroll laptop:mt-12">
              <h1 className="text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp;Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love. Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy.
              </h1>
            </div>
          </div>
        </div>
        <div className="swiper h-[100%] text-black ">
          <Swiper
            onSlideChange={() => console.log("changed")}
            onSwiper={(swiper) => console.log(swiper)}
            slidesPerView={3}
            spaceBetween={35}
            freeMode={false}
            centeredSlides={true}
            loop={true}
            
            autoplay={{
              pauseOnMouseEnter: true,
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="m "
          >
            {EventsCard.map((cards) => (
              <SwiperSlide key={cards.url}>
                <div class="w-[60%]    border border-gray-200 round shadow dark:bg-gray-800 dark:border-gray-700 m-auto bg-white swipe ">
                  <div className="c">
                    <a href="#">
                      <img class="p-1 h-[30vh]" src={cards.url} alt="" />
                    </a>
                  </div>

                  <div class="px-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {cards.title}
                      </h5>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </div>
      {/* 
       */}

        <div className="event_section h-[100%] bg-[#020202] text-white pb-5 mobile-sm:hidden">
        <div className="event_heading text-center pt-10 ">
          <h1 className="font-spaceage text-[#9747FF] text-desk1">Events</h1>
          <h5 className="mobile-sm:text-justify mobile-sm:p-1 tablet:text-center ">
            Instructors from around the world teach millions of students on
            Udemy. <br />
            We provide the tools and skills to teach what you love.
          </h5>
        </div>
        <div className="event_aligning_section pt-[10vh] laptop:block mobile-sm:hidden">
          <div className="event_images flex gap-x-[5vh] laptop:flex-col laptop-lg:flex-row laptop:items-center">
            <div className="event_main flex gap-x-1 ">
              <div className="laptop-lg:w-[20vw]    laptop:w-[25vw] ">
                <div className="section-1 flex flex-col items-end mt-[15vh] gap-y-1 4k:mt-[19vh] desktop-lg-4k:mt-[16.6vh]">
                  <div className="text-black bg-slate-700 w-[200px] h-[126px] "></div>
                  <div className="text-black flex flex-row gap-x-1">
                    <div className="small_image w-[120px] h-[70px] bg-slate-700"></div>
                    <div className="small_image w-[120px] h-[94px] bg-slate-700"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="w-[40vw] desktop-lg:h-[25vh]   ">
                  <div className="section_2 flex flex-row gap-x-1">
                    <div className="text-black bg-slate-700 w-[107px] h-[80px] laptop:mt-[16.9vh]  desktop-lg:mt-[15vh] desktop-lg-4k:mt-[16.65vh] "></div>
                    <div className="text-black bg-slate-700 w-[140px] h-[197px] laptop-lg:mt-[0vh] desktop-lg-4k:mt-[4.5vh]  "></div>
                    <div className="text-black bg-slate-700 w-[208px] h-[157px]  laptop:mt-[5.8vh] desktop-lg:mt-[5.1vh] desktop-lg-4k:mt-[8.7vh]   "></div>
                    <div className="text-black bg-slate-700 w-[146px] h-[91px] laptop:mt-[15.3vh] desktop-lg:mt-[13.6vh] desktop-lg-4k:mt-[15.5vh]  "></div>
                    <div className="text-black bg-slate-700 w-[146px] h-[72px] laptop:mt-[18vh] desktop-lg:mt-[16vh] desktop-lg-4k:mt-[17.5vh]  "></div>
                  </div>
                </div>
                <div className="w-[35vw]   ">
                  <div className="section_3 flex flex-row gap-x-1">
                    <div className="text-black bg-slate-700 w-[140px] h-[213px]"></div>
                    <div className="text-black bg-slate-700 w-[212px] h-[169px]"></div>
                    <div className="flexible flex flex-col gap-y-1">
                      <div className="text-black bg-slate-700 w-[146px] h-[72px]"></div>
                      <div className="text-black bg-slate-700 w-[146px] h-[129px]"></div>
                    </div>
                    <div className="text-black bg-slate-700 w-[146px] h-[129px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="event_main_content  laptop-lg:w-[27vw] laptop: w-[100vh]  laptop:overflow-y-scroll laptop:mt-12">
              <h1 className="text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp;Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love. Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy.
              </h1>
            </div>
          </div>
        </div>
        <div className="swiper h-[100%] text-black ">
          <Swiper
            onSlideChange={() => console.log("changed")}
            onSwiper={(swiper) => console.log(swiper)}
            slidesPerView={3}
            spaceBetween={35}
            freeMode={false}
            centeredSlides={true}
            loop={true}
            
            autoplay={{
              pauseOnMouseEnter: true,
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="m "
          >
            {EventsCard.map((cards) => (
              <SwiperSlide key={cards.url}>
                <div class="w-[60%]    border border-gray-200 round shadow dark:bg-gray-800 dark:border-gray-700 m-auto bg-white swipe ">
                  <div className="c">
                    <a href="#">
                      <img class="p-1 h-[30vh]" src={cards.url} alt="" />
                    </a>
                  </div>

                  <div class="px-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {cards.title}
                      </h5>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </div>
      {/*  */}


      <div className="event_section h-[100%] bg-[#020202] text-white pb-5 mobile-sm:visible tablet:hidden">
        <div className="event_heading text-center pt-10 ">
          <h1 className="font-spaceage text-[#9747FF] text-desk1">Events</h1>
          <h5 className="mobile-sm:text-justify mobile-sm:p-1 tablet:text-center ">
            Instructors from around the world teach millions of students on
            Udemy. <br />
            We provide the tools and skills to teach what you love.
          </h5>
        </div>
        <div className="event_aligning_section pt-[10vh] laptop:visible mobile-sm:hidden">
          <div className="event_images flex gap-x-[5vh] laptop:flex-col laptop-lg:flex-row laptop:items-center">
            <div className="event_main flex gap-x-1 ">
              <div className="laptop-lg:w-[20vw]    laptop:w-[25vw] ">
                <div className="section-1 flex flex-col items-end mt-[15vh] gap-y-1 4k:mt-[19vh] desktop-lg-4k:mt-[16.6vh]">
                  <div className="text-black bg-slate-700 w-[200px] h-[126px] "></div>
                  <div className="text-black flex flex-row gap-x-1">
                    <div className="small_image w-[120px] h-[70px] bg-slate-700"></div>
                    <div className="small_image w-[120px] h-[94px] bg-slate-700"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="w-[40vw] desktop-lg:h-[25vh]   ">
                  <div className="section_2 flex flex-row gap-x-1">
                    <div className="text-black bg-slate-700 w-[107px] h-[80px] laptop:mt-[16.9vh]  desktop-lg:mt-[15vh] desktop-lg-4k:mt-[16.65vh] "></div>
                    <div className="text-black bg-slate-700 w-[140px] h-[197px] laptop-lg:mt-[0vh] desktop-lg-4k:mt-[4.5vh]  "></div>
                    <div className="text-black bg-slate-700 w-[208px] h-[157px]  laptop:mt-[5.8vh] desktop-lg:mt-[5.1vh] desktop-lg-4k:mt-[8.7vh]   "></div>
                    <div className="text-black bg-slate-700 w-[146px] h-[91px] laptop:mt-[15.3vh] desktop-lg:mt-[13.6vh] desktop-lg-4k:mt-[15.5vh]  "></div>
                    <div className="text-black bg-slate-700 w-[146px] h-[72px] laptop:mt-[18vh] desktop-lg:mt-[16vh] desktop-lg-4k:mt-[17.5vh]  "></div>
                  </div>
                </div>
                <div className="w-[35vw]   ">
                  <div className="section_3 flex flex-row gap-x-1">
                    <div className="text-black bg-slate-700 w-[140px] h-[213px]"></div>
                    <div className="text-black bg-slate-700 w-[212px] h-[169px]"></div>
                    <div className="flexible flex flex-col gap-y-1">
                      <div className="text-black bg-slate-700 w-[146px] h-[72px]"></div>
                      <div className="text-black bg-slate-700 w-[146px] h-[129px]"></div>
                    </div>
                    <div className="text-black bg-slate-700 w-[146px] h-[129px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="event_main_content  laptop-lg:w-[27vw] laptop: w-[100vh]  laptop:overflow-y-scroll laptop:mt-12">
              <h1 className="text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp;Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love. Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy. We provide the tools and skills
                to teach what you love.Instructors from around the world teach
                millions of students on Udemy.
              </h1>
            </div>
          </div>
        </div>
        <div className="swiper h-[100%] text-black ">
          <Swiper
            onSlideChange={() => console.log("changed")}
            onSwiper={(swiper) => console.log(swiper)}
            slidesPerView={1}
            spaceBetween={35}
            freeMode={false}
            centeredSlides={true}
            loop={true}
            
            autoplay={{
              pauseOnMouseEnter: true,
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="m"
          >
            {EventsCard.map((cards) => (
              <SwiperSlide key={cards.url}>
                <div class="w-[60%]    border border-gray-200 round shadow dark:bg-gray-800 dark:border-gray-700 m-auto bg-white swipe ">
                  <div className="c">
                    <a href="#">
                      <img class="p-1 h-[30vh]" src={cards.url} alt="" />
                    </a>
                  </div>

                  <div class="px-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {cards.title}
                      </h5>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </div>
    </>
  );
}

export default Event;
