# A simple Angular seed with requireJs
*By [@ThThiery](https://twitter.com/ThThiery)*

## About
This is a simple [AngularJS](http://angularjs.org/) Seed with [RequireJS](http://requirejs.org/). The intent is to provide a base for using the requireJS with AngularJS.

## Contents

- The `README.md` file describe the project
- The `rMyApp.js` file describe the require configuration for the SDK
- The `GruntFile.js` file to describe the grunt Task to compile the SDK
- The `package.json` file give useful informations for the SDK package (author, dependencies...)
- The `lib/ngMyApp.js` the main Angular module defintion

## Prerequisites
* Must have [Git](http://git-scm.com/) installed
* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)
* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `npm install -g grunt-cli`

## Install a simple Angular seed with requireJS
Enter the following commands in the terminal.

1. `git clone git://github.com/CaryLandholt/AngularFun.git`
2. `cd angular-seed-requirejs`
3. `npm install`

## Getting Started
- Installation and prerequisites
    - To compile the SDK and generate the MyApp.js use `grunt`
    - To watch js files to any changes and compile the SDK and optimize use `grunt watch`

## Commentary
- We refer in the DOM only the myApp.js who is generate by RequireJS server side
- We use only RequireJS on the server
- We use the SHIM configuration for requireJS, I consider AMD module don't feet very well with AngularJS

