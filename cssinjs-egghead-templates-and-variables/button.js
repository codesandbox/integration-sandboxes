// constants.js
const paddingY = '7px'
const paddingX = '10px'
const baseFontSize = '1rem'
const borderRadius = '5px'

// buttons.js
const button = `
  .cssinjs-btn {
    padding: ${paddingY} ${paddingX};
    font-size: ${baseFontSize};
    border-radius: ${borderRadius};
    color: #fff;
    background-color: green;
  }
`

// Render styles.
document.head.appendChild(
  document.createElement('style')
).textContent = button
