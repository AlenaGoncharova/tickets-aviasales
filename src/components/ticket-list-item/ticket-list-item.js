import React, { Fragment } from 'react';

const TicketListItem = ({ ticket }) => {
  const { price, carrier} = ticket;
  return (
    <Fragment>
      <span>{price}</span>
      <span>{carrier}</span>
    </Fragment>
  );
};

export default TicketListItem;
