import { useEffect, useState, useLayoutEffect } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// Components
import CharacterCard from "./CharacterCard";
import CharacterSkeleton from "./CharacterSkeleton";

// Hooks
import { checkInfiniteScrollDetect } from "../utility/infinite-loop";

// Types
import { CharactersGridProps } from "../types/CharactersGridProps";

// Types
import { CharactersData } from "../types/Characters.";

// Styled components
const CharWrapper = styled("div")`
  margin-top: 20px;
`;

// Page number initial value
let pageNumber = 1;

export default function CharactersGrid({ data, loading, refetch }: CharactersGridProps) {
  const [charactersData, setCharactersData] = useState<CharactersData[]>([]);
  const skeletonArray = new Array(6).fill('char-skeleton');

  useLayoutEffect(() => {
    document.addEventListener('scroll', () => {
      if (checkInfiniteScrollDetect()) {
        pageNumber = pageNumber + 1;
        refetch({ page: pageNumber });
      }
    });
  }, [refetch]);

  useEffect(() => {
    if (!loading) {
      setCharactersData([...charactersData, ...data?.characters?.results]);
    }
  // Disabling the next line because no need to watch 'data?.characters?.results'
  // It will cause errors
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  return (
    <CharWrapper>
      <Grid container spacing={2}>
        {loading
          ? skeletonArray.map((skeleton, i) => <CharacterSkeleton key={`char-skeleton-${i}`} />)
          : charactersData.map((character: CharactersData) => (
              <Grid key={character.id} item xs={6} md={4}>
                <CharacterCard character={character} />
              </Grid>
            ))}
      </Grid>
    </CharWrapper>
  );
}
