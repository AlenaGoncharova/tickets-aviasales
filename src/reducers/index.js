const initialState = {
  tickets: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS_REQUESTED':
      return {
        tickets: [],
        loading: false,
      };
    case 'TICKETS_LOADED':
      return {
        tickets: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
