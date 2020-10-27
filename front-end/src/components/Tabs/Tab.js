import React from 'react';
import './Tabs.scss';

class Tab extends React.Component {
  handleClick(e) {
    this.props.onClick(e.target.id);
  }

  render() {
    const { text, id, isSelected } = { ...this.props };
    return (
      <button 
        className="tab"
        role="tab"
        aria-selected={isSelected}
        id={id}
        onClick={(e) => this.handleClick(e)}>
          {text}
      </button>
    )
  }
}

export default Tab;
