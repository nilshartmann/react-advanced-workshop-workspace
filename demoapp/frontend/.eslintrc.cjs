module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "__generated__", "routeTree.gen.ts"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "unused-imports", "simple-import-sort", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "off",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "prefer-const": "off",

    // im "echten" Leben waeren die evtl. "error" oder "warning":
    "unused-imports/no-unused-imports": "off",
    "simple-import-sort/imports": "off",
    "import/first": "off",
    "import/newline-after-import": "off",
    "import/no-duplicates": "off",
  },
};
