import React, { Component } from 'react'

export default class Interest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interest: "",
    };
    this.onChangeInterest = this.onChangeInterest.bind(this);
  }
  onChangeInterest(e) {
    this.setState({ interest: e.target.value });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("userInterest"));
    if (localStorage.getItem("userInterest")) {
      this.setState({
        interest: this.userData.interest,
      });
    } else {
      this.setState({
        interest: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("userInterest", JSON.stringify(nextState));
  }
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.interest}
          onChange={this.onChangeInterest}
          required
        />{" "}
        <br />
        <small>(in euro)</small>
      </div>
    );
  }
}
