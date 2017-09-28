export function text(words) {
  return document.createTextNode(words);
}

export function createElement(type, ...children) {
  const elem = document.createElement(type);
  children.forEach( (child) => elem.appendChild(child) );
  return elem;
}

export function label(...children) {
  return createElement('label', ...children);
}

export function div(...children) {
  return createElement('div', ...children);
}

export function section(...children) {
  return createElement('section', ...children);
}

export function h1(...children) {
  return createElement('h1', ...children);
}

export function h2(...children) {
  return createElement('h2', ...children);
}

export function h3(...children) {
  return createElement('h3', ...children);
}

export function h4(...children) {
  return createElement('h4', ...children);
}

export function h5(...children) {
  return createElement('h5', ...children);
}

export function h6(...children) {
  return createElement('h6', ...children);
}

export function p(...children) {
  return createElement('p', ...children);
}

export function img(src) {
  const image = createElement('img');
  return Object.assign(image, { src });
}

export function span(...children) {
  return createElement('span', ...children);
}

export function i(...children) {
  return createElement('i', ...children);
}

export function nav(...children) {
  return createElement('nav', ...children);
}

export function article(...children) {
  return createElement('article', ...children);
}

export function footer(...children) {
  return createElement('footer', ...children);
}

export function ul(...children) {
  return createElement('ul', ...children);
}

export function li(...children) {
  return createElement('li', ...children);
}

export function button(...children) {
  return createElement('button', ...children);
}

export function input(value, type, name) {
  const elem = createElement('input');
  elem.value = value;
  elem.type = type;
  elem.name = name;
  return elem;
}

export function addId(element, id) {
  const elem = element.cloneNode(true);
  return Object.assign(elem, { id });
}

export function addClass(element, ...klasses) {
  const elem = element.cloneNode(true);
  klasses.forEach( (klass) => elem.classList.add(klass) );
  return elem;
}
