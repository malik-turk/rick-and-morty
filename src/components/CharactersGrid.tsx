import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// Components
import CharacterCard from "./CharacterCard";
import CharacterSkeleton from "./CharacterSkeleton";

// Types
import { CharactersGridProps } from "../types/CharactersGridProps";
import { CharactersData } from "../types/Characters.";

// Styled components
const CharWrapper = styled("div")`
  margin-top: 20px;
`;

export default function CharactersGrid({ data, loading }: CharactersGridProps) {
  const skeletonArray = new Array(6).fill('char-skeleton');

  return (
    <CharWrapper>
      <Grid container spacing={2}>
        {loading
          ? skeletonArray.map((skeleton, i) => <CharacterSkeleton key={`char-skeleton-${i}`} />)
          : data?.characters?.results.map((character: CharactersData) => (
              <Grid key={character.id} item xs={6} md={4}>
                <CharacterCard character={character} />
              </Grid>
            ))}
      </Grid>
    </CharWrapper>
  );
}
