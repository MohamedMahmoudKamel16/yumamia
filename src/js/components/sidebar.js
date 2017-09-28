import { addId, addClass, div, h3, text, button } from '../builder';
import customersList from './customersList';

export default function sidebar(store)
{
  const headerElem = addClass(h3(text("Customers List")), 'text-center');
  const addBtnElem = addId(addClass(button(text("Add New Custmer")), 'btn', 'btn-primary', 'btn-block'), 'add-btn');
  const customersListElem = customersList(store);

  const container = addId(addClass(div(headerElem, addBtnElem, customersListElem), 'col-xs-3'), 'sidebar');
  return container;
}
