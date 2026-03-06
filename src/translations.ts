export type Language = 'es' | 'ca' | 'en' | 'fr';

export const TRANSLATIONS = {
  es: {
    nav: {
      carta: 'CARTA',
      nosotros: 'NOSOTROS',
      testimonios: 'TESTIMONIOS',
      galeria: 'GALERÍA',
      ubicaciones: 'UBICACIONES',
      admin: 'ADMIN',
    },
    hero: {
      subtitle: 'HAMBURGUESERÍA ARTESANAL',
      title1: 'Sabor que',
      title2: 'Doma',
      title3: 'tus Sentidos',
      description: 'Carne de primera, ingredientes locales y un toque de rebeldía en cada bocado. Bienvenidos a la revolución del sabor en Tarragona y Reus.',
      cta: 'VER CARTA',
    },
    menu: {
      subtitle: 'NUESTRA SELECCIÓN',
      title1: 'La',
      title2: 'Carta',
      categories: {
        burgers: 'HAMBURGUESAS SIGNATURE',
        sides: 'ACOMPAÑANTES',
        drinks: 'BEBIDAS',
        desserts: 'POSTRES',
      },
      allergens: 'Alérgenos',
    },
    about: {
      subtitle: 'NUESTRA HISTORIA',
      title1: 'Pasión por la',
      title2: 'Perfección',
      p1: 'DOMA nació de una idea simple: las hamburguesas no deberían ser solo comida rápida, sino una experiencia gastronómica.',
      p2: 'Seleccionamos cada ingrediente con pinzas, desde el pan brioche artesano hasta nuestra mezcla secreta de carne madurada.',
      stat1: 'Carne Madurada',
      stat2: 'Ingredientes Locales',
      stat3: 'Salsas Caseras',
    },
    testimonials: {
      subtitle: 'LO QUE DICEN',
      title1: 'Vuestra',
      title2: 'Experiencia',
      items: [
        '¡Las mejores hamburguesas de la zona! La carne madurada tiene un sabor increíble y el servicio es de primera.',
        'Increíble experiencia. La Voltage Burger es picante pero deliciosa. ¡Repetiremos seguro!',
        'Un lugar con mucha personalidad. La decoración es genial y la comida aún mejor. Muy recomendado.'
      ]
    },
    gallery: {
      subtitle: 'GALERÍA',
      title1: 'Nuestro',
      title2: 'Universo',
      image: 'Imagen',
      of: 'de',
    },
    locations: {
      subtitle: 'DÓNDE ESTAMOS',
      title1: 'Nuestras',
      title2: 'Ubicaciones',
      select: 'Selecciona ciudad:',
      tarragona: 'Tarragona',
      reus: 'Reus',
      hours: 'Horarios',
      phone: 'Teléfono',
      address: 'Dirección',
      delivery_hours: 'HORARIO DELIVERY',
      pickup_hours: 'HORARIO RECOGIDA',
      closed: 'Cerrado',
      days: {
        mon_tue: 'LUN - MAR',
        wed_thu: 'MIÉ - JUE',
        fri: 'VIE',
        sat: 'SÁB',
        sun: 'DOM',
        sat_sun: 'SÁB - DOM'
      }
    },
    app: {
      subtitle: 'EXPERIENCIA DIGITAL',
      title1: 'Una nueva forma de',
      title2: 'experimentar',
      title3: 'la comida',
      description: 'Descarga nuestra app y abre un nuevo mundo de comida al alcance de tu mano. Disfruta de ofertas exclusivas y seguimiento en tiempo real.',
      available: 'DISPONIBLE EN GOOGLE PLAY'
    },
    footer: {
      description: 'Redefiniendo el concepto de hamburguesa artesanal con pasión y calidad.',
      links: 'Enlaces Rápidos',
      social: 'Síguenos',
      rights: 'Todos los derechos reservados.',
    }
  },
  ca: {
    nav: {
      carta: 'CARTA',
      nosotros: 'NOSALTRES',
      testimonios: 'TESTIMONIS',
      galeria: 'GALERIA',
      ubicaciones: 'UBICACIONS',
      admin: 'ADMIN',
    },
    hero: {
      subtitle: 'HAMBURGUESERIA ARTESANAL',
      title1: 'Sabor que',
      title2: 'Doma',
      title3: 'els teus Sentits',
      description: 'Carn de primera, ingredients locals i un toc de rebel·lia en cada mossegada. Benvinguts a la revolució del sabor a Tarragona i Reus.',
      cta: 'VEURE CARTA',
    },
    menu: {
      subtitle: 'LA NOSTRA SELECCIÓ',
      title1: 'La',
      title2: 'Carta',
      categories: {
        burgers: 'HAMBURGUESES SIGNATURE',
        sides: 'ACOMPANYAMENTS',
        drinks: 'BEGUDES',
        desserts: 'POSTRES',
      },
      allergens: 'Al·lèrgens',
    },
    about: {
      subtitle: 'LA NOSTRA HISTÒRIA',
      title1: 'Passió per la',
      title2: 'Perfecció',
      p1: 'DOMA va néixer d\'una idea simple: les hamburgueses no haurien de ser només menjar ràpid, sinó una experiència gastronòmica.',
      p2: 'Seleccionem cada ingredient amb pinces, des del pa brioche artesà fins a la nostra barreja secreta de carn madurada.',
      stat1: 'Carn Madurada',
      stat2: 'Ingredients Locals',
      stat3: 'Salses Caseres',
    },
    testimonials: {
      subtitle: 'EL QUE DIUEN',
      title1: 'La vostra',
      title2: 'Experiència',
      items: [
        'Les millors hamburgueses de la zona! La carn madurada té un sabor increïble i el servei és de primera.',
        'Increïble experiència. La Voltage Burger és picant però deliciosa. Repetirem segur!',
        'Un lloc amb molta personalitat. La decoració és genial i el menjar encara millor. Molt recomanat.'
      ]
    },
    gallery: {
      subtitle: 'GALERIA',
      title1: 'El nostre',
      title2: 'Univers',
      image: 'Imatge',
      of: 'de',
    },
    locations: {
      subtitle: 'ON SOM',
      title1: 'Les nostres',
      title2: 'Ubicacions',
      select: 'Selecciona ciutat:',
      tarragona: 'Tarragona',
      reus: 'Reus',
      hours: 'Horaris',
      phone: 'Telèfon',
      address: 'Adreça',
      delivery_hours: 'HORARI DELIVERY',
      pickup_hours: 'HORARI RECOLLIDA',
      closed: 'Tancat',
      days: {
        mon_tue: 'DLL - DT',
        wed_thu: 'DC - DJ',
        fri: 'DV',
        sat: 'DS',
        sun: 'DG',
        sat_sun: 'DS - DG'
      }
    },
    app: {
      subtitle: 'EXPERIÈNCIA DIGITAL',
      title1: 'Una nova forma d\'',
      title2: 'experimentar',
      title3: 'el menjar',
      description: 'Descarrega la nostra app i obre un nou món de menjar a l\'abast de la teva mà. Gaudeix d\'ofertes exclusives i seguiment en temps real.',
      available: 'DISPONIBLE A GOOGLE PLAY'
    },
    footer: {
      description: 'Redefinint el concepte d\'hamburguesa artesanal amb passió i qualitat.',
      links: 'Enllaços Ràpids',
      social: 'Segueix-nos',
      rights: 'Tots els drets reservats.',
    }
  },
  en: {
    nav: {
      carta: 'MENU',
      nosotros: 'ABOUT',
      testimonios: 'REVIEWS',
      galeria: 'GALLERY',
      ubicaciones: 'LOCATIONS',
      admin: 'ADMIN',
    },
    hero: {
      subtitle: 'ARTISANAL BURGER SHOP',
      title1: 'Flavor that',
      title2: 'Tames',
      title3: 'your Senses',
      description: 'Premium meat, local ingredients, and a touch of rebellion in every bite. Welcome to the flavor revolution in Tarragona and Reus.',
      cta: 'VIEW MENU',
    },
    menu: {
      subtitle: 'OUR SELECTION',
      title1: 'The',
      title2: 'Menu',
      categories: {
        burgers: 'SIGNATURE BURGERS',
        sides: 'SIDES',
        drinks: 'DRINKS',
        desserts: 'DESSERTS',
      },
      allergens: 'Allergens',
    },
    about: {
      subtitle: 'OUR STORY',
      title1: 'Passion for',
      title2: 'Perfection',
      p1: 'DOMA was born from a simple idea: burgers shouldn\'t just be fast food, but a gastronomic experience.',
      p2: 'We select every ingredient carefully, from artisanal brioche bread to our secret dry-aged meat blend.',
      stat1: 'Dry-Aged Meat',
      stat2: 'Local Ingredients',
      stat3: 'Homemade Sauces',
    },
    testimonials: {
      subtitle: 'WHAT THEY SAY',
      title1: 'Your',
      title2: 'Experience',
      items: [
        'Best burgers in the area! The dry-aged meat has an incredible flavor and the service is top-notch.',
        'Amazing experience. The Voltage Burger is spicy but delicious. We will definitely be back!',
        'A place with a lot of personality. The decor is great and the food even better. Highly recommended.'
      ]
    },
    gallery: {
      subtitle: 'GALLERY',
      title1: 'Our',
      title2: 'Universe',
      image: 'Image',
      of: 'of',
    },
    locations: {
      subtitle: 'WHERE WE ARE',
      title1: 'Our',
      title2: 'Locations',
      select: 'Select city:',
      tarragona: 'Tarragona',
      reus: 'Reus',
      hours: 'Opening Hours',
      phone: 'Phone',
      address: 'Address',
      delivery_hours: 'DELIVERY HOURS',
      pickup_hours: 'PICKUP HOURS',
      closed: 'Closed',
      days: {
        mon_tue: 'MON - TUE',
        wed_thu: 'WED - THU',
        fri: 'FRI',
        sat: 'SAT',
        sun: 'SUN',
        sat_sun: 'SAT - SUN'
      }
    },
    app: {
      subtitle: 'DIGITAL EXPERIENCE',
      title1: 'A new way to',
      title2: 'experience',
      title3: 'food',
      description: 'Download our app and open a new world of food at your fingertips. Enjoy exclusive offers and real-time tracking.',
      available: 'AVAILABLE ON GOOGLE PLAY'
    },
    footer: {
      description: 'Redefining the artisanal burger concept with passion and quality.',
      links: 'Quick Links',
      social: 'Follow Us',
      rights: 'All rights reserved.',
    }
  },
  fr: {
    nav: {
      carta: 'CARTE',
      nosotros: 'À PROPOS',
      testimonios: 'AVIS',
      galeria: 'GALERIE',
      ubicaciones: 'LIEUX',
      admin: 'ADMIN',
    },
    hero: {
      subtitle: 'BURGERIE ARTISANALE',
      title1: 'Une saveur qui',
      title2: 'Dompte',
      title3: 'vos Sens',
      description: 'Viande de première qualité, ingrédients locaux et une touche de rébellion dans chaque bouchée. Bienvenue à la révolution des saveurs à Tarragone et Reus.',
      cta: 'VOIR LA CARTE',
    },
    menu: {
      subtitle: 'NOTRE SÉLECTION',
      title1: 'La',
      title2: 'Carte',
      categories: {
        burgers: 'BURGERS SIGNATURE',
        sides: 'ACCOMPAGNEMENTS',
        drinks: 'BOISSONS',
        desserts: 'DESSERTS',
      },
      allergens: 'Allergènes',
    },
    about: {
      subtitle: 'NOTRE HISTOIRE',
      title1: 'Passion pour la',
      title2: 'Perfection',
      p1: 'DOMA est né d\'une idée simple : les burgers ne devraient pas être seulement de la restauration rapide, mais une expérience gastronomique.',
      p2: 'Nous sélectionnons chaque ingrédient avec soin, du pain brioché artisanal à notre mélange secret de viande maturée.',
      stat1: 'Viande Maturée',
      stat2: 'Ingrédients Locaux',
      stat3: 'Sauces Maison',
    },
    testimonials: {
      subtitle: 'CE QU\'ILS DISENT',
      title1: 'Votre',
      title2: 'Expérience',
      items: [
        'Les meilleurs burgers du coin ! La viande maturée a une saveur incroyable et le service est de premier ordre.',
        'Expérience incroyable. Le Voltage Burger est épicé mais délicieux. Nous reviendrons à coup sûr !',
        'Un endroit avec beaucoup de personnalité. Le décor est génial et la nourriture encore meilleure. Hautement recommandé.'
      ]
    },
    gallery: {
      subtitle: 'GALERIE',
      title1: 'Notre',
      title2: 'Univers',
      image: 'Image',
      of: 'sur',
    },
    locations: {
      subtitle: 'OÙ NOUS SOMMES',
      title1: 'Nos',
      title2: 'Emplacements',
      select: 'Sélectionnez une ville :',
      tarragona: 'Tarragone',
      reus: 'Reus',
      hours: 'Horaires',
      phone: 'Téléphone',
      address: 'Adresse',
      delivery_hours: 'HORAIRES LIVRAISON',
      pickup_hours: 'HORAIRES RETRAIT',
      closed: 'Fermé',
      days: {
        mon_tue: 'LUN - MAR',
        wed_thu: 'MER - JEU',
        fri: 'VEN',
        sat: 'SAM',
        sun: 'DIM',
        sat_sun: 'SAM - DIM'
      }
    },
    app: {
      subtitle: 'EXPÉRIENCE NUMÉRIQUE',
      title1: 'Une nouvelle façon d\'',
      title2: 'expérimenter',
      title3: 'la nourriture',
      description: 'Téléchargez notre application et ouvrez un nouveau monde de nourriture à portée de main. Profitez d\'offres exclusives et d\'un suivi en temps réel.',
      available: 'DISPONIBLE SUR GOOGLE PLAY'
    },
    footer: {
      description: 'Redéfinir le concept du burger artisanal avec passion et qualité.',
      links: 'Liens Rapides',
      social: 'Suivez-nous',
      rights: 'Tous droits réservés.',
    }
  }
};

export const MENU_TRANSLATIONS = {
  es: {
    'Neon Classic': {
      name: 'Neon Classic',
      description: 'Doble carne de primera, cheddar curado, salsa neon secreta, brioche tostado.',
    },
    'Voltage Burger': {
      name: 'Voltage Burger',
      description: 'Jalapeños picantes, queso pepper jack, alioli de habanero, cebolla crujiente.',
    },
    'Electric BBQ': {
      name: 'Electric BBQ',
      description: 'Brisket ahumado 12h, salsa BBQ al bourbon, aros de cebolla a la cerveza.',
    },
    'Cyber Bacon': {
      name: 'Cyber Bacon',
      description: 'Bacon crujiente al arce, alioli de ajo, pepinillos caseros, mermelada de cebolla roja.',
    },
    'Plasma Patty': {
      name: 'Plasma Patty',
      description: 'Hamburguesa vegetal premium, aguacate machacado, ensalada de col y lima.',
    },
    'Atomic Cheese': {
      name: 'Atomic Cheese',
      description: 'Triple mezcla de suizo, muenster y provolone, mayo de trufa, champiñones a la brasa.',
    },
    'Neon Fries': {
      name: 'Patatas Neon',
      description: 'Patatas cortadas a mano con doble fritura y nuestra sal rosa exclusiva.',
    },
    'Cyber Rings': {
      name: 'Aros Cyber',
      description: 'Aros de cebolla a la cerveza con salsa ranch picante.',
    },
    'Plasma Shake': {
      name: 'Batido Plasma',
      description: 'Batido vibrante de fresa y fruta del dragón con virutas neon.',
    },
    'Neon Soda': {
      name: 'Soda Neon',
      description: 'Soda de frambuesa azul casera con un toque de lima.',
    },
    'Cyber Brownie': {
      name: 'Brownie Cyber',
      description: 'Brownie de chocolate negro caliente con glaseado de menta verde neon.',
    }
  },
  ca: {
    'Neon Classic': {
      name: 'Neon Classic',
      description: 'Doble carn de primera, cheddar curat, salsa neon secreta, brioche torrat.',
    },
    'Voltage Burger': {
      name: 'Voltage Burger',
      description: 'Jalapeños picants, formatge pepper jack, allioli d\'habanero, ceba cruixent.',
    },
    'Electric BBQ': {
      name: 'Electric BBQ',
      description: 'Brisket fumat 12h, salsa BBQ al bourbon, anelles de ceba a la cervesa.',
    },
    'Cyber Bacon': {
      name: 'Cyber Bacon',
      description: 'Bacon cruixent a l\'arce, allioli d\'all, pebrins casolans, melmelada de ceba roja.',
    },
    'Plasma Patty': {
      name: 'Plasma Patty',
      description: 'Hamburguesa vegetal premium, aguacat aixafat, amanida de col i llima.',
    },
    'Atomic Cheese': {
      name: 'Atomic Cheese',
      description: 'Triple barreja de suís, muenster i provolone, maionesa de tòfona, xampinyons a la brasa.',
    },
    'Neon Fries': {
      name: 'Patates Neon',
      description: 'Patates tallades a mà amb doble fritura i la nostra sal rosa exclusiva.',
    },
    'Cyber Rings': {
      name: 'Anelles Cyber',
      description: 'Anelles de ceba a la cervesa amb salsa ranch picant.',
    },
    'Plasma Shake': {
      name: 'Batut Plasma',
      description: 'Batut vibrant de maduixa i fruita del drac amb encenalls neon.',
    },
    'Neon Soda': {
      name: 'Soda Neon',
      description: 'Soda de gerd blau casolana amb un toc de llima.',
    },
    'Cyber Brownie': {
      name: 'Brownie Cyber',
      description: 'Brownie de xocolata negra calenta amb glaçat de menta verda neon.',
    }
  },
  en: {
    'Neon Classic': {
      name: 'Neon Classic',
      description: 'Double prime beef, aged cheddar, secret neon sauce, toasted brioche.',
    },
    'Voltage Burger': {
      name: 'Voltage Burger',
      description: 'Spicy jalapeños, pepper jack cheese, habanero aioli, crispy onions.',
    },
    'Electric BBQ': {
      name: 'Electric BBQ',
      description: '12-hour smoked brisket, bourbon BBQ sauce, beer-battered onion rings.',
    },
    'Cyber Bacon': {
      name: 'Cyber Bacon',
      description: 'Crispy maple bacon, garlic aioli, house pickles, red onion jam.',
    },
    'Plasma Patty': {
      name: 'Plasma Patty',
      description: 'Premium plant-based patty, smashed avocado, cilantro-lime slaw.',
    },
    'Atomic Cheese': {
      name: 'Atomic Cheese',
      description: 'Triple blend of Swiss, Muenster & Provolone, truffle mayo, grilled shrooms.',
    },
    'Neon Fries': {
      name: 'Neon Fries',
      description: 'Double-fried hand-cut potatoes with our signature pink salt.',
    },
    'Cyber Rings': {
      name: 'Cyber Rings',
      description: 'Beer-battered onion rings with spicy ranch dip.',
    },
    'Plasma Shake': {
      name: 'Plasma Shake',
      description: 'Vibrant strawberry and dragonfruit milkshake with neon sprinkles.',
    },
    'Neon Soda': {
      name: 'Neon Soda',
      description: 'House-made blue raspberry soda with a hint of lime.',
    },
    'Cyber Brownie': {
      name: 'Cyber Brownie',
      description: 'Warm dark chocolate brownie with neon green mint frosting.',
    }
  },
  fr: {
    'Neon Classic': {
      name: 'Néon Classique',
      description: 'Double bœuf de première qualité, cheddar affiné, sauce néon secrète, brioche grillée.',
    },
    'Voltage Burger': {
      name: 'Voltage Burger',
      description: 'Jalapeños épicés, fromage pepper jack, aïoli au habanero, oignons croustillants.',
    },
    'Electric BBQ': {
      name: 'Electric BBQ',
      description: 'Poitrine fumée 12h, sauce BBQ au bourbon, rondelles d\'oignon à la bière.',
    },
    'Cyber Bacon': {
      name: 'Cyber Bacon',
      description: 'Bacon croustillant à l\'érable, aïoli à l\'ail, cornichons maison, confiture d\'oignons rouges.',
    },
    'Plasma Patty': {
      name: 'Plasma Patty',
      description: 'Galette végétale premium, avocat écrasé, salade de chou à la lime.',
    },
    'Atomic Cheese': {
      name: 'Fromage Atomique',
      description: 'Triple mélange de suisse, muenster et provolone, mayo à la truffe, champignons grillés.',
    },
    'Neon Fries': {
      name: 'Frites Néon',
      description: 'Pommes de terre coupées à la main doublement frites avec notre sel rose exclusif.',
    },
    'Cyber Rings': {
      name: 'Rondelles Cyber',
      description: 'Rondelles d\'oignon à la bière avec sauce ranch épicée.',
    },
    'Plasma Shake': {
      name: 'Milkshake Plasma',
      description: 'Milkshake vibrant à la fraise et au fruit du dragon avec pépites néon.',
    },
    'Neon Soda': {
      name: 'Soda Néon',
      description: 'Soda à la framboise bleue maison avec une touche de lime.',
    },
    'Cyber Brownie': {
      name: 'Brownie Cyber',
      description: 'Brownie au chocolat noir chaud avec glaçage à la menthe verte néon.',
    }
  }
};
