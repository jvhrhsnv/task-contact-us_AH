import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    email: "",
    isAgree: false,
  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleIsAgree = (event) => {
    this.setState({
        isAgree: event.target.checked
    })
  }

  submitBtn = () => {
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const isValidEmail = regEmail.test(this.state.email);

    const isValidIsAgree = this.state.isAgree;

    if (!isValidEmail) {
      alert("PLease, enter valid email!");
      return;
    }

    if (!isValidIsAgree) {
      alert("Please, agree with terms");
      return;
    }

    this.setState({
      email: "",
      isAgree: false
    })

    alert("Congratulations!!!")
  };
  render() {
    const { email, isAgree } = this.state;
    return (
      <div className="app">
        <div className="container">
          <div className="header">Contact us</div>
          <main>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleEmail}
            />
            <br />
            <input
              type="checkbox"
              name="agreement"
              id="agreement"
              checked={isAgree}
              onChange={this.handleIsAgree}
            />
            <label htmlFor="agreement">Terms & Conditions</label>
            <br />
            <button className="btn-submit" onClick={this.submitBtn} >
              Submit
            </button>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
