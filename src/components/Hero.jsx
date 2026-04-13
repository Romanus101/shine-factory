import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero({ slides }) {
  const safeSlides = Array.isArray(slides) && slides.length
    ? slides
    : [{ image: "/images/clean1.jpg", text: "CAR DETAILS" }];

  const [index, setIndex] = useState(0);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight;
      const i = Math.floor(window.scrollY / h);
      if (i >= 0 && i < safeSlides.length) {
        setIndex(i);
      }

      // Проверяем, не зашли ли мы в Services или Contact
      const services = document.getElementById("services");
      const contact = document.getElementById("contact");

      let hide = false;
      if (services) {
        const rect = services.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) hide = true;
      }
      if (contact) {
        const rect = contact.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) hide = true;
      }
      setHeroVisible(!hide);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [safeSlides.length]);

  const current = safeSlides[Math.min(Math.max(0, index), safeSlides.length - 1)];

  return (
    <section id="hero" className="hero">
      {safeSlides.map((_, i) => (
  <div
    key={i}
    className="hero-section"
    style={{ height: i === safeSlides.length - 1 ? "200vh" : "100vh" }}
  />
))}


      <div className="hero-bg-layer">
        <AnimatePresence mode="wait">
          {heroVisible && (
            <motion.div
              key={current.image + index}
              className="hero-bg"
              style={{
                backgroundImage: `url(${current.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                inset: 0
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="hero-center">
        <AnimatePresence mode="wait">
          {heroVisible && (
            <motion.div
              key={current.text + index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h1>{current.text}</h1>
              <p className="hero-sub">
                {index === 0 && "Премиальная внутренняя и внешняя забота о машине"}
                {index === 1 && "Глубокая чистка, удаление царапин и потертостей, уборка автомобиля"}
                {index === 2 && "Профессиональная коррекция и защита внешнего красочного слоя"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {heroVisible && (
        <div className="hero-scroll-hint">
          <div className="mouse"><span /></div>
          <div className="text">Scroll</div>
        </div>
      )}
    </section>
  );
}
