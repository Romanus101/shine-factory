import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    category: "Химчистка салона",
    title: "Базовый",
    desc: [
      "Очистка пластика",
      "Очистка сидений",
      "Потолок, ковролин и коврики",
      "Финишная очистка стекол"
    ],
    result: "Для регулярного ухода"
  },
  {
    category: "Химчистка салона",
    title: "Плюс",
    desc: [
      "Все из базового тарифа",
      "Демонтаж сидений при необходимости",
      "Глубокая обработка труднодоступных зон",
      "Сушка и контроль результата"
    ],
    result: "Для сильно загрязненного салона"
  },
  {
    category: "Полировка кузова",
    title: "Базовый",
    desc: [
      "Легкая абразивная коррекция",
      "1-2 этапа полировки",
      "Восстановление блеска",
      "Подготовка к защите"
    ],
    result: "Для освежения внешнего вида"
  },
  {
    category: "Полировка кузова",
    title: "Плюс",
    desc: [
      "3-4 этапа коррекции",
      "Работа с заметными рисками",
      "Подбор кругов и паст под лак",
      "Финишная доводка"
    ],
    result: "Для выраженных следов эксплуатации"
  },
  {
    category: "Полировка кузова",
    title: "Премиум",
    desc: [
      "Глубокая многоэтапная коррекция",
      "Локальное выравнивание дефектов",
      "Максимальная глубина цвета",
      "Подготовка под керамику"
    ],
    result: "Для требовательной реставрации"
  },
  {
    category: "Оптика",
    title: "Полировка фар",
    desc: [
      "Шлифовка в 3-4 этапа",
      "Полировка прозрачности",
      "Удаление помутнения",
      "Финишная защита"
    ],
    result: "Для света и внешнего вида"
  },
  {
    category: "Защита",
    title: "Керамика",
    desc: [
      "Нанесение защитного состава",
      "Гидрофобный эффект",
      "Защита результата полировки",
      "Упрощение мойки"
    ],
    result: "Для долгого блеска"
  },
  {
    category: "Дополнительно",
    title: "Комплекс работ",
    desc: [
      "Удаление неприятных запахов",
      "Локальная чистка элементов",
      "Консультация по уходу",
      "Индивидуальная программа"
    ],
    result: "Для нестандартных задач"
  },
];

export default function Services() {
  return (
    <section id="services" className="section-content">
      <div className="container">
        <p className="eyebrow">Услуги</p>
        <h2 className="section-title">Наши услуги</h2>
        <p className="section-lead">
          Сначала смотрим состояние машины, потом честно предлагаем нужный объем работ:
          от быстрой чистки до полной полировки и защиты кузова.
        </p>

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
              <div className="service-category">{it.category}</div>
              <h3>{it.title}</h3>
              <p className="service-result">{it.result}</p>
              <ul className="service-desc">
                {it.desc.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>

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
