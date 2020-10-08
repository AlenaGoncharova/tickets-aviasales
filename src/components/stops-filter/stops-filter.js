import React from 'react';
import { connect } from 'react-redux';

import { stopsFilterChanged } from '../../actions';

const StopsFilter = ({ allStopsFilter, isCheckedAllStopsFilter, handleChangeAllStopsFilter,
                      isCheckedStopsFilter, handleChangeStopsFilter }) => {
  return (
    <div>
      <legend>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
      <div>
        <input type="checkbox" value="allStopsFilter"
                checked={isCheckedAllStopsFilter()}
                onChange={handleChangeAllStopsFilter} />
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

const StopsFilterContainer = ({ filterByStops, stopsFilterChanged }) => {
  const allStopsFilter = [
    { countOfStops: 0, name: 'withoutStops', text: 'Без пересадок' },
    { countOfStops: 1, name: 'oneStop', text: '1 пересадка' },
    { countOfStops: 2, name: 'twoStops', text: '2 пересадки' },
    { countOfStops: 3, name: 'threeStops', text: '3 пересадки' },
  ];

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

  const isCheckedAllStopsFilter = () => {
    return filterByStops.size === allStopsFilter.length;
  };

  const handleChangeAllStopsFilter = () => {
    if (filterByStops.size === allStopsFilter.length) {
      stopsFilterChanged(new Set([]));
    } else {
      stopsFilterChanged(new Set(allStopsFilter.map((filter) => { return filter.countOfStops; })));
    }
  };

  return (
    <StopsFilter
      allStopsFilter={allStopsFilter}
      isCheckedAllStopsFilter={isCheckedAllStopsFilter}
      handleChangeAllStopsFilter={handleChangeAllStopsFilter}
      isCheckedStopsFilter={isCheckedStopsFilter}
      handleChangeStopsFilter={handleChangeStopsFilter} />
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

export default connect(mapStateToProps, mapDispatchToProps)(StopsFilterContainer);
