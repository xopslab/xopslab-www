"use client";

import {useState} from "react";
import {ArrowLeft, Search} from "lucide-react";
import coursesData from "@/data/courses.json";
import CourseList from "@/components/courses/CourseList";
import VideoItem from "@/components/courses/VideoItem";
import {Input} from "@/components/ui/input";

export default function LearnPage() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedCourse = selectedCourseId ? coursesData.courses.find((course) => course.id === selectedCourseId) : null;

  // Filter courses based on search query
  const filteredCourses = coursesData.courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCourse = (id: string) => {
    // Find the course to check if it has videos
    const course = coursesData.courses.find((c) => c.id === id);
    if (course && course.videos && course.videos.length > 0) {
      setSelectedCourseId(id);
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  };

  const handleBackToAllCourses = () => {
    setSelectedCourseId(null);
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <>
      {/* Hero Section with Background */}
      <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 pt-16">
        <div className="container mx-auto pt-16 px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-800 dark:from-blue-400 dark:to-indigo-400">
              Learn Without Limits
            </h1>
            <p className="text-l text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Free tutorials, blogs, and videos to help you learn AI, ML, and Cloud technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="container mx-auto px-8 md:px-12 lg:px-16 py-16 max-w-7xl">
        {!selectedCourse ? (
          <>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-600 dark:text-white mb-4">Free Courses</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Choose a course to start your learning journey. All courses include video tutorials and downloadable
                resources.
              </p>

              {/* Search functionality - full width */}
              <div className="relative mb-8 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  className="pl-10 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {filteredCourses.length === 0 ? (
                <p className="text-slate-500 dark:text-slate-400 italic">No courses found matching your search.</p>
              ) : (
                <CourseList
                  courses={filteredCourses.map((course) => ({
                    ...course,
                    hasVideos: course.videos && course.videos.length > 0,
                  }))}
                  onSelectCourse={handleSelectCourse}
                />
              )}
            </div>
          </>
        ) : (
          <div>
            <button
              onClick={handleBackToAllCourses}
              className="flex items-center text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to all courses
            </button>

            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{selectedCourse.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">{selectedCourse.description}</p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-4">Videos</h3>
              {selectedCourse.videos.map((video) => (
                <VideoItem
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  description={video.description}
                  youtubeUrl={video.youtubeUrl}
                  resourceUrl={video.resourceUrl}
                />
              ))}
              {selectedCourse.videos.length === 0 && (
                <p className="text-slate-500 dark:text-slate-400 italic">No videos available for this course yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
