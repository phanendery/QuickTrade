import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { IS_LOGGED_IN } from "../graphql/queries";
import { ApolloConsumer } from "react-apollo";
import { matchPath } from "react-router";

const Nav = props => {
  const isLoginPath = !!matchPath(props.location.pathname, "/login");
  const isRegisterPath = !!matchPath(props.location.pathname, "/register");
  const renderNav = !isLoginPath && !isRegisterPath;
  return renderNav ? (
    <ApolloConsumer>
      {client => (
        <Query query={IS_LOGGED_IN}>
          {({ data }) => {
            if (data.isLoggedIn) {
              return (
                <button
                  onClick={e => {
                    e.preventDefault();
                    localStorage.removeItem("auth-token");
                    client.writeData({ data: { isLoggedIn: false } });
                    props.history.push("/");
                  }}
                >
                  Logout
                </button>
              );
            } else {
              return (
                <div>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Sign Up</Link>
                </div>
              );
            }
          }}
        </Query>
      )}
    </ApolloConsumer>
  ) : null;
};

export default Nav;
