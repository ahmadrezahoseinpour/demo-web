import { useEffect, useRef, useState } from 'react';

export default function useScrollReveal(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
}

export function useScrollRevealMultiple(count, options = {}) {
  const refs = useRef(Array(count).fill(null).map(() => null));
  const [visible, setVisible] = useState(Array(count).fill(false));

  useEffect(() => {
    const observers = refs.current.map((_, index) => {
      const element = refs.current[index];
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(prev => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            if (options.triggerOnce !== false) {
              observer.unobserve(element);
            }
          } else if (options.triggerOnce === false) {
            setVisible(prev => {
              const next = [...prev];
              next[index] = false;
              return next;
            });
          }
        },
        { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px 0px -50px 0px' }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer && observer.disconnect());
    };
  }, [count, options.threshold, options.rootMargin, options.triggerOnce]);

  const setRef = (index) => (el) => {
    refs.current[index] = el;
  };

  return [setRef, visible];
}