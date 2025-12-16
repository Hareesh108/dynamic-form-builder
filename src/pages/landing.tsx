import { useCallback } from "react";
import { useNavigate } from "react-router";
import { Box, Container, Typography, Button } from "@mui/material";
import { paths } from "src/routes/paths";

export default function Page() {
  const navigate = useNavigate();

  const goToDashboard = useCallback(() => {
    navigate(paths.dashboard.home);
  }, [navigate]);

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.paper",
        py: 8,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
          Dynamic Form Builder
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Build and deploy custom forms visually — schema-driven, validated, and
          conditionally reactive. No code required.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            size="large"
            onClick={goToDashboard}
            sx={{ px: 3, py: 1.25 }}
          >
            Open Form Builder
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
