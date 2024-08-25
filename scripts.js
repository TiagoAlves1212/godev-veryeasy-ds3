const btnCreate = document.querySelector('button')
const result = document.querySelector('#result').value

let inverse = []

btnCreate.addEventListener('click', () => {
    const inputText = document.querySelector('#input-text').value
    const array = inputText.split(',')

    for (let cont = 0; cont<array.length; cont++) {
        inverse.unshift(array[cont])
    }
    const result = document.querySelector('#result').innerHTML = inverse
    inverse = []
})