import React, { Component } from "react";

export default class LoanRepayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loanrepay: "",
    };
    this.onChangeLoanRepay = this.onChangeLoanRepay.bind(this);
  }
  onChangeLoanRepay(e) {
    this.setState({ loanrepay: e.target.value });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("userLoanRepay"));
    if (localStorage.getItem("userLoanRepay")) {
      this.setState({
        loanrepay: this.userData.loanrepay,
      });
    } else {
      this.setState({
        loanrepay: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("userLoanRepay", JSON.stringify(nextState));
  }
  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="1,000 euros"
          value={this.state.loanrepay}
          onChange={this.onChangeLoanRepay}
          required
        />{" "}
        <br />
        <small>(in euro)</small>
      </div>
    );
  }
}
