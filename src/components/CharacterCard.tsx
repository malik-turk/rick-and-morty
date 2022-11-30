import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

export default function ActionAreaCard({ character }: any) {
  return (
    <Badge
      data-testid="character-card"
      color="secondary"
      badgeContent={character.status}
      sx={{ width: "100%" }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Card sx={{ maxWidth: 345, width: '100%' }}>
        <CardMedia
          component="img"
          height="140"
          image={character.image}
          alt={character.name}
          data-testid="character-card--image"
        />
        <CardContent>
          <Typography variant="h5" component="div" data-testid="character-card--title">
            {character.name}
          </Typography>
        </CardContent>
      </Card>
    </Badge>
  );
}
