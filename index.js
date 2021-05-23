// Write your code here!
const main = document.querySelector('#main')

main.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'

newHeader.innerHTML = "Storm is the champion"

document.body.append(newHeader)