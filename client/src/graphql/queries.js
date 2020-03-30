import gql from "graphql-tag";

export const FETCH_USER = gql`
  {
    users {
      _id
      name
      email
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;
