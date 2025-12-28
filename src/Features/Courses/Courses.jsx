import React, { useState } from "react";
import styles from "./App.module.css";

import img from "./assets/Stack.png";
import Section from "./components/Section";
import Banner from "./components/Banner";
import Filter from "./components/Filter";
import Card2 from "./component/Card2";
import Card3 from "./component/Card3";
import Card4 from "./component/Card4";
import Card from "./component/Card";
import Advert from "./components/Advert";
import data from "./component/Data";
import nothingfound from "./assets/nothingfound.png";
import Header from "../main/components/Header";
import Footer from "../main/components/Footer";

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCards = data.filter(
    (card) =>
      card.name
        .trim()
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase()) ||
      card.writer
        .trim()
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase()) ||
      card.id.toString().trim().includes(searchQuery)
  );

  return (
    <>
    <Header></Header>
      <div className={styles.div1998}>
        <Section label={img} />
        <Banner />
        <Filter />
      </div>
      <main>
        <div className={styles.input}>
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
            {filteredCards.map((card, index) => {
              if (index === 0) return <Card key={card.id} card={card} />;
              if (index === 1) return <Card2 key={card.id} card={card} />;
              if (index === 2) return <Card3 key={card.id} card={card} />;
              if (index === 3) return <Card4 key={card.id} card={card} />;
            })}
          </>
        ) : (
          <img src={nothingfound} alt="" />
        )}
      </main>
      <div className={styles.Advert}>
        <Advert />
      </div>
      <Footer></Footer>
    </>
  );
}
