import React from "react";

import Header from "../main/components/Header";
import Section from "./Component/Section";
import Newbanner from "./Component/Banner";
import Filter from "./Component/Filter";
import Footer from '../main/components/Footer'
import next from "../../assets/next.png";
import New from "./Component/New";

export default function Game() {
  return (
    <>
      <Header></Header>
      <Section></Section>
      <Newbanner></Newbanner>
      <Filter></Filter>
      <New></New>
      <Footer></Footer>
    </>
  );
}
