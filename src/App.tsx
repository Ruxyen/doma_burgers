import { motion, AnimatePresence } from 'motion/react';
import { 
  Utensils, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Phone, 
  Share2, 
  Globe, 
  Rss, 
  Heart,
  Menu as MenuIcon,
  X,
  ShieldCheck,
  Info,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { useState, useRef, useEffect, createContext, useContext } from 'react';
import { MENU_ITEMS, INSTAGRAM_IMAGES } from './constants';
import { TRANSLATIONS, MENU_TRANSLATIONS, Language } from './translations';

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}>({
  lang: 'es',
  setLang: () => {},
  t: TRANSLATIONS.es,
});

const useTranslation = () => useContext(LanguageContext);

const Navbar = () => {
  const { lang, setLang, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('CARTA');

  const navLinks = [
    { name: t.nav.carta, id: 'carta' },
    { name: t.nav.nosotros, id: 'nosotros' },
    { name: t.nav.testimonios, id: 'testimonios' },
    { name: t.nav.galeria, id: 'galeria' },
    { name: t.nav.ubicaciones, id: 'ubicaciones' }
  ];

  const languages: { code: Language; label: string; flag: string; countryCode: string }[] = [
    { code: 'ca', label: 'Català', flag: '🏴󠁥󠁳󠁣󠁴󠁿', countryCode: 'es-ct', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg' },
    { code: 'es', label: 'Español', flag: '🇪🇸', countryCode: 'es', flagUrl: 'https://flagcdn.com/w40/es.png' },
    { code: 'en', label: 'English', flag: '🇬🇧', countryCode: 'gb', flagUrl: 'https://flagcdn.com/w40/gb.png' },
    { code: 'fr', label: 'Français', flag: '🇫🇷', countryCode: 'fr', flagUrl: 'https://flagcdn.com/w40/fr.png' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5 px-6 py-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Utensils className="text-primary w-7 h-7" />
          <h2 className="text-lg font-bold tracking-tighter uppercase">
            DOMA <span className="text-primary">BURGERS</span>
          </h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={() => setActiveLink(item.name)}
              className={`text-[10px] font-bold transition-colors tracking-[0.2em] relative pb-1 ${
                activeLink === item.name ? 'text-white' : 'text-slate-500 hover:text-white'
              }`}
            >
              {item.name}
              {activeLink === item.name && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 mr-2">
            {languages.map((l) => (
              <div key={l.code} className="relative group">
                <button
                  onClick={() => setLang(l.code)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden transition-all border-2 ${
                    lang === l.code ? 'border-primary scale-110' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={l.flagUrl} 
                    alt={l.label}
                    className="w-full h-full object-cover"
                  />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-zinc-900 border border-white/10 rounded text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                  {l.label}
                </div>
              </div>
            ))}
          </div>
          <button className="bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary px-5 py-1.5 rounded font-bold text-[10px] tracking-widest transition-all hidden sm:block">
            {t.nav.admin}
          </button>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <div className="flex gap-4 mb-4 pb-4 border-b border-white/5">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsOpen(false);
                    }}
                    className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-3 transition-all ${
                      lang === l.code ? 'bg-primary/20 border border-primary/30' : 'bg-white/5 border border-white/5'
                    }`}
                  >
                    <img 
                      src={l.flagUrl} 
                      alt={l.label}
                      className="w-6 h-4 object-cover rounded-sm"
                    />
                    <span className={`text-xs font-bold ${lang === l.code ? 'text-primary' : 'text-slate-400'}`}>
                      {l.label}
                    </span>
                  </button>
                ))}
              </div>
              {navLinks.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className="text-sm font-bold hover:text-primary transition-colors tracking-widest"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveLink(item.name);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-primary text-white py-3 rounded font-bold text-xs tracking-widest uppercase">
                {t.nav.admin}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  allergens: string[];
}

const MenuItemCard = ({ item }: { item: MenuItem, key?: string }) => {
  const { lang, t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);

  const translatedItem = MENU_TRANSLATIONS[lang][item.name as keyof typeof MENU_TRANSLATIONS['es']] || {
    name: item.name,
    description: item.description
  };

  return (
    <div className="relative h-[260px] md:h-[280px] w-full [perspective:1000px]">
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        className="w-full h-full relative [transform-style:preserve-3d]"
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-zinc-900/40 border border-white/5 rounded-3xl flex overflow-hidden hover:bg-zinc-900/60 transition-all group">
          <div className="w-[45%] h-full overflow-hidden flex-shrink-0 relative">
            <img 
              src={item.image} 
              alt={translatedItem.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/60"></div>
          </div>
          
          <div className="w-[55%] p-6 md:p-8 flex flex-col justify-between relative">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight pr-10">{translatedItem.name}</h3>
                <button className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg shadow-primary/30 hover:scale-110 active:scale-95 transition-all">
                  +
                </button>
              </div>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4 line-clamp-4 font-light">{translatedItem.description}</p>
            </div>
            
            <div className="flex justify-between items-end">
              <button 
                onClick={() => setIsFlipped(true)}
                className="text-slate-500 hover:text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors"
              >
                <Info className="w-4 h-4" /> {t.menu.allergens}
              </button>
              <div className="flex flex-col items-end">
                <span className="text-primary font-black text-2xl md:text-3xl leading-none">${item.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-zinc-900 border border-primary/30 rounded-3xl p-8 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-primary w-6 h-6" />
              <h3 className="text-lg font-bold uppercase tracking-tight">{t.menu.allergens}</h3>
            </div>
            <button 
              onClick={() => setIsFlipped(false)}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3 flex-grow overflow-y-auto pr-2 custom-scrollbar">
            {item.allergens.map((allergen: string) => (
              <div key={allergen} className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#ff1f1f]"></div>
                <span className="text-xs font-medium text-slate-300">{allergen}</span>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => setIsFlipped(false)}
            className="mt-6 w-full border border-primary/50 text-primary hover:bg-primary hover:text-white py-3 rounded-xl font-bold text-xs transition-all uppercase tracking-widest"
          >
            {t.menu.back}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1920" 
          alt="Gourmet Burger"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center px-4 max-w-4xl"
      >
        <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-6 block">{t.hero.subtitle}</span>
        <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter mb-6 uppercase italic">
          {t.hero.title1} <span className="text-primary neon-text-glow">{t.hero.title2}</span> {t.hero.title3}
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-white px-12 py-5 rounded-lg font-bold text-xl neon-glow hover:scale-105 transition-transform uppercase tracking-widest shadow-[0_0_30px_rgba(255,31,31,0.5)]">
            {t.hero.cta}
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-12 py-5 rounded-lg font-bold text-xl transition-all uppercase tracking-widest">
            {t.nav.carta}
          </button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

const MenuSection = () => {
  const { t } = useTranslation();
  const categories = [
    { id: 'SIGNATURE BURGERS', label: t.menu.categories.burgers },
    { id: 'SIDES', label: t.menu.categories.sides },
    { id: 'DRINKS', label: t.menu.categories.drinks },
    { id: 'DESSERTS', label: t.menu.categories.desserts }
  ];
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="carta" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="mb-16">
        <div className="flex flex-wrap gap-10 border-b border-white/5 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pb-5 text-[11px] font-bold tracking-[0.2em] transition-all relative ${
                activeCategory === cat.id ? 'text-primary' : 'text-slate-500 hover:text-white'
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            {t.menu.title1} <span className="text-primary">{t.menu.title2}</span>
          </h2>
          <div className="h-px flex-grow bg-white/5"></div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6"
          >
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const SpecialOfMonth = () => {
  const { lang, t } = useTranslation();
  return (
    <section id="specials" className="bg-primary py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h4 className="text-white/80 font-bold tracking-[0.4em] mb-4">
            {lang === 'es' ? 'SÓLO POR TIEMPO LIMITADO' : lang === 'ca' ? 'NOMÉS PER TEMPS LIMITAT' : lang === 'fr' ? 'TEMPS LIMITÉ UNIQUEMENT' : 'LIMITED TIME ONLY'}
          </h4>
          <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] uppercase mb-8">
            {lang === 'es' ? 'Especial del Mes' : lang === 'ca' ? 'Especial del Mes' : lang === 'fr' ? 'Spécial du Mois' : 'Special of the Month'}
          </h2>
          <p className="text-white text-xl mb-10 max-w-lg font-medium">
            {lang === 'es' ? 'Presentamos THE NEON MONSTER: Una triple hamburguesa de carne premium, cuádruple bacon y nuestra salsa red ember secreta. Disponible hasta final de mes.' : 
             lang === 'ca' ? 'Presentem THE NEON MONSTER: Una triple hamburguesa de carn premium, quàdruple bacon i la nostra salsa red ember secreta. Disponible fins a final de mes.' :
             lang === 'fr' ? 'Présentation de THE NEON MONSTER : Un triple steak de bœuf premium, quadruple bacon et notre sauce secrète red ember. Disponible jusqu\'à la fin du mois.' :
             'Introducing THE NEON MONSTER: A massive triple-stack of premium beef, quadruple bacon, and our signature red ember sauce. Available through the end of the month.'}
          </p>
          <button className="bg-black text-white px-12 py-5 rounded-lg font-black text-xl hover:scale-105 transition-transform uppercase tracking-widest shadow-2xl">
            {lang === 'es' ? 'CONSIGUE EL MONSTRUO' : lang === 'ca' ? 'ACONSEGUEIX EL MONSTRE' : lang === 'fr' ? 'OBTENEZ LE MONSTRE' : 'GET THE MONSTER'}
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative"
        >
          <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800" 
            alt="The Neon Monster"
            className="relative z-10 w-full h-auto drop-shadow-2xl hover:rotate-3 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="nosotros" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative group">
        <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <img 
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800" 
          alt="Doma Burger Craft"
          className="relative z-10 w-full h-[600px] md:h-[700px] object-cover rounded-3xl border-2 border-white/5 shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl z-20 flex items-center justify-center rotate-12 shadow-2xl">
          <Utensils className="text-white w-12 h-12" />
        </div>
      </div>
      <div>
        <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">{t.about.subtitle}</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">{t.about.title1} <br/><span className="text-primary">{t.about.title2}</span></h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>
        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
          {t.about.p1}
        </p>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          {t.about.p2}
        </p>
        <div className="flex items-center gap-8">
          <div>
            <p className="text-3xl font-black text-white">15+</p>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">{t.about.stat1}</p>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div>
            <p className="text-3xl font-black text-white">100%</p>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">{t.about.stat2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      name: "Marga V.",
      content: t.testimonials.items[0],
      rating: 5
    },
    {
      name: "Jenny N.",
      content: t.testimonials.items[1],
      rating: 5
    },
    {
      name: "Nil B.",
      content: t.testimonials.items[2],
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-24 px-6 lg:px-20 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">{t.testimonials.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase">{t.testimonials.title1} <span className="text-primary">{t.testimonials.title2}</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl relative group hover:border-primary/30 transition-all"
            >
              <Quote className="absolute top-6 right-8 text-primary/10 w-12 h-12 group-hover:text-primary/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>
              <p className="text-slate-300 text-lg mb-8 italic leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-black text-primary text-sm">
                  {t.name.charAt(0)}
                </div>
                <p className="font-bold uppercase tracking-widest text-sm">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramGrid = () => {
  const { t } = useTranslation();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % INSTAGRAM_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + INSTAGRAM_IMAGES.length) % INSTAGRAM_IMAGES.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setSelectedIdx(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...INSTAGRAM_IMAGES, ...INSTAGRAM_IMAGES];

  return (
    <section id="galeria" className="py-24 bg-zinc-950/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-12">
        <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">{t.gallery.subtitle}</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">{t.gallery.title1} <span className="text-primary">{t.gallery.title2}</span></h2>
      </div>

      <div className="relative flex">
        <motion.div 
          className="flex gap-4 px-2"
          animate={{
            x: [ "-50%", "0%" ]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedImages.map((img, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedIdx(i % INSTAGRAM_IMAGES.length)}
              className="relative flex-shrink-0 w-[90vw] md:w-[700px] aspect-square overflow-hidden cursor-pointer rounded-3xl group"
            >
              <img 
                src={img} 
                alt={`Instagram ${i}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Maximize2 className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-[110]"
            >
              <X className="w-6 h-6" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all z-[110] group"
            >
              <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all z-[110] group"
            >
              <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </button>

            <motion.div 
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={INSTAGRAM_IMAGES[selectedIdx]} 
                alt="Selected" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-black uppercase tracking-widest text-sm">
                  {t.gallery.image} {selectedIdx + 1} {t.gallery.of} {INSTAGRAM_IMAGES.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const AppPromotion = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 px-6 lg:px-20 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">{t.app.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">{t.app.title1} <br/><span className="text-primary">{t.app.title2}</span></h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
            {t.app.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-black border border-white/10 px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-zinc-900 transition-all group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
            </a>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">
              {t.app.available}
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
            alt="App Mockup" 
            className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

const OpeningHours = ({ title, hours, isOpen, icon: Icon }: { title: string, hours: { days: string, time: string }[], isOpen: boolean, icon: any }) => (
  <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="text-primary w-4 h-4" />
        </div>
        <h4 className="font-black text-xs uppercase tracking-widest">{title}</h4>
      </div>
      <span className={`text-[10px] px-2 py-1 rounded font-black tracking-tighter ${isOpen ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
        {isOpen ? 'ABIERTO' : 'CERRADO'}
      </span>
    </div>
    <div className="space-y-3">
      {hours.map((h, i) => (
        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{h.days}</span>
          <span className={`text-[11px] font-black ${h.time === 'Cerrado' ? 'text-primary/60' : 'text-white'}`}>{h.time}</span>
        </div>
      ))}
    </div>
  </div>
);

const Location = () => {
  const { t } = useTranslation();
  const [activeLocation, setActiveLocation] = useState('Tarragona');

  const tarragonaHours = [
    { days: t.locations.days.mon_tue, time: t.locations.closed },
    { days: t.locations.days.wed_thu, time: "20:30 - 23:00" },
    { days: t.locations.days.fri, time: "20:30 - 23:30" },
    { days: t.locations.days.sat, time: "13:30 - 15:00, 20:30 - 23:30" },
    { days: t.locations.days.sun, time: "13:30 - 15:00, 20:30 - 23:00" },
  ];

  const reusHours = [
    { days: t.locations.days.mon_tue, time: t.locations.closed },
    { days: t.locations.days.wed_thu, time: "20:00 - 23:00" },
    { days: t.locations.days.fri, time: "20:00 - 23:30" },
    { days: t.locations.days.sat_sun, time: "13:00 - 15:00, 20:00 - 23:30" },
  ];

  return (
    <section id="ubicaciones" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">{t.locations.subtitle}</span>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{t.locations.title1} <span className="text-primary">{t.locations.title2}</span></h2>
      </div>

      {/* Location Selector */}
      <div className="flex justify-center mb-16">
        <div className="bg-zinc-900/60 p-1.5 rounded-2xl border border-white/5 flex gap-2">
          {['Tarragona', 'Reus'].map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={`px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${
                activeLocation === loc 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-slate-500 hover:text-white'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {activeLocation === 'Tarragona' ? (
            <motion.div 
              key="tarragona"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
                <div className="w-20 h-20 bg-primary rounded-3xl flex-shrink-0 flex items-center justify-center shadow-xl shadow-primary/20">
                  <MapPin className="text-white w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-4xl font-black uppercase tracking-tight mb-2">Doma Burger <span className="text-primary">Tarragona</span></h3>
                  <p className="text-slate-400 text-lg font-medium">Carrer d'August 34 ground, Tarragona, 43003</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <OpeningHours title={t.locations.delivery_hours} hours={tarragonaHours} isOpen={true} icon={Clock} />
                <OpeningHours title={t.locations.pickup_hours} hours={tarragonaHours} isOpen={true} icon={Utensils} />
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="reus"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
                <div className="w-20 h-20 bg-zinc-800 rounded-3xl flex-shrink-0 flex items-center justify-center shadow-xl">
                  <MapPin className="text-primary w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-4xl font-black uppercase tracking-tight mb-2">Doma Burgers <span className="text-primary">Reus</span></h3>
                  <p className="text-slate-400 text-lg font-medium mb-3">Raval de Santa Anna 18 ground, Reus, 43201</p>
                  <div className="flex items-center justify-center md:justify-start gap-3 text-primary font-black text-xl">
                    <Phone className="w-6 h-6" />
                    <span>+34 683 537 933</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <OpeningHours title={t.locations.delivery_hours} hours={reusHours} isOpen={false} icon={Clock} />
                <OpeningHours title={t.locations.pickup_hours} hours={reusHours} isOpen={false} icon={Utensils} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-background-dark py-12 px-6 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <Utensils className="text-primary w-6 h-6" />
          <span className="text-lg font-bold tracking-tighter uppercase">DOMA <span className="text-primary">BURGERS</span></span>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-primary transition-all hover:scale-110">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-slate-500 hover:text-primary transition-all hover:scale-110">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-slate-500 hover:text-primary transition-all hover:scale-110">
            <Twitter size={20} />
          </a>
        </div>

        <p className="text-slate-500 text-sm">© 2024 DOMA BURGERS. {t.footer.rights} BOLD TASTE SINCE 2020.</p>
        <div className="flex gap-8">
          <a className="text-xs text-slate-400 uppercase tracking-widest hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="text-xs text-slate-400 uppercase tracking-widest hover:text-white transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const t = TRANSLATIONS[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <SpecialOfMonth />
          <MenuSection />
          <AppPromotion />
          <About />
          <Testimonials />
          <InstagramGrid />
          <Location />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
