import { Grid, Skeleton } from "@mui/material";

export default function CharacterSkeleton() {
  return (
    <Grid data-testid="loading-skeleton" item xs={6} md={4}>
      <Skeleton variant="rectangular" width={"100%"} height={118} />
      <Skeleton />
      <Skeleton width="60%" />
    </Grid>
  );
}
