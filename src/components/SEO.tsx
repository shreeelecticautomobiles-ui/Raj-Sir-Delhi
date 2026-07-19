import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schemaMarkup?: Record<string, any> | Record<string, any>[];
}

export default function SEO({
  title,
  description,
  keywords = 'Spoken English Classes Delhi, Spoken English Classes in Laxmi Nagar, English Speaking Classes Delhi, Best English Speaking Classes Delhi, English Speaking Course Delhi, German Language Classes Delhi, German Language Course Delhi, Chinese Language Classes Delhi, Chinese Language Course Delhi, English Classes Near Me, German Classes Near Me, Chinese Classes Near Me, Public Speaking Classes Delhi, Corporate English Training Delhi, Interview Preparation Classes Delhi, Online Spoken English Classes Delhi, Spoken English Classes for Hindi Medium Students, German A1 Classes Delhi, German A2 Classes Delhi, Chinese HSK Classes Delhi, Language Training Institute Delhi, Foreign Language Classes Delhi, Best Spoken English Institute Delhi',
  canonical,
  ogImage = 'https://i.ibb.co/wr0kKg1x/IMG-20260717-WA0011-1.jpg',
  ogType = 'website',
  schemaMarkup,
}: SEOProps) {
  const location = useLocation();
  const currentUrl = canonical || `https://www.rajsirdelhi.com${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to find or create a meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 3. Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'Raj Sir Delhi Spoken English Class');

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 6. JSON-LD Schema Markup
    // Remove existing schemas injected by this component to avoid duplication
    const existingSchemas = document.querySelectorAll('script[data-seo-schema]');
    existingSchemas.forEach((el) => el.remove());

    if (schemaMarkup) {
      const schemas = Array.isArray(schemaMarkup) ? schemaMarkup : [schemaMarkup];
      schemas.forEach((schema) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-schema', 'true');
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    // Cleanup function
    return () => {
      const schemasToClean = document.querySelectorAll('script[data-seo-schema]');
      schemasToClean.forEach((el) => el.remove());
    };
  }, [title, description, keywords, currentUrl, ogImage, ogType, schemaMarkup]);

  return null;
}
