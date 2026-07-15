import {
  FaCode,
  FaJava,
  FaPython,
  FaReact,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa";

export const courses = [
  {
    id: "java",
    title: "Java Full Stack",
    icon: <FaJava color="#f97316" />,
  },
  {
    id: "dsa",
    title: "Advanced Data Structure",
    icon: <FaCode color="#facc15" />,
  },
  {
    id: "python",
    title: "Python Full Stack",
    icon: <FaPython color="#438bdf" />,
  },
  {
    id: "mern",
    title: "MERN Full Stack",
    icon: <FaReact color="#61dafb" />,
  },
  {
    id: "php",
    title: "PHP Full Stack",
    icon: <FaPhp color="#a855f7" />,
  },
  {
    id: "node",
    title: "Node.js Backend",
    icon: <FaNodeJs color="#22c55e" />,
  },
];

export const mainCourses = [
  {
    id: 1,
    courseId: "java",
    title: "Java Full Stack",
    duration: "6 Months",
    level: "Advanced",
    projects: [
      { id: 101, title: "E-Commerce Website" },
      { id: 102, title: "Online Banking System" },
      { id: 103, title: "Job Portal" },
      { id: 104, title: "Library Management System" },
      { id: 105, title: "Hospital Management System" },
      { id: 106, title: "Student Management System" },
    ],
  },
  {
    id: 2,
    courseId: "dsa",
    title: "Advanced Data Structure",
    duration: "4 Months",
    level: "Intermediate",
    projects: [
      { id: 201, title: "File Compression Tool" },
      { id: 202, title: "Data Caching System" },
      { id: 203, title: "Memory Management Simulator" },
      { id: 204, title: "Graph-Based Social Network" },
      { id: 205, title: "Maze Solver" },
      { id: 206, title: "Route Finder" },
    ],
  },
  {
    id: 3,
    courseId: "python",
    title: "Python Full Stack",
    duration: "6 Months",
    level: "Advanced",
    projects: [
      { id: 301, title: "Blog Website" },
      { id: 302, title: "Chat Application" },
      { id: 303, title: "Expense Tracker" },
      { id: 304, title: "Weather App" },
      { id: 305, title: "Face Recognition System" },
      { id: 306, title: "AI Resume Analyzer" },
    ],
  },
  {
    id: 4,
    courseId: "mern",
    title: "MERN Full Stack",
    duration: "6 Months",
    level: "Advanced",
    projects: [
      { id: 401, title: "Social Media App" },
      { id: 402, title: "Food Delivery App" },
      { id: 403, title: "Netflix Clone" },
      { id: 404, title: "Real Estate Portal" },
      { id: 405, title: "Video Streaming Platform" },
      { id: 406, title: "Admin Dashboard" },
    ],
  },
  {
    id: 5,
    courseId: "php",
    title: "PHP Full Stack",
    duration: "5 Months",
    level: "Intermediate",
    projects: [
      { id: 501, title: "School Management System" },
      { id: 502, title: "Hotel Booking System" },
      { id: 503, title: "Online Examination System" },
      { id: 504, title: "CRM Application" },
      { id: 505, title: "Payroll Management" },
      { id: 506, title: "Inventory Management" },
    ],
  },
  {
    id: 6,
    courseId: "node",
    title: "Node.js Backend",
    duration: "3 Months",
    level: "Intermediate",
    projects: [
      { id: 601, title: "REST API Development" },
      { id: 602, title: "Authentication System" },
      { id: 603, title: "URL Shortener API" },
      { id: 604, title: "E-Commerce Backend" },
      { id: 605, title: "Task Management API" },
      { id: 606, title: "Chat Server using Socket.io" },
    ],
  },
];