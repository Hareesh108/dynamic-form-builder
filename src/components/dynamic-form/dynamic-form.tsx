import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, MenuItem, Paper, Typography } from "@mui/material";
import { useMemo } from "react";
import { useForm, FormProvider } from "react-hook-form";

import type { FormSchema } from "./types";

import { Field } from "../form/fields";
import { getDefaultValues } from "./helpers";
import { buildZodSchema } from "./utils";

type Props = {
  schema: FormSchema;
  onSubmit: (data: unknown) => void;
};

export default function DynamicForm({ schema, onSubmit }: Readonly<Props>) {
  const zodSchema = useMemo(() => buildZodSchema(schema.fields), [schema]);

  const methods = useForm({ resolver: zodResolver(zodSchema), defaultValues: getDefaultValues(schema) });

  const { handleSubmit, watch } = methods;

  const values = watch();

  return (
    <FormProvider {...methods}>
      <Paper sx={{ p: 3 }} elevation={2}>
        {schema.title && (
          <Typography variant="h6" sx={{ mb: 2 }}>
            {schema.title}
          </Typography>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "grid", gap: 2 }}>
          {schema.fields.map((field) => {
            if (field.conditional) {
              const other = values[field.conditional.field];
              if (other !== field.conditional.value) return null;
            }

            switch (field.type) {
              case "text":
              case "number":
                return (
                  <Field.Text
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    type={field.type === "number" ? "number" : "text"}
                    helperText={field.helperText}
                  />
                );

              case "select":
                return (
                  <Field.Select key={field.name} name={field.name} label={field.label} helperText={field.helperText}>
                    {field.options?.map((o) => (
                      <MenuItem key={String(o.value)} value={String(o.value)}>
                        {o.label}
                      </MenuItem>
                    ))}
                  </Field.Select>
                );

              case "checkbox":
                return <Field.Checkbox key={field.name} name={field.name} label={field.label} />;

              case "date":
                return <Field.DatePicker key={field.name} name={field.name} label={field.label} type="date" />;

              default:
                return null;
            }
          })}

          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </FormProvider>
  );
}
