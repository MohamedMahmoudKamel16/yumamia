const reducer = (state, event, data) => {
  switch (event) {
    case 'ADD_CUSTOMER':
      return {
        ...state,
        customers: {
          ...state.customers,
          [data.customer.id]:  { ...state.customer, ...data.customer }
        },
        active: data.customer.id,
        customer: {}
      }
      return Object.assign(state, {
        customers: Object.assign(state.customers, {
          [data.customer.id]: data.customer
        }),
        active: data.customer.id
      });
    case 'UPDATE_CUSTOMER':
      return Object.assign(state, {
        customers: Object.assign(state.customers, {
          [data.customer.id]: { ...state.customer, ...data.customer }
        })
      });
    case 'SELECT_CUSTOMER':
      return { ...state, active: data.id };
    case 'DELETE_CUSTOMER':
      delete state.customers[data.id];
      return { ...state, active: data.id };
    case 'UPDATE_LOCATION':
      return { ...state, customer: { ...state.customer, "location": data.location } };
    default:
      return state;
  }
};

export default reducer;
