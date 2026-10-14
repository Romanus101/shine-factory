import React from "react";

export default function Nav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav" aria-label="Основная навигация">
      <div className="nav-inner">
        <button className="logo" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Shine Factory
        </button>
        <ul className="nav-links">
          <li><button type="button" onClick={() => scrollTo("hero")}>Наверх</button></li>
          <li><button type="button" onClick={() => scrollTo("services")}>Услуги</button></li>
          <li><button type="button" onClick={() => scrollTo("contact")}>Контакты</button></li>
        </ul>
        <button className="cta" type="button" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Записаться
        </button>
      </div>
    </nav>
  );
}
