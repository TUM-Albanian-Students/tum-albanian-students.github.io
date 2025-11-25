import React from 'react';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-6xl md:text-8xl font-medium tracking-tight text-gray-900 mb-6 leading-[0.9]">
              {t('hero.title')} <br/>
              <span className="text-gray-400">{t('hero.subtitle')}</span>
            </h1>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <div className="border-l border-kosovar-gold pl-8 py-1 lg:max-w-xs">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans">
                {t('hero.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-sm group">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
            alt="TUM Campus Architecture" 
            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row justify-between items-end">
             <div className="max-w-xl mb-6 md:mb-0">
                <span className="inline-block px-3 py-1 bg-albanian-red text-white text-[10px] font-bold tracking-widest uppercase mb-4">{t('hero.established')}</span>
                <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
                  {t('hero.tagline')}
                </h2>
             </div>

             <div className="hidden md:block">
               <span className="text-white/60 text-xs uppercase tracking-widest">{t('hero.scrollDiscover')}</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};