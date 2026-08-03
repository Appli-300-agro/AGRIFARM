import { useState, useMemo } from 'react';
import { Search, ShoppingCart, Filter, Check, Star } from 'lucide-react';
import { products } from '../data/products';
import { ProductCategory, Page } from '../types';
import { useCart } from '../context/CartContext';

interface ProductsProps {
  onNavigate: (page: Page) => void;
}

type FilterCat = ProductCategory | 'all';

const categories: { id: FilterCat; label: string; emoji: string }[] = [
  { id: 'all', label: 'Tous', emoji: '🌿' },
  { id: 'semences', label: 'Semences', emoji: '🌱' },
  { id: 'engrais', label: 'Engrais', emoji: '💊' },
  { id: 'pesticides', label: 'Pesticides', emoji: '🛡️' },
  { id: 'herbicides', label: 'Herbicides', emoji: '🌾' },
  { id: 'fongicides', label: 'Fongicides', emoji: '🔬' },
  { id: 'arrosage', label: 'Arrosage', emoji: '💧' },
  { id: 'outils', label: 'Outils', emoji: '🔧' },
  { id: 'materiels', label: 'Matériels', emoji: '🚜' },
];

export default function Products({ onNavigate }: ProductsProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<FilterCat>('all');
  const [addedIds, setAddedIds] = useState<Set<number>>(new Set());
  const { addToCart } = useCart();

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCat = category === 'all' || p.category === category;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, category]);

  const handleAdd = (product: typeof products[0]) => {
    if (!product.available) return;
    addToCart(product);
    setAddedIds(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedIds(prev => { const n = new Set(prev); n.delete(product.id); return n; });
    }, 1600);
  };

  return (
    <div className="font-poppins pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-forest-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold text-xs uppercase tracking-widest mb-3">Catalogue complet</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nos Produits</h1>
          <div className="green-divider w-24 mx-auto mb-5" />
          <p className="text-white/70 text-base max-w-xl mx-auto">
            Semences certifiées, engrais, phytosanitaires, outils et matériels agricoles — tout ce qu'il faut pour votre exploitation.
          </p>
        </div>
      </section>

      {/* Sticky Filters */}
      <section className="sticky top-16 md:top-20 z-30 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input-field pl-9 text-sm"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={15} className="text-gray-400 flex-shrink-0" />
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                    category === cat.id
                      ? 'bg-forest-700 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-forest-100 hover:text-forest-800'
                  }`}
                >
                  {cat.emoji} {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500 text-lg mb-4">Aucun produit trouvé pour "{search}"</p>
              <button
                onClick={() => { setSearch(''); setCategory('all'); }}
                className="btn-outline text-sm"
              >
                Réinitialiser
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold text-forest-800">{filtered.length}</span> produit{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map(product => (
                  <div key={product.id} className="card group flex flex-col">
                    <div className="relative overflow-hidden h-52 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {product.badge && (
                          <span className="badge bg-gold-500 text-forest-900">{product.badge}</span>
                        )}
                        {!product.available && (
                          <span className="badge bg-gray-500 text-white">Sur commande</span>
                        )}
                      </div>
                      <div className="absolute top-3 right-3 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={10} fill="#c9a227" className="text-gold-500" />
                        ))}
                      </div>
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <span className={`inline-flex items-center gap-1 text-xs font-medium mb-1.5 ${product.available ? 'text-forest-600' : 'text-gray-400'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${product.available ? 'bg-forest-500' : 'bg-gray-400'}`} />
                        {product.available ? 'En stock' : 'Sur commande'}
                      </span>
                      <h3 className="font-semibold text-forest-900 text-sm mb-1 line-clamp-2">{product.name}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed mb-3 flex-1 line-clamp-3">{product.description}</p>

                      <div className="mt-auto">
                        <div className="flex items-baseline gap-1 mb-3">
                          <span className="font-bold text-forest-700 text-base">{product.price.toLocaleString()}</span>
                          <span className="text-xs text-gray-400">FCFA / {product.unit}</span>
                        </div>
                        <button
                          onClick={() => handleAdd(product)}
                          disabled={!product.available}
                          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                            !product.available
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : addedIds.has(product.id)
                              ? 'bg-forest-600 text-white'
                              : 'bg-forest-700 hover:bg-gold-500 hover:text-forest-900 text-white'
                          }`}
                        >
                          {addedIds.has(product.id) ? (
                            <><Check size={15} /> Ajouté !</>
                          ) : (
                            <><ShoppingCart size={15} /> {product.available ? 'Ajouter au panier' : 'Sur commande'}</>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-12 bg-white text-center">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-xl font-bold text-forest-900 mb-3">Votre sélection est prête ?</h2>
          <p className="text-gray-500 text-sm mb-5">Accédez à votre panier pour finaliser votre commande.</p>
          <button onClick={() => onNavigate('shop')} className="btn-primary">
            <ShoppingCart size={18} />
            Voir mon panier
          </button>
        </div>
      </section>
    </div>
  );
}
