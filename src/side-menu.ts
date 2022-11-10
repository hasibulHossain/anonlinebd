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

export {};