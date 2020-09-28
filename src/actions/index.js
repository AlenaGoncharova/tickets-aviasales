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

export {
  ticketsLoaded,
  ticketsRequested,
  ticketsError,
};
