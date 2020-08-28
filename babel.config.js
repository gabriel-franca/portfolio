module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["styled-components", { "ssr": true }],
    "inline-react-svg",
    [
      "babel-plugin-root-import", {
        "rootPathSuffix": "src",
        "rootPathPrefix": "~"
      }
    ]
  ]
}
