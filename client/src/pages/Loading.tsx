import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

export const Loading = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      sx={{ width: "100vw", justifyContent: "center", height: "80vh" }}
    >
      <CircularProgress size="20rem" />
    </Stack>
  );
};
