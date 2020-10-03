import React, { Fragment } from 'react';
import TicketList from '../ticket-list';
import StopsFilter from '../stops-filter/stops-filter';
import Sorting from '../sorting';

const App = () => {
  return (
    <Fragment>
      <StopsFilter />
      <Sorting />
      <TicketList />
    </Fragment>
  );
};

export default App;
