#! /usr/bin/env node
const shell = require("shelljs");

shell.exec("polymer build && npm install && node index.js");