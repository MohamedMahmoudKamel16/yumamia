const Storage = {
  get: (namespace) => {
    try {
      const data = localStorage.getItem(namespace);
      if (data === null) return {};
      return JSON.parse(data)
    } catch(e) {
      return {};
    }
  },
  set: (namespace, data) => {
    data = JSON.stringify(data);
    localStorage.setItem(namespace, data);
  }
};

export default Storage;
