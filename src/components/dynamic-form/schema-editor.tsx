import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useCallback, useMemo, useState } from "react";

import type { FormSchema } from "./types";

import DynamicForm from "./dynamic-form";
import { defaultSchema, isJsonValid } from "./helpers";

export default function SchemaEditor() {
  const [text, setText] = useState(() => JSON.stringify(defaultSchema, null, 2));
  const [schema, setSchema] = useState<FormSchema>(defaultSchema);
  const [errors, setErrors] = useState<string[]>([]);

  const suggested = useMemo(
    () => ({
      allowedTypes: ["text", "number", "select", "checkbox", "date"],
      sampleField: {
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter first name",
        validation: { required: true, minLength: 2 },
      },
    }),
    [],
  );

  const apply = useCallback(() => {
    const check = isJsonValid(text);
    if (!check.ok) {
      setErrors([check.message ?? "Please provide valid JSON format"]);
      return;
    }

    try {
      const parsed = JSON.parse(text);
      setErrors([]);
      setSchema(parsed);
    } catch (e: any) {
      setErrors([`Invalid JSON: ${e.message}`]);
    }
  }, [text]);

  const loadDefault = useCallback(() => {
    setText(JSON.stringify(defaultSchema, null, 2));
    setSchema(defaultSchema);
    setErrors([]);
  }, []);

  const handlePreviewSubmit = useCallback((data: any) => {
    console.log("Preview Submit", data);
    alert("Preview form submitted — check console");
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 2 }} elevation={2}>
          <Typography variant="h6">Schema Editor</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Edit the form schema JSON on the left then click Apply to update the preview.
          </Typography>

          <TextField
            multiline
            minRows={16}
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ fontFamily: "monospace", mb: 2 }}
          />

          {errors.length > 0 && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="error">
                Errors
              </Typography>
              {errors.map((err, i) => (
                <Typography key={i} variant="body2" color="error">
                  {err}
                </Typography>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" onClick={apply}>
              Apply
            </Button>
            <Button variant="outlined" onClick={loadDefault}>
              Load Default
            </Button>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2">Suggestions</Typography>
          <Typography variant="body2" color="text.secondary">
            Allowed types: {suggested.allowedTypes.join(", ")}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              fontFamily: "monospace",
              bgcolor: "#f6f8fa",
              p: 1,
              borderRadius: 1,
            }}
          >
            {JSON.stringify(suggested.sampleField, null, 2)}
          </Typography>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 2 }} elevation={2}>
          <Typography variant="h6">Live Preview</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Right side updates after Apply.
          </Typography>

          <DynamicForm schema={schema} onSubmit={handlePreviewSubmit} />
        </Paper>
      </Grid>
    </Grid>
  );
}
