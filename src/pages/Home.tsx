import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { CatalogCta } from '../components/home/CatalogCta';
import { FaqSection } from '../components/home/FaqSection';

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const t = window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 50);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <CatalogCta />
      <FaqSection />
    </>);

}