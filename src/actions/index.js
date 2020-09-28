const ticketsRequested = () => {
  return {
    type: 'FETCH_TICKETS_REQUEST',
  };
};

const ticketsLoaded = (newTickets) => {
  return {
    type: 'FETCH_TICKETS_SUCCESS',
    payload: newTickets,
  };
};

const ticketsError = (error) => {
  return {
    type: 'FETCH_TICKETS_FAILURE',
    payload: error,
  };
};

const fetchTickets = (aviasalesService, dispatch) => () => {
  dispatch(ticketsRequested());
  aviasalesService.getAllTickets()
    .then((data) => dispatch(ticketsLoaded(data)))
    .catch((err) => dispatch(ticketsError(err)));
};

export {
  fetchTickets,
};
