import React, { Component } from 'react';
import TicketListItem from '../ticket-list-item';

class TicketList extends Component {
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

export default TicketList;
