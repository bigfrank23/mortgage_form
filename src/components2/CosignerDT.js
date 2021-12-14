import React, { Component } from "react";

export default class CosignerDT extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      street_adress: "",
      street_adress2: "",
      city: "",
      state1: "",
      postal: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeStreet_address = this.onChangeStreet_address.bind(this);
    this.onChangeStreet_address2 = this.onChangeStreet_address2.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState1 = this.onChangeState1.bind(this);
    this.onChangePostal = this.onChangePostal.bind(this);
  }
  onChangeAddress(e) {
    this.setState({ address: e.target.value });
  }
  onChangeStreet_address(e) {
    this.setState({ street_adress: e.target.value });
  }
  onChangeStreet_address2(e) {
    this.setState({ street_adress2: e.target.value });
  }
  onChangeCity(e) {
    this.setState({ city: e.target.value });
  }
  onChangeState1(e) {
    this.setState({ state1: e.target.value });
  }
  onChangePostal(e) {
    this.setState({ postal: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.setState({ currentIndex: this.state.currentIndex + 1 });
    this.setState({
      address: "",
      street_adress: "",
      street_adress2: "",
      city: "",
      state1: "",
      postal: "",
    });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("coSignerDT"));
    if (localStorage.getItem("coSignerDT")) {
      this.setState({
        address: this.userData.address,
        street_adress: this.userData.street_adress,
        street_adress2: this.userData.street_adress2,
        city: this.userData.city,
        state1: this.userData.state1,
        postal: this.userData.postal,
      });
    } else {
      this.setState({
        address: "",
        street_adress: "",
        street_adress2: "",
        city: "",
        state1: "",
        postal: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("coSignerDT", JSON.stringify(nextState));
  }
  render() {
    return (
      <div className="formGroup">
        <label>
          <input
            type="text"
            value={this.state.address}
            onChange={this.onChangeAddress}
            required
          />
          <h6>Address</h6>
        </label>
        <label>
          <input
            type="text"
            value={this.state.street_address}
            onChange={this.onChangeStreet_address}
            required
          />
          <h6>Street Address</h6>
        </label>
        <label>
          <input
            type="text"
            value={this.state.street_address2}
            onChange={this.onChangeStreet_address2}
            required
          />
          <h6>Street Address Line 2</h6>
        </label>
        <label>
          <input
            type="text"
            value={this.state.city}
            onChange={this.onChangeCity}
            required
          />
          <h6>City</h6>
        </label>
        <label>
          <input
            type="text"
            value={this.state.state1}
            onChange={this.onChangeState1}
            required
          />
          <h6>State / Province</h6>
        </label>
        <label>
          <input
            type="text"
            value={this.state.postal}
            onChange={this.onChangePostal}
            required
          />
          <h6>Postal / Zip Code</h6>
        </label>
      </div>
    );
  }
}
