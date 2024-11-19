import { useEffect, useRef, useState } from 'react';

import carouselCssUrl from '../styles/carousel.css?url';

export const links = [{ rel: 'stylesheet', href: carouselCssUrl }];

type CarouselProps = {
  items: {
    image: string;
    title: string;
    subtitle: string;
  }[];
  interval?: number;
  repeatCount?: number;
};

export const Carousel = ({
  items,
  interval = 3000,
  repeatCount = 3,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [isLastFullyVisible, setIsLastFullyVisible] = useState(false);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const lastImageRef = useRef<HTMLDivElement | null>(null);

  const repeatedItems = Array.from({ length: repeatCount }, () => items).flat();

  useEffect(() => {
    if (!carouselRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsCarouselVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(carouselRef.current);

    return () => observer.disconnect();
  }, [isCarouselVisible]);

  useEffect(() => {
    if (!lastImageRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsLastFullyVisible(
            entry.isIntersecting && entry.intersectionRatio === 1
          );
        });
      },
      {
        threshold: 1.0,
      }
    );
    observer.observe(lastImageRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isCarouselVisible) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (isLastFullyVisible) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval, repeatedItems.length, isLastFullyVisible, isCarouselVisible]);

  return (
    <div className="carousel" ref={carouselRef}>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 228}px)` }}
      >
        {repeatedItems.map(({ image, title, subtitle }, index) => (
          <div
            className="carousel-item"
            key={index}
            ref={index === repeatedItems.length - 1 ? lastImageRef : null}
          >
            <img src={image} width={220} alt="" />
            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
