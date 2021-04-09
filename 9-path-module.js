const path=require('path')

console.log(path.sep)

const filepath=path.join('./content','subFolder','ttt.txt')
console.log(filepath)

const base=path.basename(filepath)
console.log(base)

const absoulute=path.resolve(__dirname,'content','subfolder','ttt.txt')
console.log(absoulute)