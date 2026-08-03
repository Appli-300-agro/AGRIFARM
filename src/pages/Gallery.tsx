import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/products';

const categories = ['Tout', 'Plantation', 'Cultures', 'Produits', 'Services', 'Formation', 'Suivi', 'Équipe', 'Clients', 'Matériels'];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState('Tout');

  const filtered = filter === 'Tout' ? galleryImages : galleryImages.filter(img => img.category === filter);

  const prev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  };
  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  };

  return (
    <div className="font-poppins pt-20">
      {/* Hero */}
      <section className="relative py-22 bg-forest-800 overflow-hidden" style={{ paddingTop: '5.5rem', paddingBottom: '5.5rem' }}>
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold text-xs uppercase tracking-widest mb-3">Nos images</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Galerie AGRIFARM</h1>
          <div className="green-divider w-24 mx-auto mb-5" />
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Découvrez nos plantations, nos équipes sur le terrain, nos formations et les témoignages visuels de nos succès agricoles.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-forest-700 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-forest-100 hover:text-forest-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">Aucune image dans cette catégorie.</div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filtered.map((img, i) => (
                <div
                  key={img.id}
                  className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/50 transition-all duration-300 flex items-end">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 w-full">
                      <span className="badge bg-gold-500 text-forest-900 mb-2">{img.category}</span>
                      <p className="text-white text-sm font-medium">{img.caption}</p>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ZoomIn size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors z-10 bg-black/30 rounded-full p-1.5">
            <X size={26} />
          </button>
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white hover:text-gold-400 z-10 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all"
          >
            <ChevronLeft size={28} />
          </button>
          <div className="max-w-5xl max-h-[85vh] px-16" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightbox].url}
              alt={filtered[lightbox].caption}
              className="max-w-full max-h-[76vh] object-contain rounded-xl mx-auto"
            />
            <div className="text-center mt-4">
              <span className="badge bg-gold-500 text-forest-900 mb-2 inline-block">{filtered[lightbox].category}</span>
              <p className="text-white/80 text-sm">{filtered[lightbox].caption}</p>
              <p className="text-white/40 text-xs mt-1">{lightbox + 1} / {filtered.length}</p>
            </div>
          </div>
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white hover:text-gold-400 z-10 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
