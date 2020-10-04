const initialState = {
  tickets: [],
  loading: true,
  error: null,
  sortType: 'price',
  filterByStops: new Set([0, 1, 2]),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TICKETS_REQUEST':
      return {
        ...state,
        tickets: [],
        loading: false,
        error: null,
      };
    case 'FETCH_TICKETS_SUCCESS':
      return {
        ...state,
        tickets: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_TICKETS_FAILURE':
      return {
        ...state,
        tickets: [],
        loading: false,
        error: action.payload,
      };
    case 'SORT_TYPE_CHANGED':
      return {
        ...state,
        sortType: action.payload,
      };
    case 'STOPS_FILTER_CHANGED':
      return {
        ...state,
        filterByStops: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
