module.exports = {
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:jest/recommended",
  ],
  plugins: ["jest", "prefer-arrow"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  rules: {
    camelcase: "off",
    "consistent-return": "off",
    "no-console": "error",
    "no-underscore-dangle": "off",
    "object-curly-newline": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
      },
    ],
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": ["off"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*/*.test.*"],
      },
    ],
    "no-plusplus": ["off"],
    "arrow-body-style": ["off"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
        paths: ["src"],
      },
    },
  },
  overrides: [
    Object.assign(
      {
        files: ["**/*.test.js"],
        env: { jest: true },
        plugins: ["jest"],
      },
      require("eslint-plugin-jest").configs.recommended
    ),
  ],
};
