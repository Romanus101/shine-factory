import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero({ slides }) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hero">
      {/* Центральный текст */}
      <div className="hero-center">
        <h1>Star Detailing</h1>
        {slides.map((slide, index) => {
          const opacity = useTransform(
            scrollYProgress,
            [index / slides.length, (index + 1) / slides.length],
            [1, 0]
          );
          return (
            <motion.p key={index} style={{ opacity }}>
              {slide.text}
            </motion.p>
          );
        })}
      </div>

      {/* Фоновые картинки */}
      {slides.map((slide, index) => {
        const opacity = useTransform(
          scrollYProgress,
          [index / slides.length, (index + 1) / slides.length],
          [1, 0]
        );
        return (
          <motion.div
            key={index}
            className="hero-bg"
            style={{ backgroundImage: `url(${slide.image})`, opacity }}
          />
        );
      })}
    </div>
  );
}

export default Hero;
