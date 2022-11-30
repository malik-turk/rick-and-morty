import { gql } from "@apollo/client/core";

export const CHARACTERS_QUERY = gql`
  query CharactersQuery($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  }
`;
