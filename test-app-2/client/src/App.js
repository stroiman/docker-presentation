import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor() {
    super()
    this.click = this.click.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { email: ""};
    this.status = "";
  }

  click(e) {
    e.preventDefault();
    const body = { email: this.state.email };
    fetch("/api/signup", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(response => {
      if (response.ok) {
        this.setState({status: "OK"});
      } else {
        response.json().then(json => {
          const errorMsg = json.error;
          this.setState({status: "ERROR", errorMsg });
        })
      }
    });
  }

  onChange(e) {
    this.setState({email: e.target.value});
  }

  renderStatus() {
    switch(this.state.status) {
      case "OK": return <div className="alert alert-success">Signup success</div>
      case "ERROR": return (<div className="alert alert-danger">Error signing up<br />{this.state.errorMsg}</div>)
      default: return null;
    }
  }

  render() {
    return (
      <div className="bg-dark">
        <div style={{position: "relative"}}>
          <nav className="navbar bg-light">
            Super app, Please sign up!
          </nav>
          <div className="container mt-4">
            { this.renderStatus() }
          </div>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-4 ">
              <form>
                <div className="form-group">
                  <label htmlFor="email" className="text-light">E-mail:</label>
                  <input className="form-control" type="text" name="email"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary form-control"
                    onClick={this.click}
                  >Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
