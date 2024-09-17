import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    "settings": {
    "react": {
    "version": "7.34.3" 
    }
    }
   },

   {
   rules: {
    "no-debugger": "off",
    "no-multiple-empty-lines": [2, {"max": 1}]
   }
  }
]