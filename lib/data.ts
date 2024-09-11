import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LuAperture } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import sepproject from "@/public/sepproject.png"; // Adjust the path if needed


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
    {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Education Enrollment",
    location: "National University of Singapore, Singapore",
    description:
      "With a strong passion for data analytics and building programs, I enrolled into NUS School of Computing, Business Analytics Programme, specialising in both Machine Learning and Finance",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Mathematics Tutor",
    location: "The Impact Academy",
    description:
      "I worked as an Additional Mathematics and Elementary Mathematics Tutor where I sharpened my Mathematical Skill as well as learnt and implement various teaching techniques",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Director of Sports",
    location: "NUS Pioneer House",
    description:
      "I was appointed Chief Sports Officer of NUS Pioneer House. I manage a team of 20 CCA Leaders and 15 Committee Members, to lead, manage and plan events",
    icon: React.createElement(LuAperture),
    date: "2024 - Present",
  },
  {
    title: "Data Analyst Intern",
    location: "KABAM Robotics",
    description:
      "I joined KABAM Robotics as a Data Analyst, where I developed and provided interactive Tableau dashboards. With over 3 months of Tableau expertise, I was able to transform complex data into actionable intelligence, enabling data-driven decision-making across multiple departments.",
    icon: React.createElement(FaReact),
    date: "2024 Summer",
  },
  
] as const;

export const projectsData = [
  {
    title: "NUS Student Exchange Mapping Tool",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["TableAu", "MySQL", "JavaScript"],
    imageUrl: sepproject,
    link: "https://public.tableau.com/views/SEPMappingTool/Main?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link", // Add the link here
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "JavaScript",
  "R",
  "TableAu",
  "PowerBI",
  "MatLab",
  "Next.js",
  "Node.js",
  "Git",
  "SQL",
  "PostgreSQL",
] as const;
