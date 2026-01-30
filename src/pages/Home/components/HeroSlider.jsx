
import React, { useState, useEffect, useCallback } from 'react';
import HeroSlide from './HeroSlide';
import SliderControls from './SliderControls';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2000",
    title: "Clinical Precision Real Results",
    subtitle: "Experience the next generation of dermatological care. Science-backed formulas designed for high-definition clarity.",
    ctaText: "Explore Collection"
  },
  {
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=2000",
    title: "Bespoke Beauty Tailored Daily",
    subtitle: "Your skin is unique. Your routine should be too. Create a personalized assessment and unlock your skin's true potential.",
    ctaText: "Start Assessment"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[600px] md:h-[800px] overflow-hidden bg-slate-900">
      {slides.map((slide, index) => (
        <HeroSlide 
          key={index}
          {...slide}
          isActive={current === index}
          isPrev={current === (index + 1) % slides.length}
        />
      ))}
      
      <SliderControls 
        current={current} 
        total={slides.length} 
        onPrev={prevSlide}
        onNext={nextSlide}
        onGoTo={setCurrent}
      />
    </section>
  );
};

export default HeroSlider;
