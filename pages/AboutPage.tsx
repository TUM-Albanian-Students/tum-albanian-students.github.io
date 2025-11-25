import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-24 animate-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12 text-center">
         <span className="text-albanian-red text-xs font-bold uppercase tracking-[0.2em] mb-4 block">{t('about.ourStory')}</span>
         <h1 className="text-6xl font-serif font-medium text-gray-900 mb-8">{t('about.title')}</h1>
         <div className="w-px h-16 bg-gray-300 mx-auto"></div>
      </div>

      <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium text-gray-600 mx-auto">
        <p className="lead text-2xl text-gray-900 font-serif leading-relaxed mb-12 text-center">
          {t('about.lead')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
             <div className="order-2 md:order-1">
                 <p className="mb-6 leading-loose" dangerouslySetInnerHTML={{ __html: t('about.mission') }} />
                <p className="leading-loose">
                  {t('about.vision')}
                </p>
             </div>
             <div className="order-1 md:order-2">
                 <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" alt="Students studying" className="w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
             </div>
        </div>

        <div className="my-16 p-12 bg-gray-50 border-l-4 border-albanian-red relative">
          <span className="absolute top-6 left-6 text-6xl text-gray-200 font-serif">"</span>
          <p className="text-xl italic text-gray-800 relative z-10 text-center font-serif">
            {t('about.quote')}
          </p>
          <p className="text-center text-xs uppercase tracking-widest text-gray-500 mt-4">— {t('about.quoteAuthor')}</p>
        </div>
      </div>
    </div>
  );
};