'use client'

import React from "react";
import {
  FaClock,
  FaSignal,
  FaFolderOpen,
  FaLaptopCode,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { mainCourses } from "../data";
import { useRouter } from "next/navigation";

const CourseDetails = ({ params }) => {
  const { slug } = React.use(params);
 const router=useRouter()
  const selectedCourse = mainCourses.find((course) =>
    course.courseId.toLowerCase().includes(slug.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black text-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header Card */}
        <div className="rounded-3xl border border-gray-800 bg-gray-900/80 backdrop-blur-xl p-10 shadow-xl">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            {/* Left */}
            <div className="flex items-center gap-6">
              <div className="h-24 w-24 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-5xl shadow-lg">
                <FaLaptopCode />
              </div>

              <div>
                <h1 className="text-4xl font-bold">
                  {selectedCourse.title}
                </h1>

                <p className="text-gray-400 mt-2">
                  Learn by building real-world projects with complete practical
                  implementation.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-5">

              <div className="flex items-center gap-3 rounded-xl bg-gray-800 px-5 py-3">
                <FaClock className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-xs text-gray-400">Duration</p>
                  <p className="font-semibold">{selectedCourse.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-gray-800 px-5 py-3">
                <FaSignal className="text-green-400 text-xl" />
                <div>
                  <p className="text-xs text-gray-400">Level</p>
                  <p className="font-semibold">{selectedCourse.level}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-gray-800 px-5 py-3">
                <FaFolderOpen className="text-purple-400 text-xl" />
                <div>
                  <p className="text-xs text-gray-400">Projects</p>
                  <p className="font-semibold">
                    {selectedCourse.projects.length}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Projects */}

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-8">
            Course Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {selectedCourse.projects.map((project, index) => (
              <div
                key={project.id}
                className="group rounded-2xl border border-gray-800 bg-gray-900/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="h-12 w-12 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-400">
                        Practical Industry Project
                      </p>
                    </div>

                  </div>


                </div>

                <button onClick={(()=>router.push('/'))} className="mt-6 flex items-center justify-center gap-5 text-center w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3 font-semibold hover:scale-105 transition">
                  <FaArrowLeft className="text-black opacity-0 group-hover:opacity-100 transition" />
                  Back to Courses
                </button>

              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;