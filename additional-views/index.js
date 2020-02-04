import preval from "preval.macro";

const files = preval`
  const fs = require('fs');

  const dirs = fs.readdirSync('./pages');

  module.exports = dirs;
`;

document.body.innerHTML = `
Files in pages directory:
<p>
  ${files.join("<br>")}
</p>
`;
