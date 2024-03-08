import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  const buttonClass = (buttonName: string) => 
    `button ${filter === buttonName ? 'active' : ''}`;

  return (
    <div>
      <button className={buttonClass('All')} onClick={() => setFilter('All')}>Show all</button>
      <button className={buttonClass('Active')} onClick={() => setFilter('Active')}>Active</button>
      <button className={buttonClass('Completed')} onClick={() => setFilter('Completed')}>Completed</button>
    </div>
  );
}

export default FilterButtons;
