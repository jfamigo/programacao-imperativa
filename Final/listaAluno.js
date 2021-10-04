
const Aluno = require("./avaliacao")

let disc01 = new Aluno ('Darth Vader', 4, [9.2, 9.7, 9.3])
let disc02 = new Aluno ('Leia Organa', 1, [6.5, 5.9, 6.2])
let disc03 = new Aluno ('Luke Skywalker', 3, [6.7, 7.5, 6.2])
let disc04 = new Aluno ('Chewbacca', 8, [4.5, 5.7, 6.7])
let disc05 = new Aluno ('Obi-Wan Kenobi', 2, [8.7, 7.5, 6.7])

let listaAluno = [disc01, disc02, disc03, disc04, disc05];

module.exports = listaAluno

