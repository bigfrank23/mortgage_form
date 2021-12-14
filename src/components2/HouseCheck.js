import React, { Component } from 'react'

export default class HouseCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
    localStorage.setItem("houseCheck", `${e.target.value}`)
    console.log(value)
  };

  render() {
    return (
      <div className="radio-buttons">
        <label className="labelContainer">
          <input
            type="radio"
            name="radio"
            value="yes"
            onChange={this.handleChange}
            required
          />
          Yes
          <span className="check"></span>
        </label>
        <label className="labelContainer">
          <input
            type="radio"
            name="radio"
            value="no"
            onChange={this.handleChange}
            required
          />
          No
          <span className="check"></span>
        </label>
      </div>
    );
  }
}
