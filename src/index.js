import googleMaps from './js/google_maps';
import store from './js/store';
import registerEvents from './js/events';
import app from './js/components/app';

const body = document.body;

// Initialize state

// googleMaps(store);

// Start rendering app
body.insertBefore(app(store), body.childNodes[0]);

// Register dom events
registerEvents(store);

// Start app
store.trigger('ADD_CUSTOMER_FORM');

