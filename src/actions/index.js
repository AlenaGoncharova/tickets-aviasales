const ticketsLoaded = (newTickets) => {
  return {
    type: 'TICKETS_LOADED',
    payload: newTickets,
  };
};

const ticketsRequested = () => {
  return {
    type: 'TICKETS_REQUESTED',
  };
};

const ticketsError = (error) => {
  return {
    type: 'TICKETS_ERROR',
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
