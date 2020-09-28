import React, { Component } from 'react';
import { connect } from 'react-redux';

import TicketListItem from '../ticket-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withAviasalesService } from '../hoc';
import { ticketsLoaded, ticketsRequested, ticketsError } from '../../actions';
import { compose } from '../../utils';

class TicketList extends Component {
  componentDidMount() {
    const { aviasalesService, ticketsLoaded, ticketsError } = this.props;
    ticketsRequested();
    aviasalesService.getAllTickets()
      .then((data) => ticketsLoaded(data))
      .catch((err) => ticketsError(err));
  }

  render() {
    const { tickets, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

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
  }
}

const mapStateToProps = ({ tickets, loading, error }) => {
  return { tickets, loading, error };
};

const mapDispatchToProps = {
  ticketsLoaded,
  ticketsRequested,
  ticketsError,
};

export default compose(
  withAviasalesService(),
  connect(mapStateToProps, mapDispatchToProps),
)(TicketList);
