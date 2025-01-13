'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import { cn } from '@/lib/utils';

interface CarouselProps {
  items: {
    id: string;
    image: string;
    title: string;
    description?: string;
    link?: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}

export default function Carousel({
  items,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const previousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, nextSlide, isHovered]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 轮播内容 */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full flex-shrink-0 relative aspect-[21/9]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
            {(item.title || item.description) && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                {item.description && (
                  <p className="text-sm">{item.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 控制按钮 */}
      {showControls && (isHovered || !autoPlay) && (
        <>
          <button
            onClick={previousSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRightIcon size={24} />
          </button>
        </>
      )}

      {/* 指示器 */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'bg-white w-4'
                  : 'bg-white/60 hover:bg-white/80'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
} 