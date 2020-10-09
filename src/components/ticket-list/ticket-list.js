import React, { Component } from 'react';
import { connect } from 'react-redux';

import TicketListItem from '../ticket-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withAviasalesService } from '../hoc';
import { fetchTickets } from '../../actions';
import { compose } from '../../utils';

import './ticket-list.css';

const TicketList = ({ tickets }) => {
  return (
    <ul className="ticket-list">
      {
        tickets.map((ticket, i) => {
          return (
            <li key={i}><TicketListItem ticket={ticket} /></li>
          );
        })
      }
    </ul>
  );
};

const filterTicketsByStops = (tickets, stopsFilters) => {
  const filteredTickets = tickets.filter((ticket) => {
    const [segmentTo, segmentBack] = ticket.segments;
    return (stopsFilters.has(segmentTo.stops.length) && stopsFilters.has(segmentBack.stops.length));
  });
  return filteredTickets;
};

const sortTickets = (tickets, sortType) => {
  const compareTicketsByPrice = (ticket1, ticket2) => {
    return (ticket1.price - ticket2.price);
  };

  const compareTicketsByTime = (ticket1, ticket2) => {
    let [segmentTo, segmentBack] = ticket1.segments;
    const time1 = segmentTo.duration + segmentBack.duration;

    [segmentTo, segmentBack] = ticket2.segments;
    const time2 = segmentTo.duration + segmentBack.duration;

    return (time1 - time2);
  };

  let sortedTickets = tickets;
  if (sortType === 'price') {
    sortedTickets = tickets.slice().sort(compareTicketsByPrice);
  } else if (sortType === 'time') {
    sortedTickets = tickets.slice().sort(compareTicketsByTime);
  }

  return sortedTickets;
};

class TicketListContainer extends Component {
  componentDidMount() {
    this.props.fetchTickets();
  }

  render() {
    const { tickets, loading, error, sortType, filterByStops } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    const filteredTickets = filterTicketsByStops(tickets, filterByStops);
    const sortedTickets = sortTickets(filteredTickets, sortType);

    return <TicketList tickets={sortedTickets.slice(0, 5)} />;
  }
}

const mapStateToProps = ({ tickets, loading, error, sortType, filterByStops }) => {
  return { tickets, loading, error, sortType, filterByStops };
};

const mapDispatchToProps = (dispatch, { aviasalesService }) => {
  return {
    fetchTickets: fetchTickets(aviasalesService, dispatch),
  };
};

export default compose(
  withAviasalesService(),
  connect(mapStateToProps, mapDispatchToProps),
)(TicketListContainer);
