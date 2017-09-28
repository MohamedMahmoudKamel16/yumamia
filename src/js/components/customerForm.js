import { addId, div, text, label, addClass, h2, input, button } from '../builder';
import googleMaps, { initializeMap } from '../google_maps';
import { capitalize } from '../helpers';

export default function customerForm(store, customer)
{
  const title = (Object.keys(customer).length == 0) ? "Add Customer" : "Update Customer";
  const btnId = (Object.keys(customer).length == 0) ? "add-customer" : "update-customer";
  const location = (Object.keys(customer).length == 0) ? null : customer.location;
  const titleElem = addClass(h2(text(title)), 'text-center');
  const formFields = ['name', 'email'].map((key) => {
    const labelElem = label(text(`${capitalize(key)}:`));
    const value = (customer[key]) ? customer[key] : "";
    const inputElem = addClass(input(value, "text", key), 'form-control');
    const formGroup = addClass(div(labelElem, inputElem), 'form-group');
    return formGroup;
  });
  const mapElem = addId(div(), 'map');
  setTimeout(function() {
    initializeMap(googleMaps(store), store, location);
  }, 500);
  const btnElem = addId(addClass(button(text(title)), 'btn', 'btn-success', 'btn-block'), btnId);
  return addId(div(titleElem, ...formFields, mapElem, btnElem), 'customer-form');
}
