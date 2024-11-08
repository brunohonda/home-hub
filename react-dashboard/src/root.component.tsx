import { Box, Grid } from "@mui/material";
import HeroCard from "./components/HeroCard";

export default function Root() {
  return (
    <Box
      width={2 / 3}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ margin: "auto" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeroCard />
        </Grid>
      </Grid>
    </Box>
  );
}
