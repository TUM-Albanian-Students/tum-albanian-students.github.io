// Language Switcher for Jekyll Site
(function() {
    'use strict';
    
    const DEFAULT_LANG = 'en';
    const STORAGE_KEY = 'preferred-language';
    
    // Get language from localStorage or default to English
    function getCurrentLanguage() {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    }
    
    // Set language preference
    function setLanguage(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
        updatePageLanguage(lang);
    }
    
    // Update all language-specific content on the page
    function updatePageLanguage(lang) {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const langKey = `${lang}_text`;
            const translation = element.getAttribute(`data-${langKey}`);
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                    element.textContent = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update language selector
        const langSelect = document.getElementById('langSelect');
        if (langSelect) {
            langSelect.value = lang;
        }
    }
    
    
    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        const currentLang = getCurrentLanguage();
        updatePageLanguage(currentLang);
        
        // Set up language selector
        const langSelect = document.getElementById('langSelect');
        if (langSelect) {
            langSelect.value = currentLang;
            langSelect.addEventListener('change', function(e) {
                setLanguage(e.target.value);
            });
        }
    });
    
    // Export for use in other scripts
    window.LanguageSwitcher = {
        setLanguage: setLanguage,
        getCurrentLanguage: getCurrentLanguage
    };
})();

