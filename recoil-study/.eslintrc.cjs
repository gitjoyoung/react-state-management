module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: 2022, sourceType: "module" },
  settings: {
    react: {
      version: "18.2",
    },
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"], // Add your alias and corresponding path
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
