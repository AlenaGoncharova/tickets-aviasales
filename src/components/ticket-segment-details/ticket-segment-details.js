import React, { Fragment } from 'react';

const TicketSegmentDetails = ({ segment }) => {
  const { origin, destination, date, stops, duration } = segment;
  const arrivalDate = new Date(date.getTime() + (duration * 60 * 1000));
  return (
    <Fragment>
      <div>{origin}-{destination}</div>
      <div>
        <span>{date.getHours()}:{date.getMinutes()} - </span>
        <span>{arrivalDate.getHours()}:{arrivalDate.getMinutes()}</span>
      </div>
      <div>
        В ПУТИ {Math.floor(duration / 60)}ч {duration % 60}м
      </div>
      <div><span>{stops.length} ПЕРЕСАДКИ </span><span>{stops}</span></div>
    </Fragment>
  );
};

export default TicketSegmentDetails;
