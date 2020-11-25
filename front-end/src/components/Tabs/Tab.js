import React from 'react';
import './Tabs.scss';

const Tab = ({ text, id, isSelected, handleClick }) => {
  const onTabClick = (e) => {
    handleClick(e.target.id);
  };

  return (
    <button
      className="tab"
      role="tab"
      aria-selected={isSelected}
      id={id}
      onClick={(e) => onTabClick(e)}
    >
      {text}
    </button>
  );
};

export default Tab;
