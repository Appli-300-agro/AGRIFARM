import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'about': return <About />;
      case 'products': return <Products onNavigate={navigate} />;
      case 'services': return <Services onNavigate={navigate} />;
      case 'shop': return <Shop onNavigate={navigate} />;
      case 'gallery': return <Gallery />;
      case 'testimonials': return <Testimonials onNavigate={navigate} />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <CartProvider>
      <div className="font-poppins min-h-screen flex flex-col">
        <Navbar currentPage={currentPage} onNavigate={navigate} />
        <main className="flex-1">{renderPage()}</main>
        <Footer onNavigate={navigate} />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
}
