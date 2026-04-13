import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const slides = [
    { image: "/images/clean1.jpg", text: "ДЕТЕЙЛИНГ МАШИНЫ" },
    { image: "/images/polish1.jpg", text: "ХИМИЧЕСКАЯ ЧИСТКА" },
    { image: "/images/shine1.jpg", text: "ПОЛИРОВКА КУЗОВА" }
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
