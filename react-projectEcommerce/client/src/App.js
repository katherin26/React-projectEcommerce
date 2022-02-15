import "./App.css";
import {
  Header,
  Company,
  ContactUs,
  Products,
  Services,
  Footer,
} from "./components/Index";

import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import { useState, useEffect } from "react";

const alanKey =
  "59ac0856839fba53ad97f99e7f0774112e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: (commandData) => {},
    });
  }, []);

  return (
    <div className="App border-2  ">
      <Header />
      <Services />
      <Products />
      <Company />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
