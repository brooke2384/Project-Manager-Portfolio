
import { useEffect } from 'react';

/**
 * A hook to add and handle intersection observer animations
 * @param rootMargin Distance from viewport edge to trigger animation
 * @param threshold Percentage of element visibility to trigger animation
 */
export function useScrollAnimation(rootMargin = '-100px', threshold = 0.1) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold }
    );

    // Get all elements with section-transition class
    const sections = document.querySelectorAll('.section-transition');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Delayed animations for children elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element, index) => {
      const delay = index * 100;
      element.classList.add(`animate-delay-${delay}`);
      observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [rootMargin, threshold]);
}

export default useScrollAnimation;
