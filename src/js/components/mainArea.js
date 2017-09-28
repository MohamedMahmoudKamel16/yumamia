import { div, addClass, h2, text, addId } from '../builder';
import customerForm from './customerForm';

export default function mainArea(store)
{
  const container = addId(addClass(div(), 'col-xs-9'), 'main-area');

  store.on('SELECT_CUSTOMER', ({ customers, active }) => {
    const customer = customers[active];
    container.innerHTML = '';
    const form = customerForm(store, customer);
    container.appendChild(form);
  });

  store.on('ADD_CUSTOMER_FORM', (state) => {
    container.innerHTML = '';
    const form = customerForm(store, {});
    container.appendChild(form);
  });

  return container;
}
