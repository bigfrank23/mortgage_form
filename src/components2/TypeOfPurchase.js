import React, { Component } from 'react'

export default class TypeOfPurchase extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      value
    });
    localStorage.setItem("typeOfPurchaseCheck", `${e.target.value}`);
    console.log(value);
  };

  render() {
    return (
      <div>
        <select className="selectInput" onChange={this.handleChange} required>
          <option value="" selected hidden>
            Please Select
          </option>
          <option value="Primary Residence">Primary Residence</option>
          <option value="Secondary Residence">Secondary Residence</option>
          <option value="Investment">Investment</option>
          <option value="Other">Other</option>
        </select>
      </div>
    );
  }
}
