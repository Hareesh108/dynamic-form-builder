# Dynamic Form Builder

A small React + TypeScript project demonstrating a schema-driven Dynamic Form Builder. Business users can author JSON schemas to render forms without writing UI code.

## Scripts

This project includes the following helpful NPM scripts:

- `npm run dev` — start the Vite dev server (local development)
- `npm run lint:fix` — run Prettier then ESLint with `--fix` to format and fix lint issues. auto-format and correct lintable problems.

## How to run (You can use Bun as well)

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

## Business Context

Your company is building a low-code platform where business users can create custom forms without technical knowledge. This project shows a core component that dynamically renders forms from JSON configuration and handles validation and conditional fields.

## Problem Statement

Create a Dynamic Form Builder component that renders forms based on a JSON schema and handles form submission with validation. This is a core component that will be used across multiple products.

## Technical Requirements

- Schema-driven rendering: Accept a JSON schema and render appropriate form fields
- Field types support: Text, number, select, checkbox, date inputs
- Dynamic validation: Support custom validation rules per field
- Conditional fields: Show/hide fields based on other field values
- Form submission: Handle form data collection and submission

## Implemented (so far)

1. Main `DynamicForm` component with schema-based rendering
2. Field components for different input types (`Text`, `Select`, `Checkbox`) located under `src/components/form`
3. Validation logic using `zod` + `react-hook-form` (`src/components/dynamic-form/utils.ts`)
4. Conditional field rendering based on simple dependency rules
5. Form submission handler (demo logs to console)
6. TypeScript interfaces for schema and form data (`src/components/dynamic-form/types.ts`)
7. `SchemaEditor` — left JSON editor (with line numbers, syntax check) + right live preview

## Notes & Future Improvements

- Replace the simple textarea editor with Monaco/CodeMirror for syntax highlighting and schema-aware completions.
- Improve conditional expressions to support operators (>, <, contains, in, etc.).
- Add persistence (save/load schemas to localStorage or backend) and import/export features.
- Expand field types and custom components (file upload, rich text, repeating groups).

If I get time I can improve TypeScript types and add a few more custom components.

---
