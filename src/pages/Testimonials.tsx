import { testimonials } from '../data/services';
import { Page } from '../types';
import { ArrowRight, Quote } from 'lucide-react';

interface TestimonialsProps {
  onNavigate: (page: Page) => void;
}

const trustBadges = [
  { value: '1 500+', label: 'Agriculteurs accompagnés' },
  { value: '10 ans', label: 'D\'expérience dans le secteur' },
  { value: '98%', label: 'Taux de satisfaction client' },
  { value: '200+', label: 'Formations réalisées' },
];

export default function Testimonials({ onNavigate }: TestimonialsProps) {
  return (
    <div className="font-poppins pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-forest-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold text-xs uppercase tracking-widest mb-3">Ils parlent de nous</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Témoignages</h1>
          <div className="green-divider w-24 mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Découvrez ce que nos clients disent d'AGRIFARM et comment nous avons transformé leurs exploitations agricoles.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-gold-500 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustBadges.map((b, i) => (
              <div key={i}>
                <p className="font-black text-forest-900 text-2xl">{b.value}</p>
                <p className="text-forest-800 text-xs mt-0.5 font-medium">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {testimonials.map(t => (
              <div
                key={t.id}
                className="card p-7 group hover:-translate-y-1 transition-transform duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-gold-500 text-lg">★</span>
                    ))}
                  </div>
                  <Quote size={20} className="text-forest-200" />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1 italic mb-5">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-forest-200 flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-forest-900 text-sm">{t.name}</p>
                    <p className="text-forest-600 text-xs">{t.role}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">⭐</span>
          </div>
          <h2 className="text-2xl font-bold text-forest-900 mb-4">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Commencez dès aujourd'hui avec AGRIFARM et transformez votre exploitation agricole. Nos experts vous accompagnent à chaque étape.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Nous contacter
              <ArrowRight size={18} />
            </button>
            <button onClick={() => onNavigate('services')} className="btn-outline">
              Nos services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
