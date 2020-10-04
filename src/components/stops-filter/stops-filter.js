import React from 'react';
import { connect } from 'react-redux';

import { stopsFilterChanged } from '../../actions';

const StopsFilter = ({ filterByStops, stopsFilterChanged }) => {
  const isCheckedStopsFilter = (stopsAmount) => {
    return filterByStops.has(stopsAmount);
  };

  const handleChangeStopFilter = (stopsAmount) => {
    let newFilterByStops = new Set(filterByStops);
    if (newFilterByStops.has(stopsAmount)) {
      newFilterByStops.delete(stopsAmount);
    } else {
      newFilterByStops.add(stopsAmount);
    }

    stopsFilterChanged(newFilterByStops);
  };

  const handleChangeAllStopFilter = () => {
    if (filterByStops.size === 4) {
      stopsFilterChanged(new Set([]));
    } else {
      stopsFilterChanged(new Set([0, 1, 2, 3]));
    }
  };

  const { all, withoutStops, oneStop, twoStops, threeStops } = filterByStops;

  return (
    <div>
      <legend>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
      <div>
        <input type="checkbox" value="allStopsFilter" checked={filterByStops.size === 4} onChange={() => handleChangeAllStopFilter()} />
        <label htmlFor="allStopsFilter">Все</label>
      </div>
      <div>
        <input type="checkbox" value="withoutStopsFilter" checked={isCheckedStopsFilter(0)} onChange={() => handleChangeStopFilter(0)} />
        <label htmlFor="withoutStopsFilter">Без пересадок</label>
      </div>
      <div>
        <input type="checkbox" value="oneStopFilter" checked={isCheckedStopsFilter(1)} onChange={() => handleChangeStopFilter(1)} />
        <label htmlFor="oneStopFilter">1 пересадка</label>
      </div>
      <div>
        <input type="checkbox" value="twoStopsFilter" checked={isCheckedStopsFilter(2)} onChange={() => handleChangeStopFilter(2)} />
        <label htmlFor="twoStopsFilter">2 пересадки</label>
      </div>
      <div>
        <input type="checkbox" value="threeStopsFilter" checked={isCheckedStopsFilter(3)} onChange={() => handleChangeStopFilter(3)} />
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
