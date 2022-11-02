import i18next from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import './style.css';

async function initi18next() {
  await i18next
  .use(languageDetector)
  .init({
    lng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          home: 'home',
          about: 'about'
        }
      },
      bn: {
        translation: {
          home: 'basha',
          about: 'shommondhe'
        }
      }
    }
  });
}

function bindLanguageSwitcher (initialValue: string) {
  const languageSwitcher = document.querySelector<HTMLSelectElement>('[data-i18n-switcher]');
  languageSwitcher!.value = initialValue;
  
  languageSwitcher?.addEventListener('change', (e) => {
    const target = e.target as HTMLSelectElement;
    i18next.changeLanguage(target.value).then((_) => translatePageElements());
  })
}

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