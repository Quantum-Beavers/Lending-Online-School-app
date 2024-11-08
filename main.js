import './style.css'
const headerbarToggle = document.getElementById('header-toggle');
const headerbarItems = document.querySelectorAll('header > .items-wrapper');

headerbarToggle.addEventListener('click', () => {
  if (headerbarToggle.dataset.active === 'true') {
    headerbarToggle.dataset.active = 'false';
    headerbarItems.forEach((item) => item.classList.add('hidden'));
    headerbarToggle.children[0].classList.remove('bi-x-lg');
    headerbarToggle.children[0].classList.add('bi-list');
  } else {
    headerbarToggle.dataset.active = 'true';
    headerbarItems.forEach((item) => item.classList.remove('hidden'));
    headerbarToggle.children[0].classList.add('bi-x-lg');
    headerbarToggle.children[0].classList.remove('bi-list');
  }
});

const headerbarheaderlinks = document.querySelectorAll('header > .items-wrapper > .items.headerlinks');
headerbarheaderlinks.forEach((item) => {
  item.addEventListener('click', () => {
    if (headerbarToggle.dataset.active === 'true') {
      headerbarToggle.dataset.active = 'false';
      headerbarItems.forEach((i) => i.classList.add('hidden'));
      headerbarToggle.children[0].classList.remove('bi-x-lg');
      headerbarToggle.children[0].classList.add('bi-list');
    }
  });
});
