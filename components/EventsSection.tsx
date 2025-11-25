import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { useTranslation } from 'react-i18next';
import { loadEvents, Event } from '../utils/contentLoader';

export const EventsSection: React.FC = () => {
  const { t } = useTranslation();
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    loadEvents().then(setEvents);
  }, []);

  const featuredEvent = events.find(e => e.featured);
  const regularEvents = events.filter(e => !e.featured);

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-gray-200">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-gray-900">{t('events.title')}</h2>
        <div className="h-1 w-24 bg-albanian-red"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Sidebar Description */}
        <div className="lg:col-span-3 space-y-8">
          <p className="text-sm md:text-base text-gray-600 leading-loose font-sans">
            {t('events.description')}
          </p>

          <div className="p-6 bg-gray-50 border-l-2 border-kosovar-blue">
             <p className="text-sm text-gray-500 italic font-serif">
                "{t('events.quote')}"
             </p>
          </div>

          <div className="pt-4 hidden lg:block">
            <Button variant="ghost">{t('events.viewCalendar')}</Button>
          </div>
        </div>

        {/* Right Content Grid */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">

          {/* Featured Event - Spans 2 cols */}
          {featuredEvent && (
            <div className="md:col-span-2 group cursor-pointer block">
              <div className="overflow-hidden rounded-sm mb-4">
                <img
                  src={featuredEvent.image}
                  alt={t(`events.${featuredEvent.title}`)}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 border-b border-gray-100 pb-6">
                <div>
                  {featuredEvent.date && (
                    <span className="text-albanian-red text-[10px] font-bold tracking-widest uppercase mb-1 block">
                      {t(`events.${featuredEvent.date}`)}
                    </span>
                  )}
                  <h3 className="text-2xl font-serif font-medium text-gray-900 group-hover:text-albanian-red transition-colors">
                    {t(`events.${featuredEvent.title}`)}
                  </h3>
                </div>
                <div className="mt-4 sm:mt-0">
                  <Button variant="outline" size="sm">{t(`events.${featuredEvent.buttonText}`)}</Button>
                </div>
              </div>
            </div>
          )}

          {/* Regular Events */}
          {regularEvents.map((event) => (
            <div key={event.id} className="group cursor-pointer block">
              <div className="overflow-hidden rounded-sm mb-4 relative">
                <img
                  src={event.image}
                  alt={t(`events.${event.title}`)}
                  className={`w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-105 ${
                    event.status === 'past' ? 'grayscale group-hover:grayscale-0' : ''
                  }`}
                />
                {event.status === 'past' && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-900">{t('events.past')}</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-xl font-serif font-medium text-gray-900 group-hover:text-kosovar-blue transition-colors">
                    {t(`events.${event.title}`)}
                  </h3>
                </div>
                <Button variant="outline" size="sm">{t(`events.${event.buttonText}`)}</Button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};