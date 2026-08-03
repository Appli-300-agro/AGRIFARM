import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { services } from '../data/services';
import { Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const process = [
  { step: '01', title: 'Contactez-nous', desc: 'Appelez, WhatsApp ou remplissez notre formulaire en ligne.' },
  { step: '02', title: 'Diagnostic', desc: 'Nos agronomes évaluent vos besoins et votre exploitation.' },
  { step: '03', title: 'Plan personnalisé', desc: 'Nous élaborons un plan adapté à vos objectifs et votre budget.' },
  { step: '04', title: 'Mise en oeuvre', desc: 'Fourniture d\'intrants, équipements et accompagnement terrain.' },
  { step: '05', title: 'Suivi & Résultats', desc: 'Visites régulières et ajustements pour maximiser vos rendements.' },
];

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="font-poppins pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-forest-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold text-xs uppercase tracking-widest mb-3">Ce que nous offrons</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Nos Services</h1>
          <div className="green-divider w-24 mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            De la vente d'intrants au suivi de votre exploitation, AGRIFARM vous accompagne à chaque étape pour une agriculture performante et rentable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="card group hover:-translate-y-1 transition-transform duration-300 flex flex-col"
              >
                {/* Header */}
                <div className="bg-forest-800 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-8xl opacity-10 leading-none pr-4 pt-2 font-black text-white">
                    {service.icon}
                  </div>
                  <div className="text-4xl mb-3 relative z-10">{service.icon}</div>
                  <h3 className="font-bold text-white text-xl relative z-10">{service.title}</h3>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2 flex-1">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle size={15} className="text-forest-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="mt-5 btn-primary text-sm w-full justify-center"
                  >
                    Demander ce service
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag justify-center">Comment ça marche</p>
            <h2 className="section-title">Notre processus d'accompagnement</h2>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-forest-100 z-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {process.map((p, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-forest-700 group-hover:bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 shadow-green">
                    <span className="text-white group-hover:text-forest-900 font-black text-lg transition-colors duration-300">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-forest-900 mb-2 text-sm">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest-700 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Besoin d'un service spécifique ?
          </h2>
          <p className="text-white/70 mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir une proposition personnalisée.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => onNavigate('contact')} className="btn-gold">
              Nous contacter
              <ArrowRight size={18} />
            </button>
            <a href="tel:+237678306026" className="btn-white">
              <Phone size={18} />
              +237 678 306 026
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
