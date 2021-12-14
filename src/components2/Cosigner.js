import React, { Component } from "react";

export default class Cosigner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      iD: "",
      phone: "",
    };
    this.nameEl = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
  }
  onChangeFirstName(e) {
    this.setState({ firstname: e.target.value });
  }
  onChangeLastName(e) {
    this.setState({ lastname: e.target.value });
  }
  onChangeID(e) {
    this.setState({ iD: e.target.value });
  }
  onChangePhone(e) {
    this.setState({ phone: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.setState({ currentIndex: this.state.currentIndex + 1 });
    this.setState({
      firstname: "",
      lastname: "",
      iD: "",
      phone: "",
    });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("coSigner"));
    if (localStorage.getItem("coSigner")) {
      this.setState({
        firstname: this.userData.firstname,
        lastname: this.userData.lastname,
        iD: this.userData.iD,
        phone: this.userData.phone,
      });
    } else {
      this.setState({
        firstname: "",
        lastname: "",
        iD: "",
        phone: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("coSigner", JSON.stringify(nextState));
  }
  render() {
    return (
        <div className="formGroup">
          <label>
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.onChangeFirstName}
              required
            />
            <h6>First Name</h6>
          </label>
          <label>
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.onChangeLastName}
              required
            />
            <h6>Last Name</h6>
          </label>
          <label>
            <input
              type="text"
              value={this.state.iD}
              onChange={this.onChangeID}
              required
            />
            <h6>ID Number</h6>
          </label>
          <label>
            <input
              type="tel"
              placeholder="(000)000-000"
              value={this.state.phone}
              onChange={this.onChangePhone}
              required
            />
            <h6>Phone Number</h6>
          </label>
        </div>
    );
  }
}
