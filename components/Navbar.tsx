import React, { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.team'), path: '/team' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top utility bar */}
      <div className="hidden md:flex justify-end items-center px-4 lg:px-8 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 gap-6 border-b border-gray-100 bg-gray-50/50">
        <a href="https://www.tum.de" target="_blank" rel="noreferrer" className="hover:text-albanian-red transition-colors">{t('nav.tumMainSite')}</a>
        <a href="#" className="hover:text-albanian-red transition-colors">{t('nav.studentUnion')}</a>
        <LanguageSwitcher />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center bg-gray-900 rounded-full text-white font-serif font-bold text-xl md:text-2xl group-hover:bg-albanian-red transition-colors duration-500 shadow-sm">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-1">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl md:text-2xl leading-none tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors">TUM Albanian</span>
              <span className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] text-gray-500 uppercase mt-1 group-hover:text-kosovar-blue transition-colors font-medium">Student Society</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-1 mr-4">
                {links.map((link) => (
                <Link
                    key={link.name}
                    to={link.path}
                    className={`group px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full hover:bg-gray-100 flex items-center gap-1 ${
                    isActive(link.path) 
                        ? 'text-albanian-red bg-gray-50' 
                        : 'text-gray-600'
                    }`}
                >
                    {link.name}
                    {/* Visual chevron to match the reference 'dropdown' aesthetic */}
                    <ChevronDown className={`w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity ${isActive(link.path) ? 'text-albanian-red opacity-100' : ''}`} />
                </Link>
                ))}
            </div>
            
            {/* Search Input - Matching the reference image style */}
            <div className="pl-4 ml-2 border-l border-gray-200 flex items-center">
                <div className="relative group">
                    <input
                        type="text"
                        placeholder={t('nav.search')}
                        className="pl-3 pr-8 py-1.5 w-32 focus:w-48 transition-all duration-300 bg-gray-50 border border-gray-200 rounded-full text-xs outline-none focus:border-albanian-red focus:ring-1 focus:ring-albanian-red placeholder:text-gray-400"
                    />
                    <Search className="w-3 h-3 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full left-0 animate-in slide-in-from-top-2 duration-200 shadow-lg z-50">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <div className="mb-4 px-3">
                 <div className="relative">
                    <input
                        type="text"
                        placeholder={t('nav.searchWebsite')}
                        className="w-full pl-3 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-sm text-sm outline-none focus:border-albanian-red"
                    />
                    <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
            </div>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-4 border-b border-gray-50 text-lg font-serif ${
                  isActive(link.path)
                    ? 'text-albanian-red pl-5 bg-gray-50'
                    : 'text-gray-900 hover:pl-5 hover:bg-gray-50'
                } transition-all duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};