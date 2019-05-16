export default {
  invalid: [
    {
      code: `
          /**
           *
           */
          function quux (foo) {

            return foo;
          }
      `,
      errors: [
        {
          line: 2,
          message: 'Missing JSDoc @returns declaration.'
        }
      ]
    },
    {
      code: `
          /**
           *
           */
          const foo = () => ({
            bar: 'baz'
          })
      `,
      errors: [
        {
          line: 2,
          message: 'Missing JSDoc @returns declaration.'
        }
      ]
    },
    {
      code: `
          /**
           *
           */
          const foo = bar=>({ bar })
      `,
      errors: [
        {
          line: 2,
          message: 'Missing JSDoc @returns declaration.'
        }
      ]
    },
    {
      code: `
          /**
           *
           */
          const foo = bar => bar.baz()
      `,
      errors: [
        {
          line: 2,
          message: 'Missing JSDoc @returns declaration.'
        }
      ]
    },
    {
      code: `
          /**
           *
           */
          function quux (foo) {

            return foo;
          }
      `,
      errors: [
        {
          line: 2,
          message: 'Missing JSDoc @return declaration.'
        }
      ],
      settings: {
        jsdoc: {
          tagNamePreference: {
            returns: 'return'
          }
        }
      }
    },
    {
      code: `
          /**
           *
           */
          async function quux() {}
      `,
      errors: [
        {
          line: 2,
          message: 'Missing JSDoc @returns declaration.'
        }
      ],
      parserOptions: {
        ecmaVersion: 8
      }
    },
    {
      code: `
          /**
           *
           */
          const quux = async function () {}
      `,
      errors: [
        {
          line: 2,
          message: 'Missing JSDoc @returns declaration.'
        }
      ],
      parserOptions: {
        ecmaVersion: 8
      }
    },
    {
      code: `
          /**
           *
           */
          const quux = async () => {}
      `,
      errors: [
        {
          line: 2,
          message: 'Missing JSDoc @returns declaration.'
        }
      ],
      parserOptions: {
        ecmaVersion: 8
      }
    },
    {
      code: `
          /**
           *
           */
          function quux () {
          }
      `,
      errors: [
        {
          line: 2,
          message: 'Missing JSDoc @returns declaration.'
        }
      ],
      settings: {
        jsdoc: {
          forceRequireReturn: true
        }
      }
    },
    {
      code: `
      const language = {
        /**
         * @param {string} name
         */
        get name() {
          return this._name;
        }
      }
      `,
      errors: [
        {
          line: 3,
          message: 'Missing JSDoc @returns declaration.'
        }
      ]
    }
  ],
  valid: [
    {
      code: `
          /**
           * @returns Foo.
           */
          function quux () {

            return foo;
          }
      `
    },
    {
      code: `
          /**
           *
           */
          function quux () {
          }
      `
    },
    {
      code: `
          /**
           *
           */
          function quux (bar) {
            bar.filter(baz => {
              return baz.corge();
            })
          }
      `
    },
    {
      code: `
          /**
           * @returns Array
           */
          function quux (bar) {
            return bar.filter(baz => {
              return baz.corge();
            })
          }
      `
    },
    {
      code: `
          /**
           * @returns Array
           */
          const quux = (bar) => bar.filter(({ corge }) => corge())
      `
    },
    {
      code: `
          /**
           * @inheritdoc
           */
          function quux (foo) {
          }
      `
    },
    {
      code: `
          /**
           * @override
           */
          function quux (foo) {
          }
      `
    },
    {
      code: `
          /**
           * @constructor
           */
          function quux (foo) {
          }
      `
    },
    {
      code: `
          /**
           * @implements
           */
          function quux (foo) {
          }
      `
    },
    {
      code: `
          /**
           * @override
           */
          function quux (foo) {

            return foo;
          }
      `
    },
    {
      code: `
          /**
           * @class
           */
          function quux (foo) {

          }
      `
    },
    {
      code: `
          /**
           * @constructor
           */
          function quux (foo) {

          }
      `
    },
    {
      code: `
          /**
           * @returns {Object}
           */
          function quux () {

            return {a: foo};
          }
      `
    },
    {
      code: `
          /**
           * @returns {Object}
           */
          const quux = () => ({a: foo});
      `
    },
    {
      code: `
          /**
           * @returns {Object}
           */
          const quux = () => {
            return {a: foo}
          };
      `
    },
    {
      code: `
          /**
           * @returns {void}
           */
          function quux () {
          }
      `
    },
    {
      code: `
          /**
           * @returns {void}
           */
          const quux = () => {

          }
      `
    },
    {
      code: `
          /**
           * @returns {undefined}
           */
          function quux () {
          }
      `
    },
    {
      code: `
          /**
           * @returns {undefined}
           */
          const quux = () => {

          }
      `
    },
    {
      code: `
          /**
           *
           */
          function quux () {
          }
      `
    },
    {
      code: `
          /**
           *
           */
          const quux = () => {

          }
      `
    },
    {
      code: `
      class Foo {
        /**
         *
         */
        constructor () {
        }
      }
      `,
      settings: {
        jsdoc: {
          forceRequireReturn: true
        }
      }
    },
    {
      code: `
      const language = {
        /**
         * @param {string} name
         */
        set name(name) {
          this._name = name;
        }
      }
      `
    }
  ]
};
