import { Box, Container, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { paths } from "src/routes/paths";

export default function Page() {
  const navigate = useNavigate();

  const goToDashboard = useCallback(() => {
    navigate(paths.dashboard.home);
  }, [navigate]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "common.white",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              letterSpacing: "-0.02em",
            }}
          >
            Dynamic Form Builder
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "grey.300",
              maxWidth: 720,
              mx: "auto",
              mb: 5,
            }}
          >
            Design, validate, and deploy schema-driven forms with conditional logic — built for scalability,
            performance, and real-world business workflows.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={goToDashboard}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            Open Form Builder
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={4}>
          {[
            {
              title: "Schema-Driven Rendering",
              desc: "Generate complete forms dynamically from JSON schemas with full type safety.",
            },
            {
              title: "Conditional Logic",
              desc: "Show or hide fields based on user inputs with clean dependency handling.",
            },
            {
              title: "Built-in Validation",
              desc: "Custom validation rules powered by React Hook Form and schema configuration.",
            },
            {
              title: "Reusable Components",
              desc: "Modular field components designed for scalability and maintainability.",
            },
          ].map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    boxShadow: 3,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
