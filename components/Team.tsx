import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { loadTeamMembers, TeamMember } from '../utils/contentLoader';

export const Team: React.FC = () => {
  const { t } = useTranslation();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    loadTeamMembers().then(setTeamMembers);
  }, []);
  return (
    <section className="bg-gray-50 py-24 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
           <div className="lg:col-span-4">
              <h2 className="text-4xl font-serif font-medium text-gray-900 mb-6">{t('team.title')}</h2>
              <p className="text-gray-600 leading-relaxed">{t('team.description')}</p>
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-200 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-serif text-xl font-medium text-gray-900 group-hover:text-albanian-red transition-colors">{member.name}</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">{t(`team.roles.${member.role}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};