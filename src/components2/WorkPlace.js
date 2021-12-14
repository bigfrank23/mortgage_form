import React, { Component } from 'react'

export default class WorkPlace extends Component {
    constructor(props) {
        super(props)
    
       
        this.state = {
          workplace: "",
          jobtitle: "",
          workaddress: "",
          streetaddress: "",
          streetaddress2: "",
          city: "",
          state1: "",
          postal: "",
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeWorkPlace = this.onChangeWorkPlace.bind(this);
    this.onChangeWorkAddress = this.onChangeWorkAddress.bind(this);
    this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState1 = this.onChangeState1.bind(this);
    this.onChangePostal = this.onChangePostal.bind(this);
    this.onChangeStreetAddress = this.onChangeStreetAddress.bind(this);
    this.onChangeStreetAddress2 = this.onChangeStreetAddress2.bind(this);
  }
  onChangeStreetAddress(e) {
    this.setState({ streetaddress: e.target.value });
  }
  onChangeStreetAddress2(e) {
    this.setState({ streetaddress2: e.target.value });
  }
  onChangeWorkPlace(e) {
    this.setState({ workplace: e.target.value });
  }
  onChangeWorkAddress(e) {
    this.setState({ workaddress: e.target.value });
  }
  onChangeJobTitle(e) {
    this.setState({ jobtitle: e.target.value });
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
      workplace: "",
      jobtitle: "",
      workaddress: "",
      streetaddress: "",
      streetaddress2: "",
      city: "",
      state1: "",
      postal: "",
    });
  }
  componentDidMount() {

    this.userData = JSON.parse(localStorage.getItem('userWorkAddress'));
    if (localStorage.getItem('userWorkAddress')) {
        this.setState({
           workplace: this.userData.workplace,
          jobtitle: this.userData.jobtitle,
          workaddress: this.userData.workaddress,
          streetaddress: this.userData.streetaddress,
          streetaddress2: this.userData.streetaddress2,
          city: this.userData.city,
          state1: this.userData.state1,
          postal: this.userData.postal,
        })
    }else{
        this.setState({
          workplace: "",
          jobtitle: "",
          workaddress: "",
          streetaddress: "",
          streetaddress2: "",
          city: "",
          state1: "",
          postal: "",
        });
    }
  }
  componentWillUpdate(nextProps, nextState){
      localStorage.setItem('userWorkAddress', JSON.stringify(nextState))
  }
    
    render() {
        return (
          <div className="formGroup">
            <label>
              <input
                type="text"
                value={this.state.workplace}
                onChange={this.onChangeWorkPlace}
                required
                placeholder="Company Name"
              />
              <h6>Place of Work</h6>
            </label>
            <label>
              <input
                type="text"
                value={this.state.jobtitle}
                onChange={this.onChangeJobTitle}
                required
              />
              <h6>Job Title</h6>
            </label>
            <label>
              <input
                type="text"
                value={this.state.workaddress}
                onChange={this.onChangeWorkAddress}
                required
              />{" "}
              <h6>Work Address</h6>
            </label>
            <label>
              <input
                type="text"
                value={this.state.streetaddress}
                onChange={this.onChangeStreetAddress}
                required
              />
              <h6>Street Address</h6>
            </label>
            <label>
              <input
                type="text"
                value={this.state.streetaddress2}
                onChange={this.onChangeStreetAddress2}
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
