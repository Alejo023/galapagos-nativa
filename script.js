// IMPORTANTE: cambia este número por el WhatsApp comercial real, con código de país y solo dígitos.
// Ejemplo de formato para Ecuador: 5939XXXXXXXX
const WHATSAPP_NUMBER = '593XXXXXXXXX';
let currentLang = 'es';

function updateWhatsAppLinks() {
  const ready = /^\d{10,15}$/.test(WHATSAPP_NUMBER);
  const directMessage = currentLang === 'es'
    ? 'Hola, quisiera información para organizar mi viaje a Galápagos con Galápagos Nativa.'
    : 'Hello, I would like information to plan my trip to Galápagos with Galápagos Nativa.';
  const url = ready ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(directMessage)}` : '#contacto';
  document.querySelectorAll('.direct-whatsapp, .floating-whatsapp').forEach(link => {
    link.href = url;
    if (!ready) {
      link.addEventListener('click', event => {
        event.preventDefault();
        alert(currentLang === 'es' ? 'Antes de publicar, agrega el número real de WhatsApp en script.js.' : 'Before publishing, add the real WhatsApp number in script.js.');
      }, { once: true });
    }
  });
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    const value = el.dataset[lang];
    if (value !== undefined) {
      if (el.tagName === 'H1' || el.tagName === 'H2') el.innerHTML = value.replace(/\n/g, '<br>');
      else el.textContent = value;
    }
  });
  document.querySelectorAll('[data-placeholder-es][data-placeholder-en]').forEach(el => {
    el.placeholder = el.dataset[`placeholder${lang === 'es' ? 'Es' : 'En'}`];
  });
  const switcher = document.getElementById('langSwitch');
  switcher.textContent = lang === 'es' ? 'EN' : 'ES';
  switcher.setAttribute('aria-label', lang === 'es' ? 'Change language to English' : 'Cambiar idioma a español');
  updateWhatsAppLinks();
}

document.getElementById('langSwitch').addEventListener('click', () => setLanguage(currentLang === 'es' ? 'en' : 'es'));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    alert(currentLang === 'es' ? 'Primero configura el número de WhatsApp en script.js.' : 'First, configure the WhatsApp number in script.js.');
    return;
  }
  const form = new FormData(event.currentTarget);
  const textEs = `Hola, soy ${form.get('name')}. Quisiera consultar sobre Galápagos.\nFecha aproximada: ${form.get('arrival') || 'Por definir'}\nViajeros: ${form.get('people')}\nInterés: ${form.get('interest')}\nDetalles: ${form.get('message') || 'No especificados'}`;
  const textEn = `Hello, my name is ${form.get('name')}. I would like to ask about Galápagos.\nApproximate date: ${form.get('arrival') || 'To be decided'}\nTravelers: ${form.get('people')}\nInterest: ${form.get('interest')}\nDetails: ${form.get('message') || 'Not specified'}`;
  const message = currentLang === 'es' ? textEs : textEn;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
updateWhatsAppLinks();
