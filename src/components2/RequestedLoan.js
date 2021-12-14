import React, { Component } from 'react'

export default class RequestedLoan extends Component {
  constructor(props) {
    super(props);

    this.state = {
        requestedloan: ""
    };
    this.onChangeRequestedLoan = this.onChangeRequestedLoan.bind(this);
  }
  onChangeRequestedLoan(e) {
    this.setState({ requestedloan: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.setState({ currentIndex: this.state.currentIndex + 1 });
    this.setState({
      requestedloan: "",
    });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("userRequestedLoan"));
    if (localStorage.getItem("userRequestedLoan")) {
      this.setState({
        requestedloan: this.userData.requestedloan,
      });
    } else {
      this.setState({
        requestedloan: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("userRequestedLoan", JSON.stringify(nextState));
  }
  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="1,000 euros"
          value={this.state.requestedloan}
          onChange={this.onChangeRequestedLoan}
          required
        />
        <br />
        <small>(%)</small>
      </div>
    );
  }
}
