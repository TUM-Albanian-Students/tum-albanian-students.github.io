import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { loadProjects, Project } from '../utils/contentLoader';
import { ArrowLeft, Target, Users, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { t } = useTranslation();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects().then(projects => {
      const foundProject = projects.find(p => p.id === projectId);
      setProject(foundProject || null);
      setLoading(false);
    });
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
        <Link to="/#projects">
          <Button variant="outline">Back to Projects</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest">Back to Projects</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 border border-albanian-red rounded text-[10px] font-bold tracking-widest text-albanian-red uppercase mb-6">
                {t(`projects.items.${project.category}.category`)}
              </span>
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-gray-900 mb-6">
                {t(`projects.items.${project.title}.title`)}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t(`projects.items.${project.description}.description`)}
              </p>
              <div className="flex gap-4">
                <Button>{t('projects.details.getInvolved')}</Button>
                <Button variant="outline">{t('projects.details.learnMore')}</Button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-sm overflow-hidden bg-gray-100">
              <img
                src={t(`projects.details.${project.id}.image`)}
                alt={t(`projects.items.${project.title}.title`)}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Overview */}
            <section className="mb-16">
              <h2 className="text-3xl font-serif font-medium mb-6 text-gray-900">
                {t('projects.details.overview')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t(`projects.details.${project.id}.longDescription`)}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t(`projects.details.${project.id}.impact`)}
              </p>
            </section>

            {/* Objectives */}
            <section className="mb-16">
              <h2 className="text-3xl font-serif font-medium mb-6 text-gray-900">
                {t('projects.details.objectives')}
              </h2>
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-sm border border-gray-100">
                    <Target className="w-6 h-6 text-albanian-red flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {t(`projects.details.${project.id}.objectives.${i}.title`)}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t(`projects.details.${project.id}.objectives.${i}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-16">
              <h2 className="text-3xl font-serif font-medium mb-6 text-gray-900">
                {t('projects.details.howItWorks')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-kosovar-blue text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                      {i + 1}
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {t(`projects.details.${project.id}.steps.${i}.title`)}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t(`projects.details.${project.id}.steps.${i}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact & Results */}
            <section>
              <h2 className="text-3xl font-serif font-medium mb-6 text-gray-900">
                {t('projects.details.impact')}
              </h2>
              <div className="bg-gradient-to-br from-albanian-red/5 to-kosovar-blue/5 border border-gray-200 rounded-sm p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-albanian-red mb-2">
                      {t(`projects.details.${project.id}.stats.participants`)}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-widest">Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-kosovar-blue mb-2">
                      {t(`projects.details.${project.id}.stats.events`)}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-widest">Events</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-kosovar-gold mb-2">
                      {t(`projects.details.${project.id}.stats.hours`)}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-widest">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-gray-900 mb-2">
                      {t(`projects.details.${project.id}.stats.satisfaction`)}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-widest">Satisfaction</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Project Info Card */}
              <div className="bg-white border border-gray-200 rounded-sm p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                <h3 className="font-serif text-xl font-medium mb-6 text-gray-900">Project Info</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-albanian-red mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Timeline</p>
                      <p className="text-gray-900 font-medium">{t(`projects.details.${project.id}.timeline`)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-albanian-red mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Team Size</p>
                      <p className="text-gray-900 font-medium">{t(`projects.details.${project.id}.teamSize`)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-albanian-red mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Status</p>
                      <p className="text-gray-900 font-medium">{t(`projects.details.${project.id}.status`)}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Button className="w-full">{t('projects.details.joinProject')}</Button>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    {t('projects.details.openToAll')}
                  </p>
                </div>
              </div>

              {/* Coordinator Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-6">
                <h4 className="font-medium text-gray-900 mb-3">Project Coordinator</h4>
                <p className="text-sm text-gray-600 mb-4">{t(`projects.details.${project.id}.coordinator`)}</p>
                <Button variant="outline" size="sm" className="w-full">Contact Coordinator</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            {t('projects.details.interestedTitle')}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('projects.details.interestedDescription')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
              {t('projects.details.volunteer')}
            </Button>
            <Button className="bg-albanian-red hover:bg-albanian-red/90">
              {t('projects.details.contactUs')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
