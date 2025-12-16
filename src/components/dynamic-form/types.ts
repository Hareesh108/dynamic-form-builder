export type FieldType = "text" | "number" | "select" | "checkbox" | "date";

export type Option = {
  label: string;
  value: string | number | boolean;
};

export type ValidationRules = {
  required?: boolean | string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
};

export type ConditionalRule = {
  field: string;
  value: any;
};

export type FieldSchema = {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: Option[];
  helperText?: string;
  validation?: ValidationRules;
  conditional?: ConditionalRule;
};

export type FormSchema = {
  title?: string;
  description?: string;
  fields: FieldSchema[];
};
