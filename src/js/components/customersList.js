import customerItem from './customerItem';
import { addClass, ul, text, addId } from '../builder';

export default function customersList(store)
{
  const customers = store.getState().customers;
  const active = store.getState().active;
  const listItems = Object.keys(customers).map((id) => customerItem(customers[id], active));
  const container = addId(addClass(ul(...listItems), 'list-group'), 'customers-list');

  store.on('ADD_CUSTOMER', ({ customers, active }) => {
    const customer = customers[active];
    document.getElementById('customers-list').appendChild(customerItem(customer, active));
    store.trigger('SELECT_CUSTOMER', { id: active });
  });

  store.on('UPDATE_CUSTOMER', ({ customers, active }) => {
    const nameElem = document.querySelector('.list-group-item.active > span.customer-name');
    (nameElem) && (nameElem.textContent = customers[active].name);
  });

  store.on('SELECT_CUSTOMER', ({ customers, active }) => {
    const currentActive = document.querySelector('.list-group-item.active');
    const toBeActive = document.querySelector(`.list-group-item[data-id="${active}"]`);
    (currentActive) && currentActive.classList.remove('active');
    (toBeActive) && toBeActive.classList.add('active');
  });

  store.on('DELETE_CUSTOMER', ({ customers, active }) => {
    const toBeDeleted = document.querySelector(`.list-group-item[data-id="${active}"]`);
    toBeDeleted.parentElement.removeChild(toBeDeleted);
  });

  return container;
}
