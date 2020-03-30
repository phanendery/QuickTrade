import React, { Component } from "react";
import { Query } from "react-apollo";
import { FETCH_USER } from "../../graphql/queries";

export const UserIndex = () => {
  return (
    <Query query={FETCH_USER}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <ul>
            {data.users.map(user => (
              <li key={user._id}>{user.name}</li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
};
