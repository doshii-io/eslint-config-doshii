module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'mocha',
    'prettier',
    'react',
    'react-hooks',
    'simple-import-sort',
    'jsx-a11y',
    'jest'
  ],
  env: {
    es6: true,
    es2020: true,
    node: true,
    mocha: true,
    browser: true,
    jquery: true,
    'jest/globals': true
  },
  globals: {
    document: false,
    navigator: false,
    window: false,
    _: true,
    $: true,
    sequelize: true,
    Sequelize: true,
    POS_BASE_URL: true,
    PARTNER_BASE_URL: true,
    request: true,
    expect: true,
    should: true,
    Bootstrap: true
  },
  overrides: [
    {
      files: ['**/*.module.css.d.ts'],
      rules: {
        'prettier/prettier': 0
      }
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0
      }
    }
  ],
  rules: {
    // https://eslint.org/docs/rules/#possible-errors
    'arrow-parens': ['error', 'as-needed'],
    'no-underscore-dangle': 0,
    'no-console': 'error',
    'mocha/no-exclusive-tests': 'error',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        semi: true,
        printWidth: 120,
        singleQuote: true,
        arrowParens: 'avoid'
      }
    ],
    'object-shorthand': ['error', 'properties'],
    'no-return-assign': ['error', 'except-parens'],
    'func-names': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    // 'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'one-var': ['error', { initialized: 'never', uninitialized: 'always' }],
    'no-param-reassign': ['error', { props: false }],
    'max-len': [
      'error',
      120,
      {
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreStrings: true
      }
    ],
    'sort-import': 0, // Off in favor of sort-imports plugin
    'no-use-before-define': 0, // Off in favor of @typescript-eslint/no-use-before-define
    'no-duplicate-imports': 0, // Off in favor of @typescript-eslint/no-duplicate-imports
    'no-sequences': 0, // See https://github.com/prettier/eslint-config-prettier#other-rules-worth-mentioning
    'no-return-await': 0, // Off in favor of @typescript-eslint/return-await
    'require-await': 0, // Off in favor of @typescript-eslint/require-await
    'no-shadow': 0, // Off in favor of @typescript-eslint/no-shadow
    'init-declarations': 0, // Off in favor of @typescript-eslint/init-declarations
    'no-unused-vars': 0, // Off in favor of @typescript-eslint/no-unused-vars
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],

    // TS
    '@typescript-eslint/no-use-before-define': [1],
    '@typescript-eslint/explicit-function-return-type': 2,

    // React
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-default-props': 2
  },
  settings: {
    jest: {
      version: 26
    },
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': { node: { extensions: ['.d.ts', '.js', '.ts', '.tsx'] } },
    react: { version: 'detect' }
  }
};
