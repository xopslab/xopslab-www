import {FC} from "react";
import Image from "next/image";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  hasVideos?: boolean;
  onClick: (id: string) => void;
}

const CourseCard: FC<CourseCardProps> = ({id, title, description, image, hasVideos = true, onClick}) => {
  return (
    <div
      onClick={hasVideos ? () => onClick(id) : undefined}
      className={`flex flex-col bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-all duration-200 h-full ${
        hasVideos ? "cursor-pointer" : "cursor-default"
      }`}>
      <div className="relative h-36 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/placeholder.png";
          }}
        />
      </div>
      <div className="flex flex-col p-4 flex-grow">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm flex-grow">{description}</p>
      </div>
      <div className="p-4 pt-0">
        <button
          className={`w-full py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            hasVideos
              ? "bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600"
              : "bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-slate-400 cursor-not-allowed"
          }`}
          disabled={!hasVideos}>
          {hasVideos ? "Explore Course" : "Coming Soon"}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
