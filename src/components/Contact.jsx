import React from "react";

const TELEGRAM_BOT_URL = "https://t.me/YOUR_BOT_USERNAME";

export default function Contact() {
  return (
<section
  id="contact"
  className="section-content section-contact"
  aria-label="Контакты"
>
  <div className="container contact-grid">
    <div className="contact-info">
      <p className="eyebrow">Контакты</p>

      <h2>Подберём уход под состояние автомобиля</h2>

      <p>
        Расскажите, что хотите привести в порядок: салон,
        кузов, фары или всё сразу. Подскажем, какие работы
        подойдут вашему автомобилю и сколько они будут стоить.
      </p>

      <ul className="info-list">
        <li>
          <strong>Адрес</strong>
          <a
            className="contact-link"
            href="https://yandex.ru/maps/?text=Мытищи%2C%20Фабричная%20улица%2C%2017Г%2F109"
            target="_blank"
            rel="noopener noreferrer"
          >
            Мытищи, Фабричная улица, 17Г/109
          </a>
        </li>

        <li>
          <strong>График работы</strong>
          <span>Ежедневно с 9:00 до 21:00</span>
        </li>

        <li>
          <strong>Телефон</strong>
          <a
            className="contact-link"
            href="tel:+79169892214"
          >
            +7 916 989-22-14
          </a>
        </li>

        <li>
          <strong>Электронная почта</strong>
          <a
            className="contact-link"
            href="mailto:shine-factory@mail.ru"
          >
            shine-factory@mail.ru
          </a>
        </li>
      </ul>
    </div>

    <div className="contact-form contact-booking">
      <h3>Обсудим ваш автомобиль?</h3>

      <p>
        Позвоните нам — ответим на вопросы, поможем выбрать
        подходящие услуги и сориентируем по стоимости работ.
      </p>

      <a
        className="btn small"
        href="tel:+79169892214"
      >
        Позвонить и обсудить детали
      </a>

      <p className="contact-booking-note">
        Неудобно звонить? Напишите нам на почту:
        <br />
        <a href="mailto:shine-factory@mail.ru">
          shine-factory@mail.ru
        </a>
      </p>

    </div>
  </div>
</section>
  );
}