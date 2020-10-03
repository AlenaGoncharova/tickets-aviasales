import React from 'react';

const StopsFilter = () => {
  return (
    <div>
      <legend>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
      <div>
        <input type="checkbox" value="Ch1" />
        <label htmlFor="Ch1">Все</label>
      </div>
      <div>
        <input type="checkbox" value="Ch2" checked />
        <label htmlFor="Ch2">Без пересадок</label>
      </div>
      <div>
        <input type="checkbox" value="Ch3" checked />
        <label htmlFor="Ch3">1 пересадка</label>
      </div>
      <div>
        <input type="checkbox" value="Ch4" checked />
        <label htmlFor="Ch4">2 пересадки</label>
      </div>
      <div>
        <input type="checkbox" value="Ch5" />
        <label htmlFor="Ch5">3 пересадки</label>
      </div>
    </div>
  );
};

export default StopsFilter;
