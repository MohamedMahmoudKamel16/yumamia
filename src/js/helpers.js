export function $(query) {
  const elements = Array.prototype.slice.call(document.querySelectorAll(query));

  function children(toBeAdded) {
    elements.forEach(element => {
      while (element.firstChild) { element.removeChild(element.firstChild); }

      element.appendChild(toBeAdded);
    });
  }

  function on(event, callback) {
    elements.forEach(element => element.addEventListener(event, callback));
  }

  function addClass(klass) {
    elements.forEach(element => element.classList.add(klass));
  }

  function removeClass(klass) {
    elements.forEach(element => element.classList.remove(klass));
  }

  function attr(attribute, value){
    elements.forEach((element) => {
      if(value === false){
        element.removeAttribute(attribute);
      }else{
        element.setAttribute(attribute, value);
      }
    });
  }

  function map(callback) {
    return elements.map(callback);
  }

  return { children, on, addClass, removeClass, attr, map };
}

export function capitalize(word)
{
  return word.charAt(0).toUpperCase() + word.slice(1);
}
