import React from 'react';
import { Button } from './ui/Button';
import { useTranslation } from 'react-i18next';

interface ProjectItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  categoryKey: string;
}

const projects: ProjectItem[] = [
  {
    id: '1',
    titleKey: 'projects.items.mentorship.title',
    descriptionKey: 'projects.items.mentorship.description',
    categoryKey: 'projects.items.mentorship.category'
  },
  {
    id: '2',
    titleKey: 'projects.items.techSummit.title',
    descriptionKey: 'projects.items.techSummit.description',
    categoryKey: 'projects.items.techSummit.category'
  },
  {
    id: '3',
    titleKey: 'projects.items.language.title',
    descriptionKey: 'projects.items.language.description',
    categoryKey: 'projects.items.language.category'
  },
  {
    id: '4',
    titleKey: 'projects.items.charity.title',
    descriptionKey: 'projects.items.charity.description',
    categoryKey: 'projects.items.charity.category'
  }
];

export const DiscoverProjects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h2 className="text-4xl md:text-5xl font-serif font-medium mb-16 text-gray-900">{t('projects.title')}</h2>
      
      <div className="border-t border-gray-200">
        {projects.map((project) => (
          <div key={project.id} className="group border-b border-gray-200 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-gray-50 transition-colors px-4 -mx-4 cursor-default">
            <div className="md:col-span-3">
              <span className="inline-block py-1 px-2 border border-gray-200 rounded text-[10px] font-bold tracking-widest text-gray-500 uppercase group-hover:border-albanian-red group-hover:text-albanian-red transition-colors">
                {t(project.categoryKey)}
              </span>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-2xl font-serif font-medium text-gray-900 group-hover:text-kosovar-blue transition-colors">
                {t(project.titleKey)}
              </h3>
            </div>

            <div className="md:col-span-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(project.descriptionKey)}
              </p>
            </div>

            <div className="md:col-span-1 flex justify-end items-center mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <span className="text-lg leading-none mb-1">→</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Button size="md">{t('projects.viewArchive')}</Button>
      </div>
    </section>
  );
};