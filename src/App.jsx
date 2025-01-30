import React, { useState } from 'react';
import { personInfo } from './data/personInfo';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import { Analytics } from "@vercel/analytics/react"

const Portfolio = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <HeroSection personInfo={personInfo} />
        
        <div className="grid md:grid-cols-[350px,1fr] gap-8">
          <EducationSection utdanning={personInfo.utdanning} />
          <ProjectsSection 
            prosjekter={personInfo.prosjekter} 
            onVideoClick={setFullscreenVideo} 
          />
        </div>

        <CertificationsSection sertifiseringer={personInfo.sertifiseringer} />
        <ContactSection kontakt={personInfo.kontakt} />
      </div>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setFullscreenVideo(null);
            }
          }}
        >
          <div 
            className="w-full max-w-6xl aspect-video"
            onClick={(e) => e.stopPropagation()} 
          >
            <video 
              className="w-full h-full"
              autoPlay 
              controls 
              src={fullscreenVideo}
              onClick={(e) => e.stopPropagation()} 
            >
              <source src={fullscreenVideo} type="video/quicktime" />
              Din nettleser støtter ikke video-elementet.
            </video>
          </div>
        </div>
      )}
    <Analytics /> 
    </div>
  );
};

export default Portfolio;