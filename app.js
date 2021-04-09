// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular priject
// npm i <packagenme>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename>  [mac]

// package.jason - manifest file (stores important info about project/package)
// manual approach (consol package.json in the root, create properties etc)
// npm init(step by step ,press enter to skip)
// npm init -y (everything default)

const __ = require('lodash')

const items =[1,[2,[3,[4]]]]
const newItems = __.flattenDeep(items)
console.log(newItems)