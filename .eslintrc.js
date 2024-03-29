module.exports = {
  env: {
    browser: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["vue"],
  rules: {},
};
