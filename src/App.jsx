import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const slides = [
    {
  image: `${import.meta.env.BASE_URL}images/clean1.webp`,
  kicker: "Интерьер",
  title: "Химчистка салона",
  text: "Глубокая очистка пластика, ткани, кожи, потолка, ковролина и стекол."
},
{
  image: `${import.meta.env.BASE_URL}images/polish1.webp`,
  kicker: "Экстерьер",
  title: "Полировка кузова",
  text: "Коррекция лака в несколько этапов, восстановление глубины цвета и блеска."
},
{
  image: `${import.meta.env.BASE_URL}images/shine1.webp`,
  kicker: "Защита",
  title: "Керамика и финиш",
  text: "Защитные составы, которые помогают дольше сохранить результат детейлинга."
}
  ];

  return (
    <div className="App">
      <Nav />
      <Hero slides={slides} />
      <main>
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
