import React from 'react';
import { connect } from 'react-redux';

import { sortTypeChanged } from '../../actions';
import './sorting.css';

const Sorting = ({ sortType, sortTypeChanged }) => {
  const handleClickSortButton = (newSortType) => {
    if (newSortType !== sortType) {
      sortTypeChanged(newSortType);
    }
  };

  return (
    <div>
      <button
        className={sortType === 'price' ? 'active' : null}
        onClick={() => { handleClickSortButton('price'); }}>
          САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={sortType === 'time' ? 'active' : null}
        onClick={() => { handleClickSortButton('time'); }}>
          САМЫЙ БЫСТРЫЙ
      </button>
    </div>
  );
};

const mapStateToProps = ({ sortType }) => {
  return {
    sortType,
  };
};

const mapDispatchToProps = {
  sortTypeChanged,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
