import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor() {
    super()
    this.click = this.click.bind(this);
  }

  click(e) {
    console.log("CLICK!");
    e.preventDefault();
    const body = { email: "john.doe@example.com" };
    fetch("/api/signup", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  }

  render() {
    return (
      <div>
        <div style={{position: "relative"}}>
          <div className="navbar navbar-light">
            Super app, Please sign up!
          </div>
        </div>

        <div className="bg-dark" style={{
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
                  <input className="form-control" type="text" name="email" />
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
