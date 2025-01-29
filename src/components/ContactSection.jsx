import React from 'react';
import { Github, Linkedin, Mail, Phone, MessageSquare } from 'lucide-react';

const ContactSection = ({ kontakt }) => {
  const contactItems = [
    { icon: Mail, text: 'E-post', href: `mailto:${kontakt.epost}` },
    { icon: Phone, text: 'Telefon', href: `tel:${kontakt.telefon}` },
    { icon: Github, text: 'GitHub', href: `https://${kontakt.github}` },
    { icon: Linkedin, text: 'LinkedIn', href: `https://${kontakt.linkedin}` }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <MessageSquare className="text-gray-800" size={32} />
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">La oss snakke!</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {contactItems.map((item, index) => (
          <a key={index} 
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 
            hover:border-blue-500 hover:shadow-lg transition-all duration-300 group">
            <item.icon className="text-gray-400 group-hover:text-blue-500 transition-colors" size={24} />
            <span className="text-gray-600 group-hover:text-blue-600 font-medium transition-colors">
              {item.text}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;