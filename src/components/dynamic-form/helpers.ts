import type { FormSchema } from "./types";

export const defaultSchema: FormSchema = {
  title: "Contact Request",
  description: "Example form generated from schema",
  fields: [
    { name: "fullName", label: "Full Name", type: "text", validation: { required: true, minLength: 3 } },
    { name: "email", label: "Email", type: "text", validation: { required: true, pattern: "^\\S+@\\S+\\.\\S+$" } },
    { name: "age", label: "Age", type: "number", validation: { min: 18, max: 120 } },
    { name: "date", label: "Date", type: "date", validation: { required: true } },
    {
      name: "contactMethod",
      label: "Preferred Contact",
      type: "select",
      options: [
        { label: "Email", value: "email" },
        { label: "Phone", value: "phone" },
      ],
    },
    { name: "phone", label: "Phone Number", type: "text", conditional: { field: "contactMethod", value: "phone" } },
    { name: "subscribe", label: "Subscribe to updates", type: "checkbox" },
  ],
};

export function isJsonValid(text: string): { ok: boolean; message?: string } {
  try {
    JSON.parse(text);
    return { ok: true };
  } catch (e: any) {
    return { ok: false, message: "Please provide valid JSON format: " + (e?.message ?? "Invalid JSON") };
  }
}

export function getDefaultValues(schema: FormSchema) {
  const obj: Record<string, any> = {};

  for (const f of schema.fields) {
    switch (f.type) {
      case "text":
        obj[f.name] = "";
        break;
      case "date":
        obj[f.name] = null;
        break;
      case "number":
        obj[f.name] = 0;
        break;
      case "select":
        obj[f.name] = f.options && f.options.length ? f.options[0].value : "";
        break;
      case "checkbox":
        obj[f.name] = false;
        break;
      default:
        obj[f.name] = "";
    }
  }
  return obj;
}
