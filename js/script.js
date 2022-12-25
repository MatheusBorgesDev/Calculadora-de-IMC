import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { imcCalc, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return
    }

    AlertError.close()

    const result = imcCalc(weight, height)
    displayResultMessage(result)
}

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

function displayResultMessage (result){
    Modal.message.innerText = `Seu IMC é de ${result}`
    Modal.open()
}
