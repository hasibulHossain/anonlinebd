import i18next from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import httpApi from 'i18next-http-backend';
// import './style.css';

const mobileNavigation = document.querySelector<HTMLDivElement>('.mobile-navigation');
const backdrop = document.querySelector<HTMLDivElement>('.main-backdrop');
const mobileNavigationToggler = document.querySelector<HTMLButtonElement>('.navigation-toggle-btn');
const mobileNavigationCloseBtn = document.querySelector<HTMLButtonElement>('.navigation-toggle-close-btn');
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');

mobileNavigationToggler?.addEventListener('click', navigationToggleHandler);
mobileNavigationCloseBtn?.addEventListener('click', navigationToggleHandler);

function navigationToggleHandler() {

  mobileNavigation?.classList.toggle('active');
  const isActiveClassContain = mobileNavigation?.classList.contains('active');

  if(isActiveClassContain) {
    mobileNavigationToggler!.style.opacity = '0';
  } else {
    mobileNavigationToggler!.style.opacity = '1';
  }

  backdrop?.classList.toggle('hidden');
}

navLinks.forEach((navlink) => {
  navlink.addEventListener('click', navigationToggleHandler);
})

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