import { useState, useEffect } from "react";

type UseScrollToIdProps = {
  tag: string;
};

const useScrollToId = ({ tag }: UseScrollToIdProps) => {
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [lastObservedId, setLastObservedId] = useState<string | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -90% 0px",
      threshold: 0,
    };

    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentElementId = entry.target.id;

          // Check if the current element is different from the last observed element
          if (currentElementId !== lastObservedId) {
            setCurrentId(currentElementId);
            setLastObservedId(currentElementId);

            // Unobserve the current element to avoid unnecessary updates
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const targetElements = document.querySelectorAll(`${tag}[id]`);

    if (targetElements.length > 0) {
      targetElements.forEach((element) => {
        observer.observe(element);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [tag, lastObservedId]);

  return { currentId };
};

export default useScrollToId;

//example
/*
import React from 'react';
import useScrollToId from './useScrollToId';

const ScrollComponent = () => {
  const { currentId } = useScrollToId({ containerSelector: '.container', tag: 'h2' });

  return (
    <div className="container">
 
      <div>
        <h2 id="section1">Section 1</h2>
    
      </div>
      <div>
        <h2 id="section2">Section 2</h2>
 
      </div>
      <div>
        <h2 id="section3">Section 3</h2>
     
      </div>

      <div>
        <p>Currently Scrolled ID: {currentId}</p>
      </div>
    </div>
  );
};

export default ScrollComponent;

*/
