import React from "react";
import Hero from "../components/hero/hero";
import History from "../components/history/history";
import Fakts from "../components/fakts/fakts";
import FooterHead from "../layout/foterHead/footerHead";
import Cards from "../components/cards/cards";

const MainPage = () => {
  return (
    <>
      <Hero />
      <History />
      <Cards />
      <Fakts />
    </>
  );
};

export default MainPage;
