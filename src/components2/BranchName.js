import React, { Component } from "react";

export default class BranchName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      branchname: "",
    };
    this.onChangeBranchName = this.onChangeBranchName.bind(this);
  }
  onChangeBranchName(e) {
    this.setState({ branchname: e.target.value });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("userBranchName"));
    if (localStorage.getItem("userBranchName")) {
      this.setState({
        branchname: this.userData.branchname,
      });
    } else {
      this.setState({
        branchname: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("userBranchName", JSON.stringify(nextState));
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.branchname}
          onChange={this.onChangeBranchName}
          required
        />{" "}
      </div>
    );
  }
}
