import React from 'react';

const FilterButtons = ({ filter, setFilter }: { filter: string; setFilter: (filter: string) => void }) => {
  const filters = ['All', 'Active', 'Completed'];

  const createButtonClass = (buttonName: string) => 
    `button ${filter === buttonName ? 'active' : ''}`;

  return (
    <div>
      {filters.map(buttonName => (
        <button 
          key={buttonName} 
          className={createButtonClass(buttonName)} 
          onClick={() => setFilter(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
