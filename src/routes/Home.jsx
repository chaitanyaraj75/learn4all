import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import videoSectionData from "../data/videodata";
import Course_card from "../component/Course_card";

function Home() {
  return (
    <div className="dark:bg-[#0D1117] dark:text-white bg-white text-black">
      <Helmet>
        <title>Learn4All | Empower Your Learning Journey</title>
        <meta name="description" content="Explore a world of knowledge with Learn4All. Join our platform to learn, grow, and succeed." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-[#0D1117] dark:to-[#161B22]">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Learn4All - Ignite Your Knowledge
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Dive into quality courses across subjects, tailored for every student.
        </motion.p>
      </section>

      {/* Course Section */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6">Course Summary</h3>

        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {videoSectionData.map((item, index) => (
            <SwiperSlide key={index}>
              <Course_card
                title={item.title}
                classLevel={item.class}
                subject={item.subject}
                description={item.description}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
