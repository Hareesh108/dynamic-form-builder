import DynamicForm from "src/components/dynamic-form";
import { Box, Button, Container, Typography } from "@mui/material";
import type { FormSchema } from "src/components/dynamic-form";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import { paths } from "src/routes/paths";

const sampleSchema: FormSchema = {
  title: "Contact Request",
  description: "Example form generated from schema",
  fields: [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      validation: { required: true, minLength: 3 },
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      validation: { required: true, pattern: "^\\S+@\\S+\\.\\S+$" },
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      validation: { min: 18, max: 120 },
    },
    {
      name: "contactMethod",
      label: "Preferred Contact",
      type: "select",
      options: [
        { label: "Email", value: "email" },
        { label: "Phone", value: "phone" },
      ],
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "text",
      conditional: { field: "contactMethod", value: "phone" },
    },
    { name: "subscribe", label: "Subscribe to updates", type: "checkbox" },
  ],
};

export default function Page() {
  const navigate = useNavigate();

  const handleSubmit = (data: any) => {
    // For now, log the data. In real app, send to API.
    // Keep this simple so users can inspect submission output in console.
    // You can extend to show a success snackbar.
    console.log("Form submitted", data);
    alert("Form submitted — check console for data");
  };

  const goToHome = useCallback(() => {
    navigate(paths.landing);
  }, [navigate]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Dashboard — Form Builder Demo
      </Typography>

      <DynamicForm schema={sampleSchema} onSubmit={handleSubmit} />

      <Box sx={{ display: "flex", gap: 2, mt: 4, justifyContent: "center" }}>
        <Button
          variant="outlined"
          size="large"
          onClick={goToHome}
          sx={{ px: 3, py: 1.25 }}
        >
          Go Home
        </Button>
      </Box>
    </Container>
  );
}
