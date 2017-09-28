import Storage from './storage';

export default function registerEvents(store)
{
  document.body.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('list-group-item')) {
      const target = e.target;
      store.trigger('SELECT_CUSTOMER', { id: target.dataset.id });
    }

    if (target.id === 'add-customer') {
      const id = Math.floor(Math.random() * 9999);
      const name = document.querySelector('input[name="name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const customer = { id, name, email };

      store.trigger('ADD_CUSTOMER', { customer });
      Storage.set('customers', store.getState().customers);
    }

    if (target.id === 'update-customer') {
      const id = store.getState().active;
      const name = document.querySelector('input[name="name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const customer = { id, name, email };

      store.trigger('UPDATE_CUSTOMER', { customer });
      Storage.set('customers', store.getState().customers);
    }

    if (target.id === 'add-btn') {
      store.trigger('ADD_CUSTOMER_FORM');
    }

    if (target.id == 'delete-btn') {
      store.trigger('DELETE_CUSTOMER', { id: target.dataset.id });
      Storage.set('customers', store.getState().customers);
    }
  });
}
