import { FC } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface HeaderPorps {
  title: string;
  tag: string;
  githubUrl?: string;
  deployUrl?: string;
}

const Header: FC<HeaderPorps> = ({ title, tag, githubUrl, deployUrl }) => {
  return (
    <div className="bg-black/40 flex flex-none flex-nowrap relative p-4 w-full items-center justify-between h-16 border-2 border-gray-800/60 rounded-2xl group-hover:border-primary/50 transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 z-20">
      {/*Title and Links*/}
      <div className="flex-1 min-w-0 flex items-center gap-3">
        <p className="text-lg font-semibold leading-tight text-white truncate group-hover:text-white transition-colors duration-300 tracking-tight">
          {title}
        </p>
        <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg hover:bg-primary/20 transition-all duration-200 border border-transparent hover:border-primary/40 backdrop-blur-sm"
              title="View on GitHub"
            >
              <FiGithub className="w-4 h-4 text-gray-300 hover:text-primary transition-colors" />
            </a>
          )}
          {deployUrl && (
            <a
              href={deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20 hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-200 border border-green-500/40 hover:border-green-500/60 shadow-md shadow-green-500/30 relative backdrop-blur-sm"
              title="Live Demo"
            >
              <FiExternalLink className="w-4 h-4 text-green-400 hover:text-green-300 transition-colors" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
            </a>
          )}
        </div>
      </div>
      {/*Tag*/}
      <div className="flex-shrink-0 ml-3">
        <p className="text-sm font-medium leading-tight font-mono text-gray-200 bg-primary/20 px-3 py-1.5 rounded-lg group-hover:bg-primary/30 transition-all duration-300 border border-primary/30 group-hover:border-primary/50 shadow-sm shadow-primary/10">
          {tag}
        </p>
      </div>
    </div>
  );
};

export default Header;
