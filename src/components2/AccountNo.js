import React, { Component } from "react";

export default class AccountNo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountno: "",
    };
    this.onChangeAccountNo = this.onChangeAccountNo.bind(this);
  }
  onChangeAccountNo(e) {
    this.setState({ accountno: e.target.value });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("userAccountNo"));
    if (localStorage.getItem("userAccountNo")) {
      this.setState({
        accountno: this.userData.accountno,
      });
    } else {
      this.setState({
        accountno: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("userAccountNo", JSON.stringify(nextState));
  }
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.accountno}
          onChange={this.onChangeAccountNo}
          required
        />{" "}
      </div>
    );
  }
}
