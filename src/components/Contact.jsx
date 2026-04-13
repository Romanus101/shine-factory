import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Interior Cleaning", notes: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form", form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-content section-contact" aria-label="Contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <h2>Свяжитесь с нами</h2>
          <p>Забронировать услугу или задать вопрос — мы свяжемся с вами в течении одного рабочего дня.</p>
          <ul className="info-list">
            <li><strong>Адрес:</strong> ТУТ БУДЕТ АДРЕС</li>
            <li><strong>Телефон:</strong> ТУТ БУДЕТ НОМЕР</li>
            <li><strong>График работы:</strong> Пн-Вс 9:00–21:00</li>
            <li><strong>Email:</strong> ТУТ БУДЕТ ПОЧТА</li>
          </ul>
          <div className="contact-cta">
            <button className="btn" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>Посмотреть услуги</button>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <h3>Забронировать услугу</h3>

          <label>
  <span>Имя</span>
  <input
    name="name"
    id="name"
    autoComplete="name"
    value={form.name}
    onChange={onChange}
    required
  />
</label>

<label>
  <span>Номер</span>
  <input
    name="phone"
    id="phone"
    autoComplete="tel"
    value={form.phone}
    onChange={onChange}
    required
  />
</label>

<label>
  <span>Услуга</span>
  <select
    name="service"
    id="service"
    autoComplete="section-service service"
    value={form.service}
    onChange={onChange}
  >
    <option>Химическая чистка</option>
    <option>Полировка кузова</option>
    <option>Нанесение защитного слоя</option>
    <option>Другое</option>
  </select>
</label>

<label>
  <span>Комментарии</span>
  <textarea
    name="notes"
    id="notes"
    autoComplete="off"
    value={form.notes}
    onChange={onChange}
    rows="4"
  />
</label>


          <button className="btn" type="submit">Запросить услугу</button>
          {sent && <div className="sent-bubble">Запрос отправлен - мы скоро свяжемся с Вами</div>}
        </form>
      </div>
    </section>
  );
}
