import { gql } from "@apollo/client/core";

export const CHARACTERS_QUERY = gql`
  query Query {
    characters(page: 1) {
      info {
        count
      }
      results {
        name
      }
    }
  }
`;
