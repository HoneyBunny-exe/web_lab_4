document.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    route(e);
  }
  e.preventDefault();
});

const route = (e) => {
  window.history.pushState({}, '', e.target.href);
  handleLocation();
}

const routers = {
  '/': 'main.html',
  '/contacts': 'contacts.html',
  '/menu': 'menu.html',
  '/events': 'events.html'
}

const handleLocation = async () => {
  const path = window.location.pathname;
  const html = await fetch(routers[path]).then((data) => data.text());
  document.querySelector('.container').innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();
