import React from 'react';
import { Mail, Instagram, Linkedin, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 pr-12">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-serif font-bold text-xl">T</div>
               <span className="font-serif font-bold text-xl">{t('hero.title')}<br/>{t('hero.subtitle')}</span>
            </div>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-md">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <a href="mailto:info@tum-albanian.de" className="flex items-center gap-3 text-gray-600 hover:text-albanian-red transition-colors group">
                <span className="text-sm border-b border-transparent group-hover:border-albanian-red pb-0.5 transition-all">info@tum-albanian.de</span>
              </a>
              <div className="flex items-start gap-3 text-gray-600">
                <span className="text-sm leading-relaxed">
                  Arcisstraße 21<br/>
                  80333 München<br/>
                  Germany
                </span>
              </div>
            </div>
          </div>

          <div>
             <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">{t('footer.connect')}</h4>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-albanian-red hover:text-white hover:border-albanian-red transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-kosovar-blue hover:text-white hover:border-kosovar-blue transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 transition-colors">{t('footer.imprint')}</a>
            <a href="#" className="hover:text-gray-900 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-gray-900 transition-colors">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};