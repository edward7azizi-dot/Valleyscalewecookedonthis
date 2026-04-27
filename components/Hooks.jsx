// Shared hooks — exported to window

const { useEffect, useRef, useState, useCallback } = React;

function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function useStaggerAnimation(count, threshold = 0.12) {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const children = container.querySelectorAll('[data-stagger]');
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 110);
          });
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(container);
    return () => obs.disconnect();
  }, [count]);
  return containerRef;
}

Object.assign(window, { useScrollAnimation, useStaggerAnimation });
