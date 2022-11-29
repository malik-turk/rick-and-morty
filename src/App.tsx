import { useQuery } from "@apollo/client";

// Queries
import { CHARACTERS_QUERY } from "./graphql/characters-query";

function App() {
  const { loading, error, data } = useQuery(CHARACTERS_QUERY);

  return (
    <div></div>
  );
}

export default App;
