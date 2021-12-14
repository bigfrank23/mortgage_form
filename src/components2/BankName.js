import React, { Component } from "react";

export default class BankName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bankname: "",
    };
    this.onChangeBankName = this.onChangeBankName.bind(this);
  }
  onChangeBankName(e) {
    this.setState({ bankname: e.target.value });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("userBankName"));
    if (localStorage.getItem("userBankName")) {
      this.setState({
        bankname: this.userData.bankname,
      });
    } else {
      this.setState({
        bankname: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("userBankName", JSON.stringify(nextState));
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.bankname}
          onChange={this.onChangeBankName}
          required
        />{" "}
      </div>
    );
  }
}
