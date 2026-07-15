import Link from "next/link";
import { courses } from "./data";

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Course Zone
          </h1>

          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
            Learn industry-ready skills with hands-on projects. Choose your
            favorite technology stack and start building real-world
            applications.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group w-75 min-h-105 rounded-3xl border border-gray-800 bg-gray-900/80 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-cyan-500/30 flex flex-col"
            >
              {/* Icon */}
              <div className="flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/20 text-6xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {course.icon}
                </div>
              </div>

              {/* Title */}
              <h2 className="mt-8 text-center text-2xl font-bold">
                {course.title}
              </h2>

              {/* Description */}
              <p className="mt-4 text-center text-gray-400 leading-7 flex-1">
                Master <span className="text-white">{course.title}</span> with
                real-world projects, hands-on practice, and industry-level
                development skills.
              </p>

              {/* Button */}
              <Link
                href={`/${course.id}`}
                className="mt-8 w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-cyan-500/40"
              >
                Explore Course →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;