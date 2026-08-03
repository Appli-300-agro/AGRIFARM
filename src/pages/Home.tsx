import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Sprout, TrendingUp, Award, Users, Package, BookOpen } from 'lucide-react';
import { Page } from '../types';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { testimonials } from '../data/services';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const stats = [
  { label: 'Agriculteurs accompagnés', value: '1 500+', icon: Users },
  { label: 'Produits disponibles', value: '80+', icon: Package },
  { label: 'Années d\'expérience', value: '10+', icon: Award },
  { label: 'Formations réalisées', value: '200+', icon: BookOpen },
];

const quickServices = [
  { icon: '🌾', title: 'Intrants Agricoles', desc: 'Semences, engrais, phytosanitaires certifiés' },
  { icon: '🚜', title: 'Matériels Agricoles', desc: 'Équipements modernes pour votre exploitation' },
  { icon: '💡', title: 'Conseils Experts', desc: 'Accompagnement par des agronomes qualifiés' },
  { icon: '📚', title: 'Formations', desc: 'Sessions pratiques et certificats reconnus' },
];

export default function Home({ onNavigate }: HomeProps) {
  const [visible, setVisible] = useState(false);
  const { addToCart } = useCart();
  const featured = products.filter(p => p.available).slice(0, 4);
  const featuredTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="font-poppins">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-700 via-gold-500 to-forest-700" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className={`max-w-2xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 mb-5">
              <Sprout size={16} className="text-gold-400" />
              <div className="h-px w-10 bg-gold-400" />
              <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">Conseil Agricole • Cameroun</span>
            </div>

            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-400 shadow-gold">
                <img src="/images/732831837_1331025371910741_8747239478801979988_n.png" alt="AGRIFARM" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-wider">
                AGRIFARM
              </h1>
            </div>

            <div className="green-divider w-20 mb-5" />

            <p className="text-xl sm:text-2xl text-gold-300 font-medium italic mb-3 leading-snug">
              "Votre partenaire pour une agriculture<br className="hidden sm:block" /> moderne et performante."
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-10 max-w-lg">
              Distribution d'intrants agricoles de qualité, vente de matériels, conseils d'experts et formations professionnelles pour booster vos rendements au Cameroun.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <button onClick={() => onNavigate('services')} className="btn-gold text-base">
                Découvrir nos services
                <ArrowRight size={18} />
              </button>
              <button onClick={() => onNavigate('shop')} className="btn-white text-base">
                Commander maintenant
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                  <p className="text-gold-400 font-black text-xl">{s.value}</p>
                  <p className="text-white/70 text-xs mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a href="#services-section" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold-400 transition-colors animate-float">
          <ChevronDown size={32} />
        </a>
      </section>

      {/* ─── QUICK SERVICES ─── */}
      <section id="services-section" className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-tag justify-center">Ce que nous faisons</p>
            <h2 className="section-title">Nos domaines d'expertise</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickServices.map((s, i) => (
              <div
                key={i}
                className="card p-6 text-center group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                onClick={() => onNavigate('services')}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="font-bold text-forest-800 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => onNavigate('services')} className="btn-outline">
              Voir tous nos services
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AGRIFARM"
                  className="w-full h-[440px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-forest-100 rounded-full opacity-60" />
              <div className="absolute -bottom-4 -left-4 bg-forest-800 text-white rounded-2xl p-5 shadow-xl max-w-[200px]">
                <TrendingUp size={24} className="text-gold-400 mb-2" />
                <p className="font-bold text-lg leading-tight">+200%</p>
                <p className="text-white/70 text-xs">de rendements avec nos conseils</p>
              </div>
            </div>
            <div>
              <p className="section-tag">Qui sommes-nous</p>
              <h2 className="section-title mb-5">
                AGRIFARM, au service<br />de l'agriculture camerounaise
              </h2>
              <div className="green-divider w-16 mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Depuis plus de 10 ans, AGRIFARM accompagne les agriculteurs et entrepreneurs agricoles du Cameroun avec des intrants de qualité, des équipements modernes et des conseils d'experts agronomes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Notre mission : rendre l'agriculture moderne accessible à tous, améliorer les rendements et contribuer à la sécurité alimentaire du Cameroun.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Intrants certifiés', icon: '✅' },
                  { label: 'Conseil personnalisé', icon: '💬' },
                  { label: 'Livraison nationale', icon: '🚚' },
                  { label: 'Support technique', icon: '🛠️' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => onNavigate('about')} className="btn-primary">
                En savoir plus
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-20 bg-forest-50" style={{ backgroundColor: '#f0f9f2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <p className="section-tag">Notre boutique</p>
              <h2 className="section-title">Produits vedettes</h2>
            </div>
            <button onClick={() => onNavigate('products')} className="text-forest-700 font-semibold text-sm flex items-center gap-1.5 hover:text-forest-900 transition-colors">
              Voir tout <ArrowRight size={15} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map(product => (
              <div key={product.id} className="card group flex flex-col">
                <div className="relative overflow-hidden h-48 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 badge bg-gold-500 text-forest-900">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-forest-900 text-sm mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3 flex-1 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="font-bold text-forest-700">{product.price.toLocaleString()}</span>
                      <span className="text-xs text-gray-400"> FCFA/{product.unit}</span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-forest-700 hover:bg-gold-500 hover:text-forest-900 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-300"
                    >
                      + Panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS TEASER ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-tag justify-center">Ils nous font confiance</p>
            <h2 className="section-title">Ce que disent nos clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map(t => (
              <div key={t.id} className="card p-6 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-gold-500 text-base">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.text.slice(0, 150)}..."</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-forest-200" />
                  <div>
                    <p className="font-semibold text-forest-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role} — {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => onNavigate('testimonials')} className="btn-outline">
              Voir tous les témoignages
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-20 bg-forest-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">Prêt à commencer ?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Boostez votre agriculture avec AGRIFARM
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed max-w-xl mx-auto">
            Commandez nos intrants en ligne, contactez-nous via WhatsApp ou venez nous rendre visite. Nos experts sont à votre disposition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => onNavigate('shop')} className="btn-gold">
              Commander maintenant
              <ArrowRight size={18} />
            </button>
            <button onClick={() => onNavigate('contact')} className="btn-white">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
