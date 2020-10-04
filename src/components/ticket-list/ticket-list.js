import React, { Component } from 'react';
import { connect } from 'react-redux';

import TicketListItem from '../ticket-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withAviasalesService } from '../hoc';
import { fetchTickets } from '../../actions';
import { compose } from '../../utils';

const TicketList = ({ tickets }) => {
  return (
    <ul>
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

const filteringTicketsByStops = (tickets, stopsFilters) => {
  const filteredTickets = tickets.filter((ticket) => {
    const [segmentTo, segmentBack] = ticket.segments;
    return (stopsFilters.has(segmentTo.stops.length) && stopsFilters.has(segmentBack.stops.length));
  });
  return filteredTickets;
};

const sortTicketsByPrice = (tickets) => {
  function compareByPrice(ticket1, ticket2) {
    return (ticket1.price - ticket2.price);
  }

  const sortTickets = tickets.slice().sort(compareByPrice);
  return sortTickets;
};

const sortTicketsByTime = (tickets) => {
  function compareByTime(ticket1, ticket2) {
    const time1 = ticket1.segments[0].duration + ticket1.segments[1].duration;
    const time2 = ticket2.segments[0].duration + ticket2.segments[1].duration;
    return (time1 - time2);
  }

  const sortTickets = tickets.slice().sort(compareByTime);
  return sortTickets;
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

    const filteredTickets = filteringTicketsByStops(tickets, filterByStops);
    let sortedTickets = filteredTickets;

    if (sortType === 'price') {
      sortedTickets = sortTicketsByPrice(filteredTickets);
    } else if (sortType === 'time') {
      sortedTickets = sortTicketsByTime(filteredTickets);
    }
    return <TicketList tickets={sortedTickets} />;
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
