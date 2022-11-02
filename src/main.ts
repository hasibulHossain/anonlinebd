import i18next from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import httpApi from 'i18next-http-backend';
// import './style.css';


/**
 * Will instantiate i18next object 
 * @return Promise;
 */
export async function initi18next() {
  await i18next
  .use(httpApi)
  .use(languageDetector)
  .init({
    lng: 'en',
    debug: true,
    supportedLngs: ['en', 'bn'],
    fallbackLng: 'en',
    backend: {
      loadPath: "/lang/{{lng}}.json",
    }
  });
}

/**
 * It will trigger on language change
 * @param initialValue - string
 * @return void
 */
function bindLanguageSwitcher (initialValue: string) {
  const languageSwitcher = document.querySelector<HTMLSelectElement>('[data-i18n-switcher]');
  languageSwitcher!.value = initialValue;
  
  languageSwitcher?.addEventListener('change', (e) => {
    const target = e.target as HTMLSelectElement;
    i18next.changeLanguage(target.value).then((_) => translatePageElements());
  })
}

/**
 * Render the whole translation on page
 * @return void
 */
function translatePageElements() {
  const translateEl = document.querySelectorAll('[data-i18n-key]');
  
  translateEl.forEach((el: Element) => {
    const key = el.getAttribute("data-i18n-key");

    if(key) {
      el.innerHTML = i18next.t(key);
    }
  });
}


(async () => {
  await initi18next();
  translatePageElements();
  bindLanguageSwitcher(i18next.resolvedLanguage);
})();