import { useQuery } from "@apollo/client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import { styled } from "@mui/material/styles";

// Queries
import { CHARACTERS_QUERY } from "./graphql/characters-query";

// Styled components
const Title = styled(Typography)(({ theme }) => ({
  marginTop: "12px",
}));

function App() {
  const { loading, error, data } = useQuery(CHARACTERS_QUERY);

  return (
    <Container maxWidth="lg">
      <header>
        <Title variant="h4" gutterBottom>
          Rick And Morty Characters
        </Title>
        <Divider />
      </header>
    </Container>
  );
}

export default App;
