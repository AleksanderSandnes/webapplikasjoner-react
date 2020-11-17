{
    "presets"; [
      [
        "@babel/preset-env",
        "@babel/preset-react",
        {
          "targets": {
            "esmodules": true,
            "node": "current"
          }
        }
      ],
      "@babel/preset-react"
    ],
    "plugins"; [
      "@babel/plugin-syntax-jsx",
      "@babel/plugin-transform-runtime",
      [
        "babel-plugin-styled-components",
        {
          "displayName": true,
          "fileName": true
        }
      ]
    ]
  }