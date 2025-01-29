import React from 'react';
import { Award } from 'lucide-react';

const CertificationsSection = ({ sertifiseringer }) => {
  return (
    <div className="grid gap-8">
      <div className="flex items-center gap-3">
        <Award className="text-white" size={32} />
        <h2 className="text-3xl font-bold text-white">Sertifiseringer</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {sertifiseringer.map((sert, index) => (
          <a 
            href={sert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index} 
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 
            border border-gray-200 hover:border-blue-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-32 h-32">
                <img
                  src="/gcp-cert.png"
                  alt={sert.navn}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{sert.navn}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-blue-600 font-semibold">{sert.utsteder}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{sert.år}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{sert.beskrivelse}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;