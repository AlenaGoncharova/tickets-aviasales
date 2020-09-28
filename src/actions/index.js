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

export {
  ticketsLoaded,
  ticketsRequested,
};
