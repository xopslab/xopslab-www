import {FC} from "react";
import {ExternalLink, Download} from "lucide-react";

interface VideoItemProps {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  resourceUrl: string;
}

const VideoItem: FC<VideoItemProps> = ({title, description, youtubeUrl, resourceUrl}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-5 mb-4 shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-3">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium transition-colors">
          <ExternalLink size={16} className="mr-2" />
          Watch on YouTube
        </a>

        <a
          href={resourceUrl}
          download
          className="inline-flex items-center py-2 px-4 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 rounded-md text-sm font-medium transition-colors">
          <Download size={16} className="mr-2" />
          Download Resources
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
