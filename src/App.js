import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    email: "",
    checked: false,
  };

  handleValue = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleChecked = (event) => {
    this.setState({
        checked: event.target.checked
    })
  }

  validateInfo = (event) => {
    if (this.state.email !== "" && this.state.checked !== false) {
      alert("Well done 😎");
    }
    else {
        alert("Error 😒")
    }
  };
  render() {
    const { email, checked } = this.state;
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
              value={email}
              onChange={this.handleValue}
            />
            <br />
            <input
              type="checkbox"
              name="checked"
              id="checked"
              value={checked}
              onChange={this.handleChecked}
            />
            <label htmlFor="checked">Terms & Conditions</label>
            <br />
            <button className="btn-submit" onClick={this.validateInfo} >
              Submit
            </button>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
