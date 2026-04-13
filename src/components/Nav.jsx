import React from "react";

export default function Nav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Детейлинг салон
        </div>
        <ul className="nav-links">
          <li onClick={() => scrollTo("hero")}>Наверх</li>
          <li onClick={() => scrollTo("services")}>Услуги</li>
          <li onClick={() => scrollTo("contact")}>Контакты</li>
        </ul>
        <button className="cta" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Забронировать
        </button>
      </div>
    </nav>
  );
}
