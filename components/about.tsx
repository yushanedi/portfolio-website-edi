"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import back_photo from "@/public/back_photo.jpg"; // Adjust the path if needed

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      {/* Image insertion */}
      <div className="w-full mb-8">
        <Image
          src={back_photo}
          alt="Background Photo"
          layout="responsive"
          width={700}
          height={475}
          className="rounded-lg"
        />
      </div>

      <p className="mb-3">
        Hi, I’m Edison, <span className="italic">a data science enthusiast</span> currently pursuing a <span className="font-bold">Bachelor of Science in Business Analytics with Honours at the National University of Singapore (NUS).</span> As an NUS Computing Student with a <span className="font-bold">specialization in Machine Learning and Finance</span>, I’ve honed my skills in data management, visualization, and advanced analytics techniques.
      </p>

      <p className="mb-3">
        My toolkit includes a variety of powerful data tools such as  <span className="font-bold">Python, R, MySQL, Tableau, Power BI, and MATLAB.</span> I’m adept at leveraging these technologies to uncover actionable insights from complex datasets, whether it’s through data-driven decision-making or innovative problem-solving.
      </p>

      <p>
        Beyond my technical expertise, I enjoy mentoring students in mathematics, helping them achieve substantial grade improvements. As Sports Head at NUS Pioneer House, I lead initiatives that foster a vibrant sporting culture, enhancing participation through strategic planning and inclusive programs. I'm always eager to explore new challenges and opportunities where I can make a meaningful impact. Let’s connect and explore how we can collaborate!
      </p>
    </motion.section>
  );
}
