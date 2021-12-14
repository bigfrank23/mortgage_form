import React, { Component } from 'react'

export default class MonthlyIncome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      income: "",
    };
    this.onChangeIncome = this.onChangeIncome.bind(this);
  }
  onChangeIncome(e) {
    this.setState({ income: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.setState({ currentIndex: this.state.currentIndex + 1 });
    this.setState({
      income: "",
    });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("userIncome"));
    if (localStorage.getItem("userIncome")) {
      this.setState({
        income: this.userData.income,
      });
    } else {
      this.setState({
        income: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("userIncome", JSON.stringify(nextState));
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Ex: 1,000 euros"
          value={this.state.income}
          onChange={this.onChangeIncome}
          required
        />
      </div>
    );
  }
}
