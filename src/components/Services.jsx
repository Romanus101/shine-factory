import React from "react";
import { motion } from "framer-motion";

const items = [
  { 
    title: "Тариф Базовый", 
    desc: [
      "— Очистка пластика в салоне машины",
      "— Очистка сидений машины",
      "— Очистка потолка машины",
      "— Очистка ковролина и ковриков",
      "— Очистка стекол"
    ],
    icon: "Химическая чистка салона" 
  },
  { 
    title: "Тариф Плюс", 
    desc: [
      "— Очистка пластика в салоне машины",
      "— Очистка сидений машины",
      "— Очистка потолка машины",
      "— Очистка ковролина и ковриков",
      "— Очистка стекол",
      "— Снятие сидений и полная их очистка"
    ],
    icon: "Химическая чистка салона" 
  },
  { 
    title: "Тариф Базовый", 
    desc: "Внешняя полировка металлического корпуса машины с применением пасты в 1-2 этапа", 
    icon: "Полировка кузова" 
  },
  { 
    title: "Тариф Плюс", 
    desc: "Более глубокая полировка металлического корпуса машины с применением меховой зачистки и паст двух вида в 3-4 этапа", 
    icon: "Полировка кузова" 
  },
  { 
    title: "Тариф Премиум", 
    desc: "Глубокая полировка металлического корпуса машины методом зашкуривания в 4-5 этапов и дальнейшим применением нескольких видов паст в 2-3 этапа", 
    icon: "Полировка кузова" 
  },
  { 
    title: "Тариф Базовый", 
    desc: "Глубокая полировка фар методом зашкуривания в 3-4 этапа и нанесением пасты", 
    icon: "Полировка фар" 
  },
  { 
    title: "Дополнительная услуга", 
    desc: "После полировки мы можем нанести в несколько слоев керамику для сохранения результатов полировки надолго", 
    icon: "Нанесение керамики" 
  },
  { 
    title: "Мы также предоставляем услуги:", 
    desc: "—Удаление неприятных запахов в машине —Ещё что то", 
    icon: "Дополнительные услуги" 
  },
];

export default function Services() {
  return (
    <section id="services" className="section-content">
      <div className="container">
        <h2 className="section-title">Наши услуги</h2>
        <p className="section-lead">Индивидуальный подход для каждой машины и бюджета.</p>

        <div className="services-grid">
          {items.map((it, i) => (
            <motion.div
              className="service-card"
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.48 }}
            >
              <div className="service-icon">{it.icon}</div>
              <h3>{it.title}</h3>

              <div className="service-desc">
                {Array.isArray(it.desc)
                  ? it.desc.map((d, idx) => (
                      <div key={idx}>{d}</div>
                    ))
                  : it.desc
                      .split("—")
                      .map((d, idx) =>
                        d.trim() ? (
                          <div key={idx}>- {d.trim()}</div>
                        ) : null
                      )}
              </div>

              <button
                className="btn small"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Заказать услугу
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
