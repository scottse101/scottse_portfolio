import React from 'react';

const styles = `
  @keyframes gradient-x {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  @keyframes gradient-y {
    0%, 100% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
  }
  .animate-gradient-x {
    animation: gradient-x 10s ease infinite;
    background-size: 400% 400%;
  }
  .animate-gradient-y {
    animation: gradient-y 5s ease infinite;
    background-size: 400% 400%;
  }
`;

const HeroSection = ({ personInfo }) => {
  return (
    <>
      <style>{styles}</style>
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 p-[4px] relative">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 animate-gradient-x" />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-yellow-300 via-green-400 to-purple-500 mix-blend-overlay animate-gradient-y opacity-50" />
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 relative overflow-hidden rounded-[22px]">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48">
              <img
                src="/scott.jpg"
                alt={personInfo.navn}
                className="w-full h-full rounded-full object-cover border-4 border-white/50 shadow-xl ring-4 ring-white/10"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-3">{personInfo.navn}</h1>
              <p className="text-blue-100 text-xl mb-4">{personInfo.tittel}</p>
              <p className="text-blue-50 max-w-2xl leading-relaxed">{personInfo.omMeg}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;