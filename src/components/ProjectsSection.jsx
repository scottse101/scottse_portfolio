import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Play } from 'lucide-react';

const ProjectsSection = ({ prosjekter, onVideoClick }) => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FolderGit2 className="text-white" size={32} />
        <h2 className="text-3xl font-bold text-white">Prosjekter</h2>
      </div>
      <div className="grid gap-6">
        {prosjekter.map((prosjekt, index) => (
          <div key={index} 
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {prosjekt.navn}
              </h3>
              <ExternalLink className="text-gray-400 group-hover:text-blue-500 transition-colors" size={20} />
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">{prosjekt.beskrivelse}</p>
            <div className="flex justify-center mb-4">
              <div 
                className={`relative ${
                  prosjekt.navn === "SpareSti Web App" 
                    ? "w-full h-96" 
                    : "w-48"
                  } rounded-lg overflow-hidden border-4 border-gray-100 shadow-md cursor-pointer group/video`}
                onClick={() => onVideoClick(prosjekt.video)}
                onMouseEnter={() => prosjekt.navn === "SpareSti Web App" && setHoveredVideo(index)}
                onMouseLeave={() => prosjekt.navn === "SpareSti Web App" && setHoveredVideo(null)}
              >
                {/* Overlay med play-knapp - bare for SpareSti */}
                {prosjekt.navn === "SpareSti Web App" && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity">
                    <div className="bg-white/90 p-4 rounded-full">
                      <Play className="text-blue-600 w-8 h-8" />
                    </div>
                  </div>
                )}

                {/* Placeholder/thumbnail - bare for SpareSti */}
                {prosjekt.navn === "SpareSti Web App" && hoveredVideo !== index && (
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <div className="p-4 text-center">
                      <img 
                        src="/sparesti_logo.png" 
                        alt="Project preview" 
                        className="w-full h-full object-cover rounded"
                      />
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <Play className="text-white/90 w-12 h-12" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Video */}
                <video 
                  className={`w-full ${
                    prosjekt.navn === "SpareSti Web App"
                      ? "aspect-video"
                      : "aspect-[9/19]"
                  } ${prosjekt.navn === "SpareSti Web App" ? (hoveredVideo === index ? 'opacity-100' : 'opacity-0') : ''}`}
                  muted
                  loop
                  playsInline
                  autoPlay={prosjekt.navn === "SpareSti Web App" ? hoveredVideo === index : true}
                >
                  <source src={prosjekt.video} type="video/quicktime" />
                  Din nettleser støtter ikke video-elementet.
                </video>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {prosjekt.teknologier.map((tech, i) => (
                <span key={i} 
                  className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium
                  group-hover:bg-blue-100 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;