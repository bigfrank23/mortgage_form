import React, { Component } from "react";

export default class JobStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      jobname: "",
    };
    this.onChangeJobName = this.onChangeJobName.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      display: false,
    });
    localStorage.removeItem("userJob");
    localStorage.setItem("employment", `${e.target.value}`);
    // console.log(value);
  };
  handleChange2 = () => {
    this.setState({
      display: true,
    });
    localStorage.removeItem("employment");
  };

  onChangeJobName(e) {
    this.setState({ jobname: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.setState({ currentIndex: this.state.currentIndex + 1 });
    this.setState({
      jobname: ""
    });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("userJob"));
    if (localStorage.getItem("userJob")) {
      this.setState({
        jobname: this.userData.jobname
      });
    } else {
      this.setState({
        jobname: ""
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("userJob", JSON.stringify(nextState));
  }

  render() {
    return (
      <div className="radio-buttons">
        <label className="labelContainer">
          <input
            type="radio"
            name="radio"
            value="Employed"
            onChange={this.handleChange}
            required
          />
          Employed
          <span className="check"></span>
        </label>
        <label className="labelContainer">
          <input
            type="radio"
            name="radio"
            value="Unemployed"
            onChange={this.handleChange2}
            required
          />
          Unemployed
          <span className="check"></span>
        </label>
        {this.state.display ? (
          <div className="formGroup">
            <label>
              <h6>Please specify what you do for a living</h6>
              <input
                type="text"
                value={this.state.jobname}
                onChange={this.onChangeJobName}
                required
              />
            </label>
          </div>
        ) : null}
      </div>
    );
  }
}

