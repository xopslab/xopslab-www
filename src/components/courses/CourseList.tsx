import {FC} from "react";
import CourseCard from "./CourseCard";

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  hasVideos?: boolean;
}

interface CourseListProps {
  courses: Course[];
  onSelectCourse: (id: string) => void;
}

const CourseList: FC<CourseListProps> = ({courses, onSelectCourse}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          description={course.description}
          image={course.image}
          hasVideos={course.hasVideos}
          onClick={onSelectCourse}
        />
      ))}
    </div>
  );
};

export default CourseList;
