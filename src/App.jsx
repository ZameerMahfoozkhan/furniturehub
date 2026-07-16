import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Premium from './pages/Premium';
import Budget from './pages/Budget';
import ProductDetail from './pages/ProductDetail';
import CustomFurniture from './pages/CustomFurniture';
import About from './pages/About';
import Contact from './pages/Contact';
import BulkOrders from './pages/BulkOrders';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/custom-furniture" element={<CustomFurniture />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bulk-orders" element={<BulkOrders />} />
        </Routes>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Header />
      <ScrollToTop />
      <main>
        <AnimatedRoutes />
      </main>
      <WhatsAppButton
        variant="floating"
        message="Hi, I'd like to know more about Furniture Hub Ayodhya's products."
      />
    </BrowserRouter>
  );
}
