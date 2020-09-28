const initialState = {
  tickets: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS_REQUESTED':
      return {
        tickets: [],
        loading: false,
        error: null,
      };
    case 'TICKETS_LOADED':
      return {
        tickets: action.payload,
        loading: false,
        error: null,
      };
    case 'TICKETS_ERROR':
      return {
        tickets: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
