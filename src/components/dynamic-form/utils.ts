import { z } from "zod";

import type { FieldSchema } from "./types";

function fieldToZod(field: FieldSchema) {
  const v = field.validation;

  switch (field.type) {
    case "text": {
      let schema = z.string();
      if (v?.minLength) schema = schema.min(v.minLength, `Minimum ${v.minLength} characters`);
      if (v?.maxLength) schema = schema.max(v.maxLength, `Maximum ${v.maxLength} characters`);
      if (v?.pattern) schema = schema.regex(new RegExp(v.pattern), "Invalid format");
      if (v?.required) schema = schema.nonempty(typeof v.required === "string" ? v.required : "Required");
      return schema;
    }

    case "number": {
      let schema = z.number();
      if (typeof v?.min === "number") schema = schema.min(v.min, `Minimum ${v.min}`);
      if (typeof v?.max === "number") schema = schema.max(v.max, `Maximum ${v.max}`);
      if (v?.required)
        schema = schema.refine((val) => val !== null && val !== undefined, {
          message: typeof v.required === "string" ? v.required : "Required",
        });
      return schema;
    }

    case "select": {
      let schema = z.union([z.string(), z.number()]);
      if (v?.required) schema = z.string().nonempty(typeof v.required === "string" ? v.required : "Required");
      return schema;
    }

    case "checkbox": {
      let schema = z.boolean();
      if (v?.required)
        schema = schema.refine(Boolean, { message: typeof v.required === "string" ? v.required : "Required" });
      return schema;
    }

    case "date": {
      let schema = z.string();
      if (v?.required) schema = schema.nonempty(typeof v.required === "string" ? v.required : "Required");
      return schema;
    }

    default:
      return z.any();
  }
}

export function buildZodSchema(fields: FieldSchema[]) {
  const shape: Record<string, any> = {};

  for (const f of fields) {
    shape[f.name] = fieldToZod(f);
  }

  return z.object(shape);
}
