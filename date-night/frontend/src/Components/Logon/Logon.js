import React, { Component } from "react";
import { Button, Card, Col, Input, Row } from "react-materialize";
import "whatwg-fetch";



import { getFromStorage, setInStorage } from "../../utils/storage";

class Logon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: "",
      signUpError: "",
      signInError: "",
      signInEmail: "",
      signInPassword: "",
      signUpFirstName: "",
      signUpLastName: "",
      signUpEmail: "",
      signUpPassword: ""
    };
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage("Date_Night");
    if (obj && obj.token) {
      const { token } = obj;
      //verifying token
      fetch("api/account/verify?token=" + token)
        .then(res => res.json())
        .then(JSON => {
          if (JSON.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value
    });
  }

  onTextboxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value
    });
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value
    });
  }

  onSignUp() {
    // Grab state
    const {
      signUpEmail,
      signUpPassword,
      signUpFirstName,
      signUpLastName
    } = this.state;
    this.setState({
      isLoading: true
    });
    // Post request to backend
    fetch("/api/account/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpFirstName: "",
            signUpLastName: "",
            signUpEmail: "",
            signUpPassword: ""
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          });
        }
      });
  }

  onSignIn() {
    // Grab state
    const { signInEmail, signInPassword } = this.state;
    this.setState({
      isLoading: true
    });
    // Post request to backend
    fetch("/api/account/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        if (json.success) {
          setInStorage("Date_Night", { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInEmail: "",
            signInPassword: "",
            token: json.token
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false
          });
        }
      });
  }

    logout () {
        const obj = getFromStorage("Date_Night");
        this.setState({
            isLoading: true,
        });
        if (obj && obj.token) {
          const { token } = obj;
          //verifying token
          fetch("api/account/logout?token=" + token)
            .then(res => res.json())
            .then(JSON => {
              if (JSON.success) {
                this.setState({
                    token : '', 
                    isLoading: false 
                });
                console.log("logout success");
              } else {
                this.setState({ 
                    isLoading: false 
                });
              }
            });
        } else {
          this.setState({ 
              isLoading: false 
            });
        }

    }


  render() {
    const {
      isLoading,
      token,
      signInEmail,
      signInError,
      signInPassword,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpError
    } = this.state;

    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    if (!token) {
      return (
          

         <Row>
                <Col s={12} m={4} offset="m0">
                    <Card
                        className="darken-1"
                        textClassName="grey-text"
                    
                        >
                        
        
            {signInError ? <p>{signInError}</p> : null}
            <h4>Sign In</h4>
            <input
              type="email"
              placeholder="Email"
              value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail}
            />
            <input
              type="password"
              placeholder="Password"
              value={signInPassword}
              onChange={this.onTextboxChangeSignInPassword}
            />
            <Button waves='light' onClick={this.onSignIn}>Sign In</Button>
        
        
            {signUpError ? <p>{signUpError}</p> : null}

            <h4>Sign Up</h4>
            <input
              type="text"
              placeholder="First Name"
              value={signUpFirstName}
              onChange={this.onTextboxChangeSignUpFirstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={signUpLastName}
              onChange={this.onTextboxChangeSignUpLastName}
            />
            <input
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={this.onTextboxChangeSignUpEmail}
            />
            <input
              type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={this.onTextboxChangeSignUpPassword}
            />
            <Button waves='light' onClick={this.onSignUp}>Sign up</Button>
            </Card>
         </Col>
     </Row>
      );
    }

    return (
      <div>
        <p>Account</p>
        <button onClick={this.logout}>Logout </button>
      </div>
    );
  }
}

export default Logon;






