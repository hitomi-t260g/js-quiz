module.exports = {
  transform: {
    "^.+\\.tsx?$": [
      "esbuild-jest",
      {
        sourcemap: true,
        loaders: {
          ".test.ts": "tsx",
        },
      },
    ],
    "^.+\\.jsx?$": [
      "esbuild-jest",
      {
        sourcemap: true,
        loaders: {
          ".test.js": "jsx",
        },
      },
    ],
  },
  testMatch: ["**/*.test.ts", "**/*.test.js"],
};
