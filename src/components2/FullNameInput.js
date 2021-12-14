import React, { Component } from 'react'

export default class FullNameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      doB: "",
      iD: "",
      email: "",
      phone: "",
    };
    this.nameEl = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeDoB = this.onChangeDoB.bind(this);
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
  }
  onChangeFirstName(e) {
    this.setState({ firstname: e.target.value });
  }
  onChangeLastName(e) {
    this.setState({ lastname: e.target.value });
  }
  onChangeDoB(e) {
    this.setState({ doB: e.target.value });
  }
  onChangeID(e) {
    this.setState({ iD: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePhone(e) {
    this.setState({ phone: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.setState({ currentIndex: this.state.currentIndex + 1 });
    this.setState({
      firstname: "",
      lastname: "",
      doB: "",
      iD: "",
      email: "",
      phone: "",
    });
  }
  componentDidMount() {

    this.userData = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
        this.setState({
          firstname: this.userData.firstname,
          lastname: this.userData.lastname,
          doB: this.userData.doB,
          iD: this.userData.iD,
          email: this.userData.email,
          phone: this.userData.phone,
        });
    }else{
        this.setState({
          firstname: '',
          lastname: '',
          doB: '',
          iD: '',
          email: '',
          phone: '',
        });
    }
  }
  componentWillUpdate(nextProps, nextState){
      localStorage.setItem('user', JSON.stringify(nextState))
  }
  render() {
    return (
        <div className="formGroup">
          <label>
            <input type="text" value={this.state.firstname} onChange={this.onChangeFirstName} required />
            <h6>First Name</h6>
          </label>
          <label>
            <input type="text" value={this.state.lastname} onChange={this.onChangeLastName} required />
            <h6>Last Name</h6>
          </label>
          <label>
            <input type="date" value={this.state.doB} onChange={this.onChangeDoB} required />
            <h6>Date of birth</h6>
          </label>
          <label>
            <input type="text" value={this.state.iD} onChange={this.onChangeID} required />
            <h6>ID Number</h6>
          </label>
          <label>
            <input type="email" placeholder="example@example.com" value={this.state.email} onChange={this.onChangeEmail} required />
            <h6>Email Address</h6>
          </label>
          <label>
            <input type="tel" placeholder="(000)000-000" value={this.state.phone} onChange={this.onChangePhone} required />
            <h6>Phone Number</h6>
          </label>
        </div>
    );
  }
}
