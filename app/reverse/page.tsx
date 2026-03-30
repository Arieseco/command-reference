import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ReversePage() {
  return (
    <Box component="article">
      <Typography id="reverse" variant="h4" component="h1" fontWeight={700} sx={{ mb: 1 }}>
        ???
      </Typography>
      <Typography id="reverse-status" variant="body1" color="text.secondary">
        ??????
      </Typography>
    </Box>
  );
}
