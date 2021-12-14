import React, { Component } from "react";

export default class LoanRepayFreq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loanrepayfreq: "",
    };
    this.onChangeLoanRepayFreq = this.onChangeLoanRepayFreq.bind(this);
  }
  onChangeLoanRepayFreq(e) {
    this.setState({ loanrepayfreq: e.target.value });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("userLoanRepayFreq"));
    if (localStorage.getItem("userLoanRepayFreq")) {
      this.setState({
        loanrepayfreq: this.userData.loanrepayfreq,
      });
    } else {
      this.setState({
        loanrepayfreq: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("userLoanRepayFreq", JSON.stringify(nextState));
  }
  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="1,000 euros"
          value={this.state.loanrepayfreq}
          onChange={this.onChangeLoanRepayFreq}
          required
        />{" "}
        <br />
        <small>(in euro)</small>
      </div>
    );
  }
}
