/**
 * Utility functions for data handling
 */

/**
 * Load videos for a specific course
 * @param {string} courseId - The ID of the course
 * @returns {Promise<Array>} - Promise resolving to array of video objects
 */
export const loadCourseVideos = async (courseId) => {
  try {
    const courses = await import("../data/courses.json");
    const course = courses.courses.find((course) => course.id === courseId);
    return course?.videos || [];
  } catch (error) {
    console.error(`Error loading videos for course ${courseId}:`, error);
    return [];
  }
};

/**
 * Load all course data
 * @returns {Promise<Array>} - Promise resolving to array of course objects
 */
export const loadCourses = async () => {
  try {
    const courses = await import("../data/courses.json");
    return courses.courses || [];
  } catch (error) {
    console.error("Error loading courses:", error);
    return [];
  }
};
