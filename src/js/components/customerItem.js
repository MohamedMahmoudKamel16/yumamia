import { text, addClass, button, li, div, span, addId } from '../builder';

export default function customerItem(customer = {}, active)
{
  const name = addClass(span(text(customer.name)), 'customer-name');
  const deleteBtnElem = addId(addClass(button(text('Delete')), 'btn', 'btn-danger', 'btn-xs'), 'delete-btn');
  deleteBtnElem.dataset.id = customer.id;
  const btnsContainer = addClass(div(deleteBtnElem), 'pull-right');

  let container = addClass(li(name, btnsContainer), 'list-group-item');
  container.dataset.id = customer.id;
  if (customer.id == active)
    container = addClass(container, 'active');

  return container;
}
