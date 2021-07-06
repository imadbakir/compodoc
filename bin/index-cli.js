#! /usr/bin/env node

var cd = require('../src/index-cli.ts'),
    cdI = new cd.CliApplication();

cdI.start();
