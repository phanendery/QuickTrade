import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../graphql/mutations";
import styled from "styled-components";
import backgroundImage from "../assets/loginbackground.png";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

const ImageHolder = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

const InputText = styled.input`
  width: 350px;
  border-radius: 4px;
  border: none;
  height: 40px;
  font-size: 12px;
  padding-left: 15px;
  background-color: #e8f0fe;
  font-family: dinPro;
`;

const LoginButton = styled.button`
  width: 150px;
  margin-top: 75px;
  height: 50px;
  font-family: dinPro;
  font-size: 18px;
  border-radius: 5px;
  background-color: #21ce99;
  color: white;
  border: none;
`;

const PHolder = styled.p`
  font-size: 14px;
`;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateCache(client, { data }) {
    client.writeData({
      data: { isLoggedIn: data.login.loggedIn }
    });
  }

  render() {
    return (
      <Mutation
        mutation={LOGIN_USER}
        onCompleted={data => {
          const { token } = data.login;
          localStorage.setItem("auth-token", token);
          this.props.history.push("/");
        }}
        update={(client, data) => this.updateCache(client, data)}
      >
        {loginUser => (
          <Container>
            <ImageHolder src={backgroundImage} />
            <FormContainer>
              <div>
                <h1>Welcome to Robinhood</h1>

                <Form
                  onSubmit={e => {
                    e.preventDefault();
                    loginUser({
                      variables: {
                        email: this.state.email,
                        password: this.state.password
                      }
                    });
                  }}
                >
                  <PHolder>Email</PHolder>
                  <InputText
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                  />
                  <PHolder>Password</PHolder>
                  <InputText
                    value={this.state.password}
                    onChange={this.update("password")}
                    type="password"
                    placeholder="Password"
                  />
                  <LoginButton type="submit">Sign In</LoginButton>
                </Form>
              </div>
            </FormContainer>
          </Container>
        )}
      </Mutation>
    );
  }
}

export default Login;
