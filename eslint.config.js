import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

import perfectionist from "eslint-plugin-perfectionist";
import unusedImports from "eslint-plugin-unused-imports"

export default defineConfig([
  globalIgnores(["dist"]),
  {
    plugins: {
      perfectionist,
      "unused-imports": unusedImports,
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",

       // unused imports
      "unused-imports/no-unused-imports": 1,
      "unused-imports/no-unused-vars": [
        0,
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],

      // perfectionist
      "perfectionist/sort-imports": [
        1,
        {
          type: "alphabetical",
          order: "asc",
          fallbackSort: { type: "unsorted" },
          ignoreCase: true,
          specialCharacters: "keep",
          internalPattern: ["^~/.+", "^@/.+"],
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: "always",
          maxLineLength: undefined,
          groups: [
            "type-import",
            ["value-builtin", "value-external"],
            "type-internal",
            "value-internal",
            "components",
            "lib",
            ["type-parent", "type-sibling", "type-index"],
            ["value-parent", "value-sibling", "value-index"],
            "ts-equals-import",
            "unknown",
          ],
          customGroups: [
            {
              groupName: "components",
              elementNamePattern: "~/components",
            },
            {
              groupName: "lib",
              elementNamePattern: "@/lib",
            },
          ],
          environment: "node",
        },
      ],
    },
  },
]);
