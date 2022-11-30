import { useQuery } from "@apollo/client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

// Components
import CharactersGrid from "./components/CharactersGrid";

// Queries
import { CHARACTERS_QUERY } from "./graphql/characters-query";

// Types
import { QueryTypes } from "./types/AppProps";

// Styled components
const Title = styled(Typography)`
  margin-top: 12px;
`;

function App() {
  const { loading, data, refetch }: QueryTypes = useQuery(CHARACTERS_QUERY, {
    variables: { page: 1 },
  });

  return (
    <Container maxWidth="lg">
      <header>
        <Title variant="h4" gutterBottom>
          Rick And Morty Characters
        </Title>
        <Divider />
      </header>
      <CharactersGrid
        data={data}
        loading={loading}
        refetch={refetch}
      />
    </Container>
  );
}

export default App;
