const initialState = {
  tickets: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TICKETS_REQUEST':
      return {
        tickets: [],
        loading: false,
        error: null,
      };
    case 'FETCH_TICKETS_SUCCESS':
      return {
        tickets: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_TICKETS_FAILURE':
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
