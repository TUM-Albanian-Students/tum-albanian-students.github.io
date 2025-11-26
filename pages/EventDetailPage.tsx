import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { loadEvents, Event } from '../utils/contentLoader';
import { Calendar, MapPin, Users, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const EventDetailPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const { t } = useTranslation();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents().then(events => {
      const foundEvent = events.find(e => e.id === eventId);
      setEvent(foundEvent || null);
      setLoading(false);
    });
  }, [eventId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-serif mb-4">Event Not Found</h1>
        <Link to="/#events">
          <Button variant="outline">Back to Events</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={event.image}
          alt={t(`events.${event.title}`)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link to="/#events" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest">Back to Events</span>
          </Link>

          {event.date && (
            <span className="inline-block px-3 py-1 bg-albanian-red text-white text-[10px] font-bold tracking-widest uppercase mb-4">
              {t(`events.${event.date}`)}
            </span>
          )}
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white mb-4">
            {t(`events.${event.title}`)}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-medium mb-6 text-gray-900">
                {t(`events.details.${event.id}.subtitle`)}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t(`events.details.${event.id}.description`)}
              </p>

              <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900">
                {t('events.details.whatToExpect')}
              </h3>
              <div className="space-y-4 mb-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-albanian-red/10 flex items-center justify-center">
                      <span className="text-albanian-red font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-gray-600 pt-1">
                      {t(`events.details.${event.id}.highlights.${i}`)}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-serif font-medium mb-4 text-gray-900">
                {t('events.details.whoShouldAttend')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t(`events.details.${event.id}.audience`)}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Event Info Card */}
              <div className="bg-white border border-gray-200 rounded-sm p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                <h3 className="font-serif text-xl font-medium mb-6 text-gray-900">Event Details</h3>

                <div className="space-y-4">
                  {event.date && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-albanian-red mt-0.5" />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Date & Time</p>
                        <p className="text-gray-900 font-medium">{t(`events.${event.date}`)}</p>
                        <p className="text-sm text-gray-600">{t(`events.details.${event.id}.time`)}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-albanian-red mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Location</p>
                      <p className="text-gray-900 font-medium">{t(`events.details.${event.id}.location`)}</p>
                      <p className="text-sm text-gray-600">{t(`events.details.${event.id}.address`)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-albanian-red mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Capacity</p>
                      <p className="text-gray-900 font-medium">{t(`events.details.${event.id}.capacity`)}</p>
                    </div>
                  </div>
                </div>

                {event.status === 'upcoming' && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button className="w-full">{t('events.details.registerNow')}</Button>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      {t('events.details.freeForMembers')}
                    </p>
                  </div>
                )}

                {event.status === 'past' && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button variant="outline" className="w-full">{t('events.details.viewGallery')}</Button>
                  </div>
                )}
              </div>

              {/* Share Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-6">
                <h4 className="font-medium text-gray-900 mb-3">Share Event</h4>
                <p className="text-sm text-gray-600 mb-4">Invite your friends to join us!</p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-3 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors text-sm">
                    Facebook
                  </button>
                  <button className="flex-1 py-2 px-3 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors text-sm">
                    Instagram
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
