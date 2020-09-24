const initialState = {
  tickets: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS_LOADED':
      return {
        tickets: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
