import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Sprout } from 'lucide-react';
import { Page } from '../types';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: 'Accueil', page: 'home' },
  { label: 'À propos', page: 'about' },
  { label: 'Produits', page: 'products' },
  { label: 'Services', page: 'services' },
  { label: 'Boutique', page: 'shop' },
  { label: 'Galerie', page: 'gallery' },
  { label: 'Témoignages', page: 'testimonials' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = currentPage === 'home';
  const solid = scrolled || !isHome;
  const navBg = solid
    ? 'bg-forest-800/97 backdrop-blur-md shadow-lg'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${navBg}`}>
      {/* Top accent bar */}
      {solid && <div className="h-0.5 bg-gradient-to-r from-forest-700 via-gold-500 to-forest-700" />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => handleNav('home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gold-400 shadow-gold flex-shrink-0">
              <img
                src="/images/732831837_1331025371910741_8747239478801979988_n.png"
                alt="AGRIFARM Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left leading-tight">
              <p className="text-white font-black text-base tracking-wider">AGRIFARM</p>
              <p className="text-gold-400 text-[10px] font-medium tracking-widest">Conseil Agricole</p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === link.page
                    ? 'text-gold-400 bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNav('shop')}
              className="relative p-2 text-white hover:text-gold-400 transition-colors"
              aria-label="Panier"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-forest-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-forest-900/98 backdrop-blur-md border-t border-white/10 animate-slide-down">
          <div className="px-4 py-3 space-y-1 max-h-[75vh] overflow-y-auto">
            {navLinks.map(link => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${
                  currentPage === link.page
                    ? 'text-gold-400 bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {currentPage === link.page && <Sprout size={14} className="text-gold-400" />}
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
