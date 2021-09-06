module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  plugins: ['import', 'mocha', 'prettier', 'simple-import-sort', 'jsx-a11y', 'jest'],
  env: {
    es6: true,
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
    request: true,
    expect: true,
    should: true,
    Bootstrap: true,
    required: true,
    errors: true
  },
  overrides: [
    {
      files: ['**/*.module.css.d.ts'],
      rules: {
        'prettier/prettier': 0
      }
    },
    // React JSX rules
    {
      files: ['source/react/*.jsx', 'source/react/**/*.jsx', 'src/*.jsx', 'src/**/*.jsx'],
      parser: '@babel/eslint-parser',
      plugins: ['react', 'react-hooks'],
      rules: {
        'prettier/prettier': 0
      }
    },
    // OLD JS - Node files and jQuery
    {
      files: ['app/core/*.js', 'app/core/**/*.js', 'source/js/*.js', 'source/js/**/*.js'],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
          modules: true,
          experimentalObjectRestSpread: true
        }
      },
      env: {
        es6: true,
        browser: false,
        node: true
      }
    },
    // TS rules and
    // React TSX rules
    {
      files: ['.ts', '**/*.ts', '*.tsx', '**/*.tsx'],
      plugins: ['react', 'react-hooks', '@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
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
      rules: {
        'react/prop-types': 0,
        '@typescript-eslint/no-use-before-define': 1,
        '@typescript-eslint/explicit-function-return-type': [
          2,
          {
            allowExpressions: true
          }
        ],
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': ['error']
      }
    }
  ],
  rules: {
    'arrow-parens': ['error', 'always'],
    'no-underscore-dangle': 0,
    'no-console': 'error',
    'mocha/no-exclusive-tests': 'error',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        semi: true,
        printWidth: 120,
        singleQuote: true
      }
    ],
    'object-shorthand': ['error', 'properties'],
    'no-return-assign': ['error', 'except-parens'],
    'func-names': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never'
      }
    ],
    // https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad
    'import/prefer-default-export': 0,
    'one-var': ['error', 'never'],
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
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
    // Controlled via plugins
    'sort-import': 0,
    'no-use-before-define': 0,
    'no-duplicate-imports': 0,
    'no-sequences': 0,
    'no-return-await': 0,
    'require-await': 0,
    'no-shadow': 0,
    'init-declarations': 0,
    'no-unused-vars': 0,
    'no-plusplus': 2,
    'react/jsx-sort-default-props': 2,
    'react/prop-types': 2,
    'react/require-default-props': [
      2,
      {
        ignoreFunctionalComponents: true
      }
    ],
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-fragments': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-key': 2,
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'always',
        children: true
      }
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx']
      }
    ]
  },
  settings: {
    jest: {
      version: 26
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      '@babel/eslint-parser': ['.jsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.d.ts', '.js', '.jsx', '.ts', '.tsx']
      }
    },
    react: {
      version: 'detect'
    }
  }
};
