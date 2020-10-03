import React from 'react';
import { connect } from 'react-redux';
import { sortTypeChanged } from '../../actions';

const Sorting = ({ sortType, sortTypeChanged }) => {
  const handleClickSortButton = (newSortType) => {
    if (newSortType !== sortType) {
      sortTypeChanged(newSortType);
    }
  };

  return (
    <div>
      <span>{sortType}</span>
      <button onClick={() => handleClickSortButton('price')}>САМЫЙ ДЕШЕВЫЙ</button>
      <button onClick={() => handleClickSortButton('time')}>САМЫЙ БЫСТРЫЙ</button>
    </div>
  );
};

const mapStateToProps = ({ sortType }) => {
  return {
    sortType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortTypeChanged: (sortType) => {
      dispatch(sortTypeChanged(sortType));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
