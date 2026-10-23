/*
  Site-wide ES/EN toggle (nav, section labels, RSVP copy, stub notes).
  Does NOT govern the Letters section — those show Spanish + English
  transcripts together, always, regardless of this toggle. See index.html
  §5 comment.
*/

const translations = {
  es: {
    'image.pending': 'Imagen pendiente',
    'image.pendingAria': 'Imagen pendiente para Maria Consuelo y Olivia',
    'footer.credit': 'Diseño y desarrollo por Atlas Tech &amp; Design',
    'nav.itinerary': 'Itinerario',
    'nav.rsvp': 'RSVP',
    'nav.hotels': 'Hospedaje',
    'nav.dresscode': 'Dresscode',
    'nav.gifts': 'Mesa de regalos',
    'nav.gallery': 'Galería',

    'cover.eyebrow': 'Nos casamos',
    'cover.meta': '<span class="cover__date">13 DE MARZO, 2027</span><span class="cover__dot"> &nbsp;&middot;&nbsp; </span><span class="cover__place">SAN CARLOS, SONORA</span>',
    'cover.date': '13 de marzo, 2027',
    'cover.city': 'San Carlos, Sonora',

    'details.eyebrow': 'Detalles',
    'details.title': 'Ceremonia &amp; Fiesta',
    'details.stub': 'Detalles del evento confirmados.',
    'details.ceremonyTitle': 'Ceremonia',
    'details.ceremonyDatetime': 'Sábado 13 de marzo de 2027 &middot; 3:00 p.m.',
    'details.ceremonyVenue': 'Kite Club San Carlos<br />Boulevard Manlio Fabio Beltrones km. 19.7, Módulo 3<br />Algodones, 85506 San Carlos, Sonora',
    'details.ceremonyDesc': '',
    'details.receptionTitle': 'Fiesta',
    'details.receptionDatetime': 'Sábado 13 de marzo de 2027 &middot; 4:00 p.m.',
    'details.receptionVenue': 'Kite Club San Carlos<br />Boulevard Manlio Fabio Beltrones km. 19.7, Módulo 3<br />Algodones, 85506 San Carlos, Sonora',
    'details.receptionDesc': '',
    'details.mapLink': 'Ver en Google Maps →',
    'details.mapDisclaimer': '',

    'itinerary.eyebrow': 'Itinerario',
    'itinerary.title': 'Día 01 &amp; Día 02',
    'itinerary.stub': 'Pendiente: agenda de cada día y qué invitados asisten a cuál.',

    'rsvp.eyebrow': 'RSVP',
    'rsvp.title': 'Confirma tu asistencia',
    'rsvp.deadline': 'Agradeceremos confirmar tu asistencia a más tardar el <span class="missing-info">1 de diciembre (año por confirmar)</span>.',
    'rsvp.pending': 'El sistema de confirmación está pendiente de configuración.',
    'rsvp.searchPrompt': 'Escribe tu nombre para buscar tu invitación.',
    'rsvp.searchPlaceholder': 'Tu nombre',
    'rsvp.searchButton': 'Buscar mi invitación',
    'rsvp.daysLabel': '¿A qué día(s) asistes?',
    'rsvp.day1': 'Día 01',
    'rsvp.day2': 'Día 02',
    'rsvp.partyLabel': '¿Cuántos de tu invitación asistirán (incluyéndote)?',
    'rsvp.mealLabel': 'Selección de menú',
    'rsvp.mealRegular': 'Regular',
    'rsvp.mealVeg': 'Vegetariano',
    'rsvp.mealVegan': 'Vegano',
    'rsvp.kidsLabel': '¿Asisten niños?',
    'rsvp.yes': 'Sí',
    'rsvp.no': 'No',
    'rsvp.submit': 'Enviar RSVP',
    'rsvp.thanks': '¡Gracias por confirmar!',

    'letters.eyebrow': 'Cartas',
    'letters.title': 'Para los novios',
    'letters.stub': 'Pendiente: diseño final de cada carta (hecho en Canva por la pareja).',

    'hotels.eyebrow': 'Hospedaje',
    'hotels.title': 'Dónde quedarse',
    'hotels.instruction': '',
    'hotels.intro': '',
    'hotels.stub': 'Pendiente: confirmar los dos hoteles recomendados por la organizadora.',
    'hotels.pending': 'Pendiente: confirmar los dos hoteles recomendados por la organizadora.',

    'dresscode.eyebrow': 'Dresscode',
    'dresscode.title': 'Dresscode',
    'dresscode.stub': 'Pendiente: código de vestimenta para cada día del evento.',
    'dresscode.womenLabel': 'Mujeres &middot; Relajado - formal - playero',
    'dresscode.womenDesc': 'Vestidos largos o midi, vaporosos, telas ligeras, colores y estampados que se sientan elegantes, frescos y perfectos para celebrar junto al mar.',
    'dresscode.menLabel': 'Hombres &middot; Relajado - formal - playero',
    'dresscode.menDesc': 'Traje de lino, acompañado de camisa y zapatos acordes a una celebración en la playa.',
    'dresscode.note': 'Toma en cuenta que gran parte del evento será sobre arena. Las guayaberas son muy lindas, pero esta vez no forman parte del dress code de la boda.',
    'dresscode.moodboardQ': '¿Todavía tienes dudas sobre qué ponerte?',
    'dresscode.moodboardText': 'Échale un vistazo a nuestro moodboard en Pinterest para inspirarte y conocer mejor el estilo que imaginamos para este día.',
    'dresscode.moodboardLink': 'Enlace del moodboard pendiente.',

    'gifts.eyebrow': 'Regalos',
    'gifts.title': 'Mesa de regalos',
    'gifts.text': 'No tendremos mesa de regalos. Para nosotros, el mejor regalo es compartir este día tan especial con ustedes. Si aun así desean darnos algo, pueden hacernos una transferencia bancaria.',
    'gifts.pending': 'Datos de transferencia y montos sugeridos: <span class="missing-info">pendientes de confirmar.</span>',
    'gifts.mirnaLabel': '',
    'gifts.mirnaBank': '',
    'gifts.jmLabel': '',
    'gifts.jmBank': '',
    'gifts.copy': 'Copiar',
    'gifts.copied': '¡Copiado!',

    'gallery.eyebrow': 'Galería',
    'gallery.title': 'Nuestros momentos',
    'gallery.stub': 'Pendiente: set final de fotos de compromiso.',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Preguntas frecuentes',
    'faq.stub': 'Pendiente: confirmar fecha y datos no incluidos en el documento.',
    'faq.q1': '¿A qué hora es la ceremonia y la recepción?',
    'faq.a1': '<p>La ceremonia es el sábado 13 de marzo de 2027 a las 3:00 p.m. y la fiesta comienza a las 4:00 p.m. en Kite Club San Carlos, Boulevard Manlio Fabio Beltrones km. 19.7, Módulo 3, Algodones, 85506 San Carlos, Sonora.</p>',
    'faq.q2': '¿En qué hotel me puedo quedar?',
    'faq.a2': '<p class="missing-info">Pendiente: la organizadora sugirió dos hoteles; falta confirmar sus nombres.</p>',
    'faq.q3': '¿Cómo llego del aeropuerto a la zona de la boda?',
    'faq.a3': '<p>Si llegas al Aeropuerto Internacional de Hermosillo, Sonora, sugerimos rentar un vehículo para trasladarte a San Carlos. El tiempo aproximado de traslado es de 1 hora con 10 minutos.</p>',
    'faq.q4': '¿Puedo dar un regalo en efectivo o transferencia?',
    'faq.a4': '<p>Sí. <span class="missing-info">Los datos de la cuenta bancaria están pendientes de confirmar.</span></p>',
    'faq.q5': '¿Puedo llevar niños?',
    'faq.a5': '<p>Nos encantan las niñas y los niños, pero en esta ocasión únicamente podrán acompañarnos los menores de nuestra familia nuclear.</p><p>Gracias por ayudarnos a mantener este día tan especial tal como lo hemos planeado.</p>',
    'faq.q6': '¿Hay fecha límite para confirmar asistencia (RSVP)?',
    'faq.a6': '<p>Agradeceremos confirmar tu asistencia a más tardar el <span class="missing-info">1 de diciembre (año por confirmar)</span>. Después de esta fecha, asumiremos que no podrás acompañarnos y no podremos garantizar tu lugar.</p>',
    'faq.q7': '¿Qué tipo de comida se servirá?',
    'faq.a7': '<p>Nuestro menú incluirá ingredientes del mar. <span class="missing-info">El menú completo está pendiente de confirmar.</span></p>',
    'faq.q8': '¿A qué hora termina el evento?',
    'faq.a8': '<p>La celebración durará aproximadamente 8 horas y la música terminará a las 11:30 p.m. para respetar las normas del establecimiento y de la playa.</p>',
    'faq.q9': '¿Hay estacionamiento en la recepción?',
    'faq.a9': '<p>Hay un estacionamiento privado de varios negocios aledaños al establecimiento. <span class="missing-info">El costo por vehículo está pendiente de confirmar.</span></p>',
    'faq.q10': '¿Puedo llevar acompañante (+1)?',
    'faq.a10': '<p>Si tu invitación incluye un +1, puedes venir con acompañante. Si tu invitación es individual, significa que hemos reservado ese lugar especialmente para ti.</p>',
    'faq.q11': '',
    'faq.a11': '',
    'faq.q12': '¿Qué clima hace en marzo?',
    'faq.a12': '<p>Día: máxima de 24–25 °C (aprox.). Noche: mínima de 13–16 °C (aprox.). Te recomendamos llevar un saco, suéter o chal para disfrutar cómodamente.</p>',
  },
  en: {
    'image.pending': 'Image pending',
    'image.pendingAria': 'Image pending for Maria Consuelo and Olivia',
    'footer.credit': 'Design and development by Atlas Tech &amp; Design',
    'nav.itinerary': 'Itinerary',
    'nav.rsvp': 'RSVP',
    'nav.hotels': 'Hotels',
    'nav.dresscode': 'Dresscode',
    'nav.gifts': 'Registry',
    'nav.gallery': 'Gallery',

    'cover.eyebrow': "We're getting married",
    'cover.meta': '<span class="cover__date">MARCH 13, 2027</span><span class="cover__dot"> &nbsp;&middot;&nbsp; </span><span class="cover__place">SAN CARLOS, SONORA</span>',
    'cover.date': 'March 13, 2027',
    'cover.city': 'San Carlos, Sonora',

    'details.eyebrow': 'Details',
    'details.title': 'Ceremony &amp; Celebration',
    'details.stub': 'Event details confirmed.',
    'details.ceremonyTitle': 'Ceremony',
    'details.ceremonyDatetime': 'Saturday, March 13, 2027 &middot; 3:00 pm',
    'details.ceremonyVenue': 'Kite Club San Carlos<br />Boulevard Manlio Fabio Beltrones km. 19.7, Módulo 3<br />Algodones, 85506 San Carlos, Sonora',
    'details.ceremonyDesc': '',
    'details.receptionTitle': 'Celebration',
    'details.receptionDatetime': 'Saturday, March 13, 2027 &middot; 4:00 pm',
    'details.receptionVenue': 'Kite Club San Carlos<br />Boulevard Manlio Fabio Beltrones km. 19.7, Módulo 3<br />Algodones, 85506 San Carlos, Sonora',
    'details.receptionDesc': '',
    'details.mapLink': 'See on Google Maps →',
    'details.mapDisclaimer': '',

    'itinerary.eyebrow': 'Itinerary',
    'itinerary.title': 'Day 01 &amp; Day 02',
    'itinerary.stub': "Pending: each day's schedule and which guests are invited to which.",

    'rsvp.eyebrow': 'RSVP',
    'rsvp.title': 'Confirm your attendance',
    'rsvp.deadline': 'Please confirm your attendance by <span class="missing-info">December 1 (year to be confirmed)</span>.',
    'rsvp.pending': 'The RSVP system is pending configuration.',
    'rsvp.searchPrompt': 'Type your name to find your invitation.',
    'rsvp.searchPlaceholder': 'Your name',
    'rsvp.searchButton': 'Find my invitation',
    'rsvp.daysLabel': 'Which day(s) are you attending?',
    'rsvp.day1': 'Day 01',
    'rsvp.day2': 'Day 02',
    'rsvp.partyLabel': 'How many from your invitation will attend (including you)?',
    'rsvp.mealLabel': 'Meal selection',
    'rsvp.mealRegular': 'Regular',
    'rsvp.mealVeg': 'Vegetarian',
    'rsvp.mealVegan': 'Vegan',
    'rsvp.kidsLabel': 'Are kids attending?',
    'rsvp.yes': 'Yes',
    'rsvp.no': 'No',
    'rsvp.submit': 'Submit RSVP',
    'rsvp.thanks': 'Thank you for confirming!',

    'letters.eyebrow': 'Letters',
    'letters.title': 'For the couple',
    'letters.stub': 'Pending: final design for each letter (made in Canva by the couple).',

    'hotels.eyebrow': 'Hotels',
    'hotels.title': 'Where to stay',
    'hotels.instruction': '',
    'hotels.intro': '',
    'hotels.stub': 'Pending: confirm the two hotels recommended by the planner.',
    'hotels.pending': 'Pending: confirm the two hotels recommended by the planner.',

    'dresscode.eyebrow': 'Dresscode',
    'dresscode.title': 'Dresscode',
    'dresscode.stub': 'Pending: dress code for each day of the event.',
    'dresscode.womenLabel': 'Women &middot; Relaxed - formal - beach',
    'dresscode.womenDesc': 'Long or midi dresses, flowing styles, light fabrics, colors and prints that feel elegant, fresh, and perfect for celebrating by the sea.',
    'dresscode.menLabel': 'Men &middot; Relaxed - formal - beach',
    'dresscode.menDesc': 'A linen suit, with a shirt and shoes suited to a beach celebration.',
    'dresscode.note': 'Please note that much of the event will take place on sand. Guayaberas are lovely, but this time they are not part of the wedding dress code.',
    'dresscode.moodboardQ': 'Still not sure what to wear?',
    'dresscode.moodboardText': 'Take a look at our Pinterest moodboard for inspiration and to get a better feel for the style we have in mind for this day.',
    'dresscode.moodboardLink': 'Moodboard link pending.',

    'gifts.eyebrow': 'Gifts',
    'gifts.title': 'Registry',
    'gifts.text': 'We will not have a gift registry. For us, the best gift is sharing this special day with you. If you would still like to give us something, you may send a bank transfer.',
    'gifts.pending': 'Bank transfer details and suggested amounts: <span class="missing-info">pending confirmation.</span>',
    'gifts.mirnaLabel': '',
    'gifts.mirnaBank': '',
    'gifts.jmLabel': '',
    'gifts.jmBank': '',
    'gifts.copy': 'Copy',
    'gifts.copied': 'Copied!',

    'gallery.eyebrow': 'Gallery',
    'gallery.title': 'Our moments',
    'gallery.stub': 'Pending: final set of engagement photos.',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Frequently asked questions',
    'faq.stub': 'Pending: details not included in the document.',
    'faq.q1': 'What time are the ceremony and reception?',
    'faq.a1': '<p>The ceremony is on Saturday, March 13, 2027 at 3:00 pm, and the celebration begins at 4:00 pm at Kite Club San Carlos, Boulevard Manlio Fabio Beltrones km. 19.7, Módulo 3, Algodones, 85506 San Carlos, Sonora.</p>',
    'faq.q2': 'Which hotel can I stay at?',
    'faq.a2': '<p class="missing-info">Pending: the planner suggested two hotels; their names still need confirmation.</p>',
    'faq.q3': 'How do I get from the airport to the wedding area?',
    'faq.a3': '<p>If you arrive at Hermosillo International Airport in Sonora, we suggest renting a vehicle to travel to San Carlos. The approximate travel time is 1 hour and 10 minutes.</p>',
    'faq.q4': 'Can I give a cash or bank transfer gift?',
    'faq.a4': '<p>Yes. <span class="missing-info">Bank account details are pending confirmation.</span></p>',
    'faq.q5': 'Can I bring kids?',
    'faq.a5': '<p>We love children, but on this occasion only children in our immediate family will be able to join us.</p><p>Thank you for helping us keep this special day exactly as we have planned it.</p>',
    'faq.q6': 'Is there an RSVP deadline?',
    'faq.a6': '<p>Please confirm your attendance by <span class="missing-info">December 1 (year to be confirmed)</span>. After this date, we will assume you cannot join us and cannot guarantee your place.</p>',
    'faq.q7': 'What kind of food will be served?',
    'faq.a7': '<p>Our menu will include seafood ingredients. <span class="missing-info">The full menu is pending confirmation.</span></p>',
    'faq.q8': 'What time does the event end?',
    'faq.a8': '<p>The celebration will last approximately 8 hours, and music will end at 11:30 pm to respect the venue and beach regulations.</p>',
    'faq.q9': 'Is there parking at the reception?',
    'faq.a9': '<p>There is a private parking lot shared by several nearby businesses. <span class="missing-info">The cost per vehicle is pending confirmation.</span></p>',
    'faq.q10': 'Can I bring a plus-one?',
    'faq.a10': '<p>If your invitation includes a +1, you\'re welcome to bring a guest. If your invitation is individual, it means we\'ve reserved that spot especially for you.</p>',
    'faq.q11': '',
    'faq.a11': '',
    'faq.q12': 'What is the weather like in March?',
    'faq.a12': '<p>Day: highs of approximately 24–25 °C (75–77 °F). Night: lows of approximately 13–16 °C (55–61 °F). We recommend bringing a blazer, sweater, or shawl to stay comfortable.</p>',
  },
};

const LANG_KEY = 'mjm-lang';

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = translations[lang][key];
    if (value !== undefined) el.setAttribute('placeholder', value);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    const value = translations[lang][key];
    if (value !== undefined) el.setAttribute('aria-label', value);
  });

  const esLabel = document.querySelector('.lang-toggle__es');
  const enLabel = document.querySelector('.lang-toggle__en');
  if (esLabel && enLabel) {
    esLabel.classList.toggle('is-active', lang === 'es');
    enLabel.classList.toggle('is-active', lang === 'en');
  }

  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* private browsing or storage disabled — language just won't persist */
  }
}

function initLang() {
  let saved = 'es';
  try {
    saved = localStorage.getItem(LANG_KEY) || 'es';
  } catch (e) {
    /* ignore */
  }
  applyLang(saved);

  document.getElementById('langToggle').addEventListener('click', () => {
    const current = document.documentElement.lang === 'en' ? 'en' : 'es';
    applyLang(current === 'es' ? 'en' : 'es');
  });
}

initLang();
