import React, { Component } from 'react';
import { connect } from 'react-redux';

import TicketListItem from '../ticket-list-item';
import Spinner from '../spinner';
import { withAviasalesService } from '../hoc';
import { ticketsLoaded, ticketsRequested } from '../../actions';
import { compose } from '../../utils';

class TicketList extends Component {
  componentDidMount() {
    const { aviasalesService, ticketsLoaded } = this.props;
    ticketsRequested();
    aviasalesService.getAllTickets()
      .then((data) => ticketsLoaded(data));
  }

  render() {
    const { tickets, loading } = this.props;
    if (loading) {
      return <Spinner />;
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

const mapStateToProps = ({ tickets, loading }) => {
  return { tickets, loading };
};

const mapDispatchToProps = {
  ticketsLoaded,
  ticketsRequested,
};

export default compose(
  withAviasalesService(),
  connect(mapStateToProps, mapDispatchToProps),
)(TicketList);
