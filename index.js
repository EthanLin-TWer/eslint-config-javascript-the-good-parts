module.exports = {
  env: {
    es6: true,
  },
  plugins: ["import"],
  rules: {
    // variables
    "one-var": "never",
    "no-var": "error",
    "no-undef": "error",
    "no-unused-vars": "error",
    "no-multi-assign": "error",
    "no-plusplus": "error",

    // references
    "prefer-const": "error",
    "no-const-assign": "error",

    // object
    "object-shorthand": ["error", "always"],
    "prefer-object-spread": "error",
    "dot-notation": "error",

    // array
    "array-callback-return": "error",
    "prefer-destructuring": [
      "error",
      {
        array: true,
        object: true,
      },
      { enforceForRenamedProperties: true },
    ],

    // string templates
    "prefer-template": "error",
    "template-curly-spacing": "error",

    // functions
    "no-loop-func": "error",
    "no-param-reassign": "error",
    "prefer-spread": "error",
    "prefer-rest-params": "error",
    "arrow-body-style": "error",
    "func-style": "error",

    // class
    "no-useless-constructor": "error",
    "no-dupe-class-members": "error",
    "no-class-assign": "error",

    // module
    "no-duplicate-imports": "error",
    "import/no-mutable-exports": "error",
    "import/first": "error",

    // wrappers
    "no-new-object": "error",
    "no-array-constructor": "error",
    "no-new-wrappers": "error",
    "no-new-func": "error",

    // comments
    "spaced-comment": "error",

    // blocks
    "no-else-return": "error",
    "no-continue": "error",

    // misc
    eqeqeq: "error",
    "no-eval": "error",
    "no-useless-escape": "error",
    "no-unneeded-ternary": "off",

    // basic prettier options
    semi: "off",
    quotes: "off",
    "max-len": "off",
    "comma-dangle": "off",
    "arrow-parens": "off",

    // prettier will handle this perfectly
    "quote-props": "off",
    "wrap-iife": "off",
    "function-paren-newline": "off",
    "prefer-arrow-callback": "off",
    "arrow-spacing": "off",
    "generator-star-spacing": "off",
    "no-nested-ternary": "off",
    "no-mixed-operators": "off",
    "brace-style": "off",
    "space-before-blocks": "off",
    // prettier is opinionated on this about having or not spaces before&after functions.
    // Stick to prettier to save your life on styling. It's not that bad.
    "space-before-function-paren": "off",
    "func-call-spacing": "off",

    // still validating...
    camelcase: "off",
    "implicit-arrow-linebreak": "off",
    "new-cap": "off",
    "no-underscore-dangle": "off",
    "no-prototype-builtins": "off",
  },
}
