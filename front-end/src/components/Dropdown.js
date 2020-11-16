import React from 'react';

class Dropdown extends React.Component {
  state = { value: '' };

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.value);
  }

  render() {
    const { options, label } = { ...this.props };
    return (
      <div className="cards">
        <div className="card">
          <label htmlFor="years">{label}</label>
          <select
            id="years"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          >
            {options.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default Dropdown;
