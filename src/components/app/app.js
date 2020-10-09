import React from 'react';
import TicketList from '../ticket-list';
import StopsFilter from '../stops-filter/stops-filter';
import Sorting from '../sorting';

const App = () => {
  return (
    <div className="row mb2" >
      <div className="col-md-4">
        <StopsFilter />
      </div>
      <div className="col-md-8">
        <Sorting />
        <TicketList />
      </div>
    </div>
  );
};

export default App;
