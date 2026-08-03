import { useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus, Package, ArrowRight, CheckCircle, Phone, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Page } from '../types';

interface ShopProps {
  onNavigate: (page: Page) => void;
}

export default function Shop({ onNavigate }: ShopProps) {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', city: '', address: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);

  const DELIVERY_THRESHOLD = 50000;
  const deliveryFee = totalPrice >= DELIVERY_THRESHOLD ? 0 : 2500;
  const grandTotal = totalPrice + deliveryFee;

  const buildWhatsAppMessage = () => {
    const lines = items.map(
      i => `• ${i.product.name} ×${i.quantity} = ${(i.product.price * i.quantity).toLocaleString()} FCFA`
    );
    return [
      '🌾 *Commande AGRIFARM*',
      '',
      '*Produits commandés:*',
      ...lines,
      '',
      `*Sous-total:* ${totalPrice.toLocaleString()} FCFA`,
      `*Livraison:* ${deliveryFee === 0 ? 'Gratuite' : deliveryFee.toLocaleString() + ' FCFA'}`,
      `*TOTAL:* ${grandTotal.toLocaleString()} FCFA`,
      '',
      '*Informations client:*',
      `Nom: ${form.name || '—'}`,
      `Téléphone: ${form.phone || '—'}`,
      `Ville: ${form.city || '—'}`,
      `Adresse: ${form.address || '—'}`,
      form.notes ? `Notes: ${form.notes}` : '',
    ].filter(Boolean).join('\n');
  };

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setOrderPlaced(true);
    setSubmitting(false);
    clearCart();
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/237678306026?text=${encodeURIComponent(buildWhatsAppMessage())}`, '_blank');
  };

  if (orderPlaced) {
    return (
      <div className="font-poppins pt-20 min-h-screen bg-cream-100 flex items-center justify-center px-4">
        <div className="card max-w-md w-full p-10 text-center animate-scale-in">
          <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-forest-600" />
          </div>
          <h2 className="text-2xl font-bold text-forest-900 mb-3">Commande confirmée !</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Merci pour votre commande ! Notre équipe AGRIFARM vous contactera dans les plus brefs délais pour organiser la livraison.
          </p>
          <div className="bg-forest-50 rounded-xl p-4 mb-6" style={{ backgroundColor: '#f0f9f2' }}>
            <div className="flex items-center justify-center gap-2 text-forest-700 font-medium text-sm">
              <Phone size={16} />
              <span>+237 678 306 026</span>
            </div>
          </div>
          <button
            onClick={() => { setOrderPlaced(false); onNavigate('products'); }}
            className="btn-primary w-full justify-center"
          >
            Continuer mes achats
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-poppins pt-20">
      {/* Hero */}
      <section className="py-14 bg-forest-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold text-xs uppercase tracking-widest mb-2">Commande en ligne</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Boutique AGRIFARM</h1>
        </div>
      </section>

      <section className="py-12 bg-cream-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-card">
                <ShoppingCart size={40} className="text-gray-300" />
              </div>
              <h2 className="text-2xl font-bold text-forest-900 mb-3">Votre panier est vide</h2>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                Ajoutez des produits depuis notre catalogue pour passer commande.
              </p>
              <button onClick={() => onNavigate('products')} className="btn-primary">
                <Package size={18} />
                Voir notre catalogue
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-xl font-bold text-forest-900">
                    Panier ({totalItems} article{totalItems > 1 ? 's' : ''})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-red-400 hover:text-red-600 text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    <Trash2 size={14} />
                    Vider
                  </button>
                </div>

                {/* Promo banner */}
                {totalPrice < DELIVERY_THRESHOLD && (
                  <div className="flex items-center gap-3 bg-forest-700 text-white rounded-xl px-4 py-3 text-sm">
                    <Tag size={16} className="text-gold-400 flex-shrink-0" />
                    <span>
                      Ajoutez encore{' '}
                      <strong className="text-gold-400">
                        {(DELIVERY_THRESHOLD - totalPrice).toLocaleString()} FCFA
                      </strong>{' '}
                      pour la livraison gratuite !
                    </span>
                  </div>
                )}

                {items.map(item => (
                  <div key={item.product.id} className="card p-4 flex items-start gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-forest-900 text-sm leading-tight mb-0.5 line-clamp-2">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-400 text-xs mb-2">{item.product.unit}</p>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div>
                          <p className="font-bold text-forest-700">
                            {(item.product.price * item.quantity).toLocaleString()} FCFA
                          </p>
                          <p className="text-gray-400 text-xs">
                            {item.product.price.toLocaleString()} FCFA × {item.quantity}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-forest-700 hover:bg-forest-700 hover:text-white flex items-center justify-center transition-all"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-7 text-center font-bold text-forest-900 text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-forest-700 hover:bg-forest-700 hover:text-white flex items-center justify-center transition-all"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => onNavigate('products')}
                  className="text-forest-700 font-medium text-sm flex items-center gap-1 hover:text-forest-900 transition-colors"
                >
                  ← Continuer les achats
                </button>
              </div>

              {/* Right column: summary + form */}
              <div className="space-y-6">
                {/* Summary */}
                <div className="card p-6">
                  <h3 className="font-bold text-forest-900 text-lg mb-4">Récapitulatif</h3>
                  <div className="space-y-1.5 mb-4 max-h-48 overflow-y-auto">
                    {items.map(item => (
                      <div key={item.product.id} className="flex justify-between text-xs">
                        <span className="text-gray-500 truncate pr-2">{item.product.name} ×{item.quantity}</span>
                        <span className="text-forest-800 font-medium flex-shrink-0">
                          {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Sous-total</span>
                      <span className="font-medium">{totalPrice.toLocaleString()} FCFA</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Livraison</span>
                      <span className={`font-medium ${deliveryFee === 0 ? 'text-forest-600' : ''}`}>
                        {deliveryFee === 0 ? '🎉 Gratuite' : `${deliveryFee.toLocaleString()} FCFA`}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-bold text-lg">
                    <span className="text-forest-900">Total</span>
                    <span className="text-forest-700">{grandTotal.toLocaleString()} FCFA</span>
                  </div>
                </div>

                {/* Order form */}
                <form onSubmit={handleOrder} className="card p-6 space-y-4">
                  <h3 className="font-bold text-forest-900 text-lg">Informations de livraison</h3>

                  <div>
                    <label className="text-xs text-gray-600 font-semibold block mb-1">Nom complet *</label>
                    <input
                      required
                      type="text"
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="input-field text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 font-semibold block mb-1">Téléphone *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+237 6XX XXX XXX"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="input-field text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 font-semibold block mb-1">Ville *</label>
                    <input
                      required
                      type="text"
                      placeholder="Votre ville"
                      value={form.city}
                      onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                      className="input-field text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 font-semibold block mb-1">Adresse complète *</label>
                    <input
                      required
                      type="text"
                      placeholder="Quartier, rue..."
                      value={form.address}
                      onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                      className="input-field text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 font-semibold block mb-1">Notes (optionnel)</label>
                    <textarea
                      rows={2}
                      placeholder="Instructions spéciales..."
                      value={form.notes}
                      onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                      className="input-field text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Traitement...
                      </span>
                    ) : (
                      <>Confirmer la commande <ArrowRight size={16} /></>
                    )}
                  </button>

                  <div className="relative flex items-center gap-3">
                    <div className="flex-1 border-t border-gray-200" />
                    <span className="text-xs text-gray-400 bg-white px-1">ou</span>
                    <div className="flex-1 border-t border-gray-200" />
                  </div>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full py-3 bg-[#25d366] hover:bg-[#1eb85a] text-white font-semibold rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Commander via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
