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
    return (stopsFilters.includes(segmentTo.stops.length) && stopsFilters.includes(segmentBack.stops.length));
  });
  return filteredTickets;
};

class TicketListContainer extends Component {
  componentDidMount() {
    this.props.fetchTickets();
  }

  render() {
    const { tickets, loading, error, sortType, filterByStops } = this.props;
    const calcFilter = () => {
      const { all, withoutStops, oneStop, twoStops, threeStops } = filterByStops;

      if (all) {
        return [0, 1, 2, 3];
      }
      const filters = [];
      if (withoutStops) {
        filters.push(0);
      }
      if (oneStop) {
        filters.push(1);
      }
      if (twoStops) {
        filters.push(2);
      }
      if (threeStops) {
        filters.push(3);
      }
      return filters;
    };

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    const stopsFilters = calcFilter();
    const filteredTickets = filteringTicketsByStops(tickets, stopsFilters);

    return <TicketList tickets={filteredTickets} />;
  }
}

const mapStateToProps = ({ tickets, loading, error, filterByStops }) => {
  return { tickets, loading, error, filterByStops };
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
