import React from 'react';
import { connect } from 'react-redux';

import { stopsFilterChanged } from '../../actions';

const StopsFilter = ({ filterByStops, stopsFilterChanged }) => {
  const handleChangeStopFilter = (filterName) => {
    const currentStateFilter = filterByStops[filterName];
    const newFilterByStops = { ...filterByStops, [filterName]: !currentStateFilter };
    stopsFilterChanged(newFilterByStops);
  };

  const { all, withoutStops, oneStop, twoStops, threeStops } = filterByStops;

  return (
    <div>
      <legend>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
      <div>
        <input type="checkbox" value="allStopsFilter" checked={all} onChange={() => handleChangeStopFilter('all')} />
        <label htmlFor="allStopsFilter">Все</label>
      </div>
      <div>
        <input type="checkbox" value="withoutStopsFilter" checked={withoutStops} onChange={() => handleChangeStopFilter('withoutStops')} />
        <label htmlFor="withoutStopsFilter">Без пересадок</label>
      </div>
      <div>
        <input type="checkbox" value="oneStopFilter" checked={oneStop} onChange={() => handleChangeStopFilter('oneStop')} />
        <label htmlFor="oneStopFilter">1 пересадка</label>
      </div>
      <div>
        <input type="checkbox" value="twoStopsFilter" checked={twoStops} onChange={() => handleChangeStopFilter('twoStops')} />
        <label htmlFor="twoStopsFilter">2 пересадки</label>
      </div>
      <div>
        <input type="checkbox" value="threeStopsFilter" checked={threeStops} onChange={() => handleChangeStopFilter('threeStops')} />
        <label htmlFor="threeStopsFilter">3 пересадки</label>
      </div>
    </div>
  );
};

const mapStateToProps = ({ filterByStops }) => {
  return {
    filterByStops,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stopsFilterChanged: (stopsFilter) => {
      dispatch(stopsFilterChanged(stopsFilter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StopsFilter);
