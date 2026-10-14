import React from "react";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Подвал сайта">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Shine Factory</div>
        <div className="socials">
          <a href="#contact">Запись</a>
          <a href="#services">Услуги</a>
          <a href="#hero">Наверх</a>
        </div>
      </div>
    </footer>
  );
}
