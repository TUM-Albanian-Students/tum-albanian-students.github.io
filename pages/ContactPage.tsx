import React from 'react';
import { useTranslation } from 'react-i18next';

export const ContactPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="max-w-3xl mx-auto px-4 py-24 text-center animate-in fade-in duration-700">
            <h1 className="text-5xl font-serif font-medium mb-8 text-gray-900">{t('contact.title')}</h1>
            <p className="text-xl text-gray-600 mb-12 font-serif leading-relaxed">{t('contact.subtitle')}</p>

            <div className="inline-block w-full bg-white border border-gray-200 p-8 md:p-12 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] text-left">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-4">
                        <h3 className="font-serif text-lg font-medium text-gray-900 border-b border-gray-100 pb-2">{t('contact.info')}</h3>
                        <p className="flex flex-col">
                            <span className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">{t('contact.email')}</span>
                            <a href="mailto:tumalbaniansociety@gmail.com" className="text-albanian-red hover:underline decoration-albanian-red/30 underline-offset-4 font-medium">tumalbaniansociety@gmail.com</a>
                        </p>
                        <p className="flex flex-col">
                            <span className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">Instagram</span>
                            <a href="https://www.instagram.com/albanian_students_tum/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-kosovar-blue transition-colors">@albanian_students_tum</a>
                        </p>
                        <p className="flex flex-col">
                            <span className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">LinkedIn</span>
                            <a href="https://www.linkedin.com/company/tum-albanian-student-society/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-kosovar-blue transition-colors">TUM Albanian Student Society</a>
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-serif text-lg font-medium text-gray-900 border-b border-gray-100 pb-2">{t('contact.location')}</h3>
                        <p className="flex flex-col">
                            <span className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">{t('contact.university')}</span>
                            <span className="text-gray-600">{t('contact.universityName')}</span>
                        </p>
                        <p className="flex flex-col">
                            <span className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">{t('contact.office')}</span>
                            <span className="text-gray-600">Arcisstraße 21, 80333 München</span>
                        </p>
                    </div>
                 </div>

                 <div className="pt-8 border-t border-gray-100">
                     <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{t('contact.name')}</label>
                            <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-albanian-red focus:outline-none transition-colors bg-transparent" placeholder={t('contact.namePlaceholder')} />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{t('contact.message')}</label>
                            <textarea className="w-full border-b border-gray-300 py-2 focus:border-albanian-red focus:outline-none transition-colors bg-transparent resize-none" rows={3} placeholder={t('contact.messagePlaceholder')}></textarea>
                        </div>
                        <div className="pt-4">
                            <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-albanian-red transition-colors font-medium text-sm tracking-wide">{t('contact.sendMessage')}</button>
                        </div>
                     </form>
                 </div>
            </div>
        </div>
    );
};