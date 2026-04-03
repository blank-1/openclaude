// Test script with readline
const readline = require('readline')

console.error('Test with readline...')
console.error('stdin.isTTY:', process.stdin.isTTY)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on('line', (line) => {
  console.error('Received line:', line)
})

console.error('Ready! Type and press Enter:')