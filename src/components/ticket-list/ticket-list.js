import React, { Component } from 'react';
import { connect } from 'react-redux';

import TicketListItem from '../ticket-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withAviasalesService } from '../hoc';
import { fetchTickets } from '../../actions';
import { compose } from '../../utils';

class TicketList extends Component {
  componentDidMount() {
    this.props.fetchTickets();
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

const mapDispatchToProps = (dispatch, { aviasalesService }) => {
  return {
    fetchTickets: fetchTickets(aviasalesService, dispatch),
  };
};

export default compose(
  withAviasalesService(),
  connect(mapStateToProps, mapDispatchToProps),
)(TicketList);
