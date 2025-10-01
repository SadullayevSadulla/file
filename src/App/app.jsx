import React from "react";
import BoshSahifa from "../components/BoshSahifa/Boshsahifa.jsx";
import Jamoa from "../components/Jamoa/Jamoa.jsx";
import Yangiliklar from "../components/Yangiliklar/Yangiliklar.jsx";
import BizHaqimizda from "../components/BizHaqimizda/BizHaqimizda.jsx";
import Afzalliklar from "../components/Afzalliklar/Afzalliklar.jsx";
import Aloqa from "../components/Aloqa/Aloqa.jsx";
import Header from "../all/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Kimbu from "../components/kimbu/Kimbu.jsx";
const App = () => {
  return (
    <>
      <Header />
      <BoshSahifa />
      <BizHaqimizda />
      <Kimbu/>
      <Jamoa />
      <Afzalliklar />
      <Yangiliklar />
      <Aloqa />
      <Footer />
    </>
  );
};

export default App;
