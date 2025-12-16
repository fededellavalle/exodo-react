import { Header } from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { Loader } from "../components/Loader";
import { Banner } from "../components/Banner";
import { MainSection } from "../components/MainSection";
import { Events } from "../components/Events";
import { Leclat } from "../components/Leclat";
import { ReservaModal } from "../components/modals/ReservaModal";
import { Transporte } from "../components/Transporte";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";

export function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <Header />
          <Banner />
          <MainSection />
          <Events />
          <Leclat />
          <ReservaModal />
          <Transporte />
          <FAQ />
          <Footer />
        </>
      )}
    </>
  );
}
