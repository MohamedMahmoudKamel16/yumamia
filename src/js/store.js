import reducer from './reducer';
import Storage from './storage';


const defaultState = {
  customers: {},
  "customer": {},
  active: 0,
};

const createStore = (reducer, storeState = null) => {
  const listners = {};
  let initialState = Object.assign(defaultState, storeState);
  let state = Object.assign({}, initialState);

  // register events to the store
  function on(event, callback) {
    if(! listners[event]){ listners[event] = []; }
    listners[event].push(callback);
  }

  // trigger events
  function trigger (event, data = {}) {
    state = reducer(state, event, data);
    if(listners[event]) { listners[event].forEach((cb) => cb(state)); }
  }

  // get the current state
  function getState() {
    return state;
  }

  return { on, trigger, getState };
}

const customers = Storage.get('customers');
const initialState = {
  customers,
};
const store = createStore(reducer, initialState);

export default store;
