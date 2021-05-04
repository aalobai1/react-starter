module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ["@typescript-eslint", "simple-import-sort"],
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  // Fine tune rules
  rules: {
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
          requireLast: true,
        },
      },
    ],
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions"],
      },
    ],
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "react/prop-types": 0,
    "no-debugger": "error",
    "no-console": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react"],
          ["^\\u0000"],
          ["^(@(?!App|Spec))?\\w"],
          ["^[^.]"],
          ["^\\."],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            accessibility: "no-public",
            overrides: {
              parameterProperties: "off",
            },
          },
        ],
      },
    },
  ],
};
