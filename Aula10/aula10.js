let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])
// //retorna undefined

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])
// //retorna Spiderman

let str = "una string qualquer"
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
// // // retorna una string qualquer


// //Array Invertido
function imprimirInverso (array) {
    saida1 = array.pop()
    saida2 = array.pop()
    saida3 = array.pop()
    saida4 = array.pop()

    array.push(saida1)
    array.push(saida2)
    array.push(saida3)
    array.push(saida4)

    console.log(array)

}

imprimirInverso ([1, 2, 3, 4])




//Somar Array
function somarArray (array) {
    let total = array.reduce((total, currentElement) => total + currentElement)
    console.log(total)
}

somarArray([1, 4, 6])
somarArray([10, 3, 10, 4])
somarArray([-5,100])


//Simulação Array.join()
function join(array) {

    let str = array[0] + array[1] + array[2]

    console.log(str);

}


join(['o','l','á'])


//Simulação Array.join()
function join(array) {

    for (let i = 0; i < array.pop(array.push(i)); i++) {
        const element = array[i];
        
    }

    console.log(str);

}


join(['o','l','á'])



//COLEÇÃO DE FILMES

var colecao = ['Star wars', 'Matrix', 'Mr. Robot', 'O Preço do Amanhã', 'A Vida é Bela']


function upperCase(array) {
    array.push(array.shift().toUpperCase())
    array.push(array.shift().toUpperCase())
    array.push(array.shift().toUpperCase())
    array.push(array.shift().toUpperCase()) 
    array.push(array.shift().toUpperCase()) 
    console.log(array)

}

upperCase(colecao)

let animacoes = ['Toy Story', 'Finding Nemo', 'Kung-fu Panda', 'Wally', 'Fortnite']


//Adicionar os elementos contidos no segundo array dentro do primeiro')

function adiciona(a1, a2) {
    a1.push(a2[0], a2[1], a2[2], a2[3], a2[4])
    console.log(a1);
}

adiciona(colecao, animacoes)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

// Criar função que compare as notas e nos diga se elas são iguais ou diferentes.

function scores(asiaScores, euroScores) {
    
    asiaScores[0] === euroScores[0] ? console.log('IGUAIS') : console.log('DIFERENTES')
    asiaScores[1] === euroScores[1] ? console.log('IGUAIS') : console.log('DIFERENTES')
    asiaScores[2] === euroScores[2] ? console.log('IGUAIS') : console.log('DIFERENTES')
    asiaScores[3] === euroScores[3] ? console.log('IGUAIS') : console.log('DIFERENTES')
    asiaScores[4] === euroScores[4] ? console.log('IGUAIS') : console.log('DIFERENTES')
    asiaScores[5] === euroScores[5] ? console.log('IGUAIS') : console.log('DIFERENTES')
    asiaScores[6] === euroScores[6] ? console.log('IGUAIS') : console.log('DIFERENTES')
    asiaScores[7] === euroScores[7] ? console.log('IGUAIS') : console.log('DIFERENTES')
    asiaScores[8] === euroScores[8] ? console.log('IGUAIS') : console.log('DIFERENTES')
}

scores(asiaScores, euroScores)