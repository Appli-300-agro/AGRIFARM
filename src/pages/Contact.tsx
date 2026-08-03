import { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send, CheckCircle, Facebook, Youtube } from 'lucide-react';

const contactCards = [
  {
    icon: Phone,
    title: 'Téléphone',
    main: '+237 678 306 026',
    sub: 'Disponible 7j/7 de 7h à 19h',
    href: 'tel:+237678306026',
    bg: 'bg-forest-700',
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    title: 'WhatsApp',
    main: '+237 678 306 026',
    sub: 'Réponse rapide garantie',
    href: 'https://wa.me/237678306026',
    bg: 'bg-[#25d366]',
  },
  {
    icon: Facebook,
    title: 'Facebook',
    main: 'AGRIFARM Cameroun',
    sub: 'Suivez notre actualité',
    href: 'https://facebook.com',
    bg: 'bg-blue-600',
  },
  {
    icon: Mail,
    title: 'Email',
    main: 'agrifarm.cm@gmail.com',
    sub: 'Réponse sous 24h ouvrables',
    href: 'mailto:agrifarm.cm@gmail.com',
    bg: 'bg-gold-500',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    main: 'Cameroun',
    sub: 'Desservons tout le territoire',
    href: 'https://maps.google.com/?q=Cameroun',
    bg: 'bg-earth-400',
  },
  {
    icon: Youtube,
    title: 'YouTube',
    main: 'AGRIFARM TV',
    sub: 'Tutoriels et formations',
    href: 'https://youtube.com',
    bg: 'bg-red-600',
  },
];

const hours = [
  { day: 'Lundi – Vendredi', time: '8h00 – 17h30' },
  { day: 'Samedi', time: '8h00 – 14h00' },
  { day: 'Dimanche', time: 'Urgences uniquement' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1000));
    setSent(true);
    setSending(false);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="font-poppins pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-forest-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/2879234/pexels-photo-2879234.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold text-xs uppercase tracking-widest mb-3">Nous joindre</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Contactez AGRIFARM</h1>
          <div className="green-divider w-24 mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Une question, une commande ou souhaitez-vous un diagnostic de votre exploitation ? Nos agronomes sont disponibles pour vous.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactCards.map((card, i) => (
              <a
                key={i}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card p-5 group hover:-translate-y-1 transition-transform duration-300 flex items-center gap-4"
              >
                <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center flex-shrink-0 text-white`}>
                  <card.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">{card.title}</p>
                  <p className="font-semibold text-forest-900 text-sm leading-tight">{card.main}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{card.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map + Hours */}
      <section className="py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-forest-900 mb-1">Envoyez-nous un message</h2>
              <p className="text-gray-400 text-sm mb-6">Nous vous répondons dans les meilleurs délais.</p>

              {sent && (
                <div className="mb-5 p-4 bg-forest-50 rounded-xl flex items-start gap-3 animate-scale-in border border-forest-200" style={{ backgroundColor: '#f0f9f2' }}>
                  <CheckCircle size={18} className="text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-forest-800 text-sm">Message envoyé !</p>
                    <p className="text-forest-600 text-xs mt-0.5">Notre équipe vous répondra sous 24h ouvrables.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-600 font-semibold block mb-1">Nom complet *</label>
                    <input
                      required type="text" placeholder="Votre nom"
                      value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="input-field text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 font-semibold block mb-1">Téléphone</label>
                    <input
                      type="tel" placeholder="+237 6XX XXX XXX"
                      value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="input-field text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-600 font-semibold block mb-1">Email *</label>
                  <input
                    required type="email" placeholder="votre@email.com"
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="input-field text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 font-semibold block mb-1">Sujet *</label>
                  <select
                    required
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="input-field text-sm"
                  >
                    <option value="">Choisir un sujet</option>
                    <option value="commande">Commande / Achat de produits</option>
                    <option value="conseil">Demande de conseil agricole</option>
                    <option value="formation">Inscription à une formation</option>
                    <option value="partenariat">Partenariat professionnel</option>
                    <option value="suivi">Suivi d'exploitation</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-600 font-semibold block mb-1">Message *</label>
                  <textarea
                    required rows={5} placeholder="Décrivez votre demande en détail..."
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="input-field text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Envoi...
                    </span>
                  ) : (
                    <><Send size={16} /> Envoyer le message</>
                  )}
                </button>
              </form>
            </div>

            {/* Right: map + hours + whatsapp */}
            <div className="space-y-6">
              {/* Map */}
              <div className="card overflow-hidden">
                <div className="h-64">
                  <iframe
                    title="AGRIFARM Cameroun"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8085494.895855!2d8.0!3d4.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d0c3dc0e7cb%3A0xd15f3aae9a23a674!2sCameroun!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4 flex items-center gap-3">
                  <MapPin size={18} className="text-forest-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-forest-900 text-sm">AGRIFARM Conseil Agricole</p>
                    <p className="text-gray-400 text-xs">Présent dans toutes les régions du Cameroun</p>
                  </div>
                  <a href="https://maps.google.com/?q=Cameroun" target="_blank" rel="noopener noreferrer"
                    className="text-xs text-forest-700 font-medium hover:underline whitespace-nowrap">
                    Itinéraire →
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-forest-700 rounded-xl flex items-center justify-center">
                    <Clock size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-forest-900">Horaires de service</h3>
                </div>
                <div className="space-y-3">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0 text-sm">
                      <span className="text-gray-600">{h.day}</span>
                      <span className="font-semibold text-forest-900">{h.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-forest-50 rounded-xl" style={{ backgroundColor: '#f0f9f2' }}>
                  <p className="text-forest-700 text-xs font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-forest-500 inline-block" />
                    Livraison nationale — commandez de partout au Cameroun
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/237678306026?text=Bonjour%20AGRIFARM%20!"
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 bg-[#25d366] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-forest-900">Chattez sur WhatsApp</p>
                  <p className="text-gray-500 text-sm">Réponse rapide de notre équipe</p>
                  <p className="text-[#25d366] text-sm font-semibold">+237 678 306 026</p>
                </div>
                <span className="text-gray-300 group-hover:text-forest-600 transition-colors text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
