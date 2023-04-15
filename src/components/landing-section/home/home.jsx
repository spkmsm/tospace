import React from "react";


import { motion} from "framer-motion";
// import Title from "../../images/logowhite.png";
import About from "../about/About";
import Career from "../career/career";
import Video from "../video/video";
import Event from "../event_section/event";
function Home() {
  return (
    <>
      
     
      <motion.div className="home">
        <motion.div className=" pt-[25%] mobile-sm:pt-[60vh]  h-[90vh] flex items-center justify-center flex-col space-y-10">
          {/* <motion.img className="w-[45%] 4k:w-[40%] select-none" src={Title} /> */}
          <motion.p className="laptop:w-[60%] laptop:text-head-mob text-center  mobile-sm:text-desk mobile-sm:w-[90%] select-none">
            Once upon a time building a satellite is only a dream, a group of
            passionate innovators came together to create a firm unlike any
            other. They dreamed of a future where space exploration was more
            than just a distant dream, but a reality accessible to all. And so,
            ToSpace Learn was born!
          </motion.p>
          <motion.h2 className="select-none font-spacereg mobile-sm:text-head-mob desktop:text-para 4k">
            Inspire Innovate Ignite
          </motion.h2>
         
        </motion.div>
        </motion.div>
    
      <About/>
      <Career/>
      <Video/>
      <Event/>
      
    </>
  );
}
export default Home;
