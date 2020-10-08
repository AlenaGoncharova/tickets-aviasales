import React from 'react';
import { connect } from 'react-redux';

import { stopsFilterChanged } from '../../actions';

const StopsFilter = ({ filterByStops, stopsFilterChanged }) => {
  const isCheckedStopsFilter = (countOfStops) => {
    return filterByStops.has(countOfStops);
  };

  const handleChangeStopsFilter = (countOfStops) => {
    const newFilterByStops = new Set(filterByStops);
    if (newFilterByStops.has(countOfStops)) {
      newFilterByStops.delete(countOfStops);
    } else {
      newFilterByStops.add(countOfStops);
    }

    stopsFilterChanged(newFilterByStops);
  };

  const allStopsFilter = [
    { countOfStops: 0, name: 'withoutStops', text: 'Без пересадок' },
    { countOfStops: 1, name: 'oneStop', text: '1 пересадка' },
    { countOfStops: 2, name: 'twoStops', text: '2 пересадки' },
    { countOfStops: 3, name: 'threeStops', text: '3 пересадки' },
  ];

  const handleChangeAllStopsFilter = () => {
    if (filterByStops.size === allStopsFilter.length) {
      stopsFilterChanged(new Set([]));
    } else {
      stopsFilterChanged(new Set(allStopsFilter.map((filter) => { return filter.countOfStops; })));
    }
  };

  return (
    <div>
      <legend>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
      <div>
        <input type="checkbox" value="allStopsFilter"
                checked={filterByStops.size === allStopsFilter.length}
                onChange={() => { handleChangeAllStopsFilter(); }} />
        <label htmlFor="allStopsFilter">Все</label>
      </div>
      {
        allStopsFilter.map((filter) => {
          const { countOfStops, name, text } = filter;
          return (
            <div key={name}>
              <input
                type="checkbox"
                name={name}
                checked={isCheckedStopsFilter(countOfStops)}
                onChange={() => { handleChangeStopsFilter(countOfStops); }} />
              <label htmlFor={name}>{text}</label>
            </div>
          );
        })
      }
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
