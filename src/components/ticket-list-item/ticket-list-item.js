import React from 'react';

import TicketSegmentDetails from '../ticket-segment-details';

import './ticket-list-item.css';

const TicketListItem = ({ ticket }) => {
  const { price, carrier, segments } = ticket;
  const segmentTo = segments[0];
  const segmentBack = segments[1];
  return (
    <div className="ticket-list-item">
      <div>
        <span className="ticket-price">{price}</span>
        <span className="ticket-carrier"> {carrier}</span>
      </div>
      <div className="ticket-list-item-details">
        <div className="ticket-list-item-segment-details ticket-segment-to"><TicketSegmentDetails segment={segmentTo}/></div>
        <div className="ticket-list-item-segment-details ticket-segment-back"><TicketSegmentDetails segment={segmentBack}/></div>
      </div>
    </div>
  );
};

export default TicketListItem;
