import { Sprout, Target, Heart, Award, Globe, Users, TrendingUp, CheckCircle } from 'lucide-react';

const milestones = [
  { year: '2014', title: 'Fondation', desc: 'Création d\'AGRIFARM avec une vision claire : moderniser l\'agriculture camerounaise.' },
  { year: '2016', title: 'Expansion', desc: 'Ouverture de nouveaux points de vente et début des formations agricoles professionnelles.' },
  { year: '2018', title: 'Partenariats', desc: 'Signature de partenariats avec des marques internationales d\'intrants agricoles.' },
  { year: '2020', title: 'Numérique', desc: 'Lancement du service de conseil en ligne et livraison à domicile dans tout le Cameroun.' },
  { year: '2022', title: 'Certification', desc: 'Obtention de la certification ISO et reconnaissance par le Ministère de l\'Agriculture.' },
  { year: '2024', title: 'Aujourd\'hui', desc: 'Plus de 1500 agriculteurs accompagnés, présence dans toutes les régions du Cameroun.' },
];

const values = [
  {
    icon: Sprout,
    title: 'Durabilité',
    desc: 'Nous promouvons des pratiques agricoles respectueuses de l\'environnement pour des exploitations pérennes.',
    bg: 'bg-forest-100',
    ic: 'text-forest-700',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'Seuls les intrants certifiés et homologués entrent dans notre catalogue. La qualité est non négociable.',
    bg: 'bg-gold-50',
    ic: 'text-gold-600',
  },
  {
    icon: Heart,
    title: 'Passion',
    desc: 'Nous croyons en l\'agriculture comme moteur du développement du Cameroun et y mettons toute notre énergie.',
    bg: 'bg-red-50',
    ic: 'text-red-500',
  },
  {
    icon: Users,
    title: 'Communauté',
    desc: 'Chaque agriculteur accompagné est un investissement dans la communauté et la sécurité alimentaire nationale.',
    bg: 'bg-blue-50',
    ic: 'text-blue-600',
  },
  {
    icon: Target,
    title: 'Performance',
    desc: 'Nos recommandations sont basées sur des données agronomiques réelles pour des résultats mesurables et constants.',
    bg: 'bg-green-50',
    ic: 'text-green-600',
  },
  {
    icon: Globe,
    title: 'Accessibilité',
    desc: 'Nous livrons nos produits dans tout le Cameroun pour que chaque agriculteur accède à nos services, où qu\'il soit.',
    bg: 'bg-teal-50',
    ic: 'text-teal-600',
  },
];

const engagements = [
  'Produits 100% certifiés et homologués au Cameroun',
  'Agronomes diplômés et expérimentés en terrain',
  'Livraison rapide dans toutes les régions',
  'Satisfaction client garantie ou remboursement',
  'Formation continue de nos équipes techniques',
  'Tarifs transparents et compétitifs',
];

export default function About() {
  return (
    <div className="font-poppins pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-forest-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold text-xs uppercase tracking-widest mb-3">Notre histoire</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">À propos d'AGRIFARM</h1>
          <div className="green-divider w-24 mx-auto mb-6" />
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Depuis 2014, AGRIFARM oeuvre au service de l'agriculture camerounaise avec passion, expertise et un engagement total envers ses clients.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-tag">Notre raison d'être</p>
              <h2 className="section-title mb-6">
                Mission, Vision<br />& Engagement
              </h2>
              <div className="green-divider w-16 mb-6" />

              <div className="space-y-6 mb-8">
                <div className="p-5 bg-forest-50 rounded-xl border-l-4 border-forest-700" style={{ backgroundColor: '#f0f9f2' }}>
                  <h3 className="font-bold text-forest-800 mb-2 flex items-center gap-2">
                    <Target size={18} className="text-forest-700" /> Notre Mission
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fournir aux agriculteurs camerounais les intrants, équipements, conseils et formations nécessaires pour développer une agriculture moderne, productive et rentable.
                  </p>
                </div>
                <div className="p-5 bg-gold-50 rounded-xl border-l-4 border-gold-500">
                  <h3 className="font-bold text-forest-800 mb-2 flex items-center gap-2">
                    <TrendingUp size={18} className="text-gold-600" /> Notre Vision
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Devenir le premier partenaire agricole de référence en Afrique Centrale, contribuant significativement à la sécurité alimentaire et au développement économique du Cameroun.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {engagements.map((e, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-forest-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{e}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Récolte" className="rounded-2xl h-52 w-full object-cover shadow-card" />
              <img src="https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Distribution" className="rounded-2xl h-52 w-full object-cover shadow-card mt-8" />
              <img src="https://images.pexels.com/photos/1656663/pexids-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Formation" className="rounded-2xl h-52 w-full object-cover shadow-card -mt-8" />
              <img src="https://images.pexels.com/photos/5029844/pexels-photo-5029844.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Équipe" className="rounded-2xl h-52 w-full object-cover shadow-card" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag justify-center">Notre parcours</p>
            <h2 className="section-title">10 ans d'excellence agricole</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-forest-200" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className={`flex items-center gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right pr-6' : 'text-left pl-6'}`}>
                    <div className="card inline-block p-5 max-w-xs text-left">
                      <p className="text-forest-600 font-black text-sm mb-1">{m.year}</p>
                      <h3 className="font-bold text-forest-900 mb-1">{m.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 bg-forest-700 border-4 border-gold-400 rounded-full z-10 flex items-center justify-center shadow-gold">
                    <Sprout size={14} className="text-white" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag justify-center">Ce qui nous guide</p>
            <h2 className="section-title">Nos valeurs fondamentales</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card p-6 group hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <v.icon size={22} className={v.ic} />
                </div>
                <h3 className="font-bold text-forest-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
