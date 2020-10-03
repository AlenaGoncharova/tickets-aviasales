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
        <input type="checkbox" value="Ch1" checked={all} onChange={() => handleChangeStopFilter('all')} />
        <label htmlFor="Ch1">Все</label>
      </div>
      <div>
        <input type="checkbox" value="Ch2" checked={withoutStops} onChange={() => handleChangeStopFilter('withoutStops')} />
        <label htmlFor="Ch2">Без пересадок</label>
      </div>
      <div>
        <input type="checkbox" value="Ch3" checked={oneStop} onChange={() => handleChangeStopFilter('oneStop')} />
        <label htmlFor="Ch3">1 пересадка</label>
      </div>
      <div>
        <input type="checkbox" value="Ch4" checked={twoStops} onChange={() => handleChangeStopFilter('twoStops')} />
        <label htmlFor="Ch4">2 пересадки</label>
      </div>
      <div>
        <input type="checkbox" value="Ch5" checked={threeStops} onChange={() => handleChangeStopFilter('threeStops')} />
        <label htmlFor="Ch5">3 пересадки</label>
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
