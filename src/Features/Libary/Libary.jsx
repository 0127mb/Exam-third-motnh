import React, { useState } from "react";
import "./index.css";
import "./App.css";
import Header from "../main/components/Header";
import img from "./assets/Stack.png";
import Section from "./components/Section";
import Banner from "./components/Banner";
import Filter from "./components/Filter";
import Card2 from "./component/Card2";
import Card3 from "./component/Card3";
import Card4 from "./component/Card4";
import Card from "./component/Card";
import Card5 from "./component/Card5";
import Advert from "./components/Advert";
import Footer from "./components/Footer";
import nothingfound from "./assets/nothingfound.png";
import data from "./component/Data";
export default function Libary() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCards = data.filter(
    (card) =>
      card.name
        .trim()
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase()) ||
      card.valueoficons2
        .trim()
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase()) ||
      card.id.toString().trim().includes(searchQuery)
  );
  return (
    <>
      <Header></Header>
      <Section label={img}></Section>
      <Banner></Banner>
      <Filter></Filter>
      <main>
        <div className="input">
          🔍
          <input
            type="search"
            placeholder="Izlash"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {filteredCards.length > 0 ? (
          <>
            {filteredCards.map((card) => {
              if (card.id === 1) return <Card key={card.id} card={card} />;
              if (card.id === 2) return <Card2 key={card.id} card={card} />;
              if (card.id === 3) return <Card3 key={card.id} card={card} />;
              if (card.id === 4) return <Card4 key={card.id} card={card} />;
              if (card.id === 5) return <Card5 key={card.id} card={card} />;
            })}
          </>
        ) : (
          <img src={nothingfound} alt="" />
        )}
      </main>
      <div className="Advert">
        <Advert></Advert>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
