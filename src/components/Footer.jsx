import React from "react";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Детейлинг салон</div>
        <div className="socials">
          <a href="#" aria-label="Instagram">Инста</a>
          <a href="#" aria-label="Facebook">Авито</a>
          <a href="#" aria-label="Telegram">Тг</a>
        </div>
      </div>
    </footer>
  );
}
