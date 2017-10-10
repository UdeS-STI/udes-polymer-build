#! /usr/bin/env node
const shell = require("shelljs");

shell.exec("polymer build && npm install && node index.js -- -rootURI='~webv9201/nsquart2/inscription-fcnc/'");