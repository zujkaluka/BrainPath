import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileStickyBar from "./components/MobileStickyBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col pb-20 md:pb-0">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/usluge" element={<Services />} />
          <Route path="/usluge/:slug" element={<ServiceDetail />} />
          <Route path="/pitanja" element={<Faq />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
