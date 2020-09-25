import React, { Component } from 'react';
import { connect } from 'react-redux';

import TicketListItem from '../ticket-list-item';
import { withAviasalesService } from '../hoc';
import { ticketsLoaded } from '../../actions';
import { compose } from '../../utils';

class TicketList extends Component {
  componentDidMount() {
    const { aviasalesService } = this.props;
    const data = aviasalesService.getAllTickets();
    console.log(data);

    this.props.ticketsLoaded(data);
  }

  render() {
    const { tickets } = this.props;
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

const mapStateToProps = ({ tickets }) => {
  return { tickets };
};

const mapDispatchToProps = {
  ticketsLoaded,
};

export default compose(
  withAviasalesService(),
  connect(mapStateToProps, mapDispatchToProps),
)(TicketList);
