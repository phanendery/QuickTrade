import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { REGISTER_USER } from "../graphql/mutations";
import styled from "styled-components";
import Slide from "./Slide";

const Page = styled.div`
  display: flex;
  flex-direction: row;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputText = styled.input`
  width: 400px;
  border-radius: 4px;
  border: lightgrey;
  border-style: solid;
  border-width: 1px;
  height: 50px;
  font-size: 20px;
  padding-left: 15px;
  background-color: white;
  font-family: dinPro-light;
  color: lightgrey;
  margin-top: 40px;
`;

const FormContainer = styled.div`
  align-items: center;
  padding-left: 50px;
`;

const SignUpButton = styled.button`
  width: 415px;
  margin-top: 35px;
  height: 50px;
  font-family: dinPro;
  font-size: 18px;
  border-radius: 5px;
  background-color: #21ce99;
  color: white;
  border: none;
`;

const PHolder = styled.p`
  font-size: 40px;
  font-family: dinPro-light;
`;

const THolder = styled.p`
  font-size: 25px;
  font-family: dinPro-light;
`;

const SHolder = styled.div`
  padding-left: 50px;
  margin-top: 200px;
  width: 500px;
  align-items: center;
`;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateCache(client, { data }) {
    client.writeData({
      data: { isLoggedIn: true }
    });
  }

  render() {
    return (
      <Mutation
        mutation={REGISTER_USER}
        onCompleted={data => {
          console.log(data);
          const { token } = data.register;
          localStorage.setItem("auth-token", token);
          this.props.history.push("/");
        }}
        update={(client, data) => this.updateCache(client, data)}
      >
        {registerUser => (
          <div>
            <Page>
              <FormContainer>
                <Form
                  onSubmit={e => {
                    e.preventDefault();
                    registerUser({
                      variables: {
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password
                      }
                    });
                  }}
                >
                  <PHolder>Make Your Money Move</PHolder>
                  <THolder>
                    Robinhood lets you invest in companies you love,
                    commission-free.
                  </THolder>
                  <InputText
                    value={this.state.name}
                    onChange={this.update("name")}
                    placeholder="Name"
                  />
                  <InputText
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                  />
                  <InputText
                    value={this.state.password}
                    onChange={this.update("password")}
                    type="password"
                    placeholder="Password"
                  />
                  <SignUpButton type="submit">Sign Up!</SignUpButton>
                </Form>
              </FormContainer>
              <SHolder>
                <Slide></Slide>
              </SHolder>
            </Page>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Register;
