import { motion } from "framer-motion";
import Vi from "./vii.mp4";

function Video() {
  return (
    <>
      <div className="video_part_section bg-black h-[100%]  text-white ">
        <div className="video-side  ">
          <div className="vide0_session h-[60vh] " >
          <div className="content-side absolute laptop:mx-[20vh] mt-[25vh] bg-black z-10 laptop:p-5">
              <h1 className="font-spaceage text-[#9747FF] text-desk1 mobile-sm:text-center   text-center  ">
                Video
              </h1>
              <h3 className="mobile-sm:text-center laptop:text-justify">
                Video Upskill your team with Udemy Business
              </h3>
              <ul className="list-disc m-5 laptop:text-justify mobile-sm:p-3">
                <li>
                  Unlimited access to 19,000+ top Udemy courses, anytime,<br/>
                  anywhereUnlimited access to 19,000+ top Udemy courses,<br/>
                  anytime, anywhere
                </li>
                <li className="pt-4">
                  International course collection in 14 languages
                </li>
                <li className="pt-4">
                  Top certifications in tech and business
                </li>
                <li className="pt-4">
                  Unlimited access to 19,000+ top Udemy courses, anytime,<br/>
                  anywhereUnlimited access to 19,000+ top Udemy courses,<br/>
                  anytime, anywhere.
                </li>
                <li className="pt-4">
                  International course collection in 14 languages
                </li>
                <li className="pt-4">
                  Top certifications in tech and business
                </li>
              </ul>
              <div className="explore_btn font-Azonix laptop-lg:mt-[4vh] mobile-sm:text-center laptop:text-justify laptop:mt-0">
                <motion.button
                  className="bg-[#333333] text-white laptop:w-[100%] h-[4vh] mobile-sm:w-[15vh] 4k:text-4k desktop:text-desk mobile-sm:text-mob  rounded border-none   "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 3 }}
                >
                  View More
                </motion.button>
              </div>
            </div>
            <motion.video
              autoPlay
              muted
              loop
              className="laptop:w-[100%]  mobile-sm:w-[200vw] v "
              initial={{ opacity: 0 }}
              // animate={{ }}
              whileInView={{opacity: 0.5 }}
              transition={{ ease: "easeOut", duration: 4 }}
            >
              <motion.source src={Vi} type="video/mp4" />
            </motion.video>
           
          </div>
        </div>

          <div className="card_part laptop:h-[120vh] mobile-sm:h-[100%] mobile-sm:pb-[2vh] bg-[#00000082] laptop:pt-[55vh] mobile-sm:pt-[70vh]">
          <div className="grid laptop:grid-cols-3 gap-10  mt-10 mobile-sm:grid-rows-1">
            <div>
              <div class="w-[60%]  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                <a href="#">
                  <img
                    class="rounded-lg p-4"
                    src="https://www.21kschool.com/blog/wp-content/uploads/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="w-[60%] m-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-lg p-4"
                    src="https://www.21kschool.com/blog/wp-content/uploads/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="w-[60%] m-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-lg p-4"
                    src="https://www.21kschool.com/blog/wp-content/uploads/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="explore_btn font-Azonix laptop-lg:mt-[5vh] text-center laptop:mt-4 mt-2">
            <motion.button
              className="bg-[#54406F] text-white laptop:w-[12%] h-[4vh] mobile-sm:w-[15vh] 4k:text-4k desktop:text-desk mobile-sm:text-mob  rounded border-none   "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
            >
              View More
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
