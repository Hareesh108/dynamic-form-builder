import { Box, Button, Container, Typography } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import SchemaEditor from "src/components/dynamic-form/schema-editor";
import { paths } from "src/routes/paths";

export default function Page() {
  const navigate = useNavigate();

  const goToDashboard = useCallback(() => {
    navigate(paths.landing);
  }, [navigate]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
        Dashboard — Form Builder Demo
      </Typography>

      <SchemaEditor />

      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 3 }}>
        <Button variant="contained" size="large" onClick={goToDashboard} sx={{ px: 3, py: 1.25 }}>
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}
