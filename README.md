### Jest Serializer Babel Ast

Adds a serializer for babel ast nodes, which outputs a nice jest snapshot.

#### Setup

1. Install the package `yarn add jest-serializer-babel-ast`

2. add the serializer

```json
{
  "jest": {
    "snapshotSerializers": [
      "jest-serializer-babel-ast"
    ]
  }
}
```

#### Example Output


```
exports[`parser getClosestScope finds a scope given at the end 1`] = `
FunctionExpression (7:1,9:1)
  async: false
  body: BlockStatement (7:12,9:1)
    body:
      - ExpressionStatement (8:2,8:4)
          expression: NumericLiteral (8:2,8:3)
            extra:
              raw: '2'
              rawValue: 2
            value: 2
    directives: []
  expression: false
  extra:
    parenStart: 64
    parenthesized: true
  generator: false
  id: null
  params: []
`;
```
