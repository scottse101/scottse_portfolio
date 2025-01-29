import React from 'react';
import { GraduationCap } from 'lucide-react';

const EducationSection = ({ utdanning }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <GraduationCap className="text-white" size={32} />
        <h2 className="text-3xl font-bold text-white">Utdanning</h2>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {utdanning.map((edu, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
            <h3 className="font-bold text-gray-900 mb-2">{edu.skole}</h3>
            <p className="text-gray-700 font-medium mb-1">{edu.grad}</p>
            <p className="text-gray-600 mb-1">{edu.sted}</p>
            <p className="text-gray-500 text-sm">{edu.periode}</p>
            {edu.ekstra && (
              <>
                <p className="text-gray-700 italic mt-3">{edu.ekstra}</p>
                <p className="text-gray-500 text-sm">{edu.utveksling}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;