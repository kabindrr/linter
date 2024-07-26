import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';



export default [
  {files: ['**/*.{js,mjs,cjs,jsx}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
 
  pluginReact.configs.flat.recommended,
  {
   
    rules: {
      'semi': 'warn',
      'no-unused-vars': 'warn',
      'indent': ['warn',2],
      'quotes': ['warn','single']
    }
  }
];