const Aluno = require("./avaliacao")
const listaAluno = require("./listaAluno");

const curso = {

    nomeCurso: "Aula Prática Jedi II",
    notaAprov: 7,
    faltasPermit: 3,
    listaEstudantes: listaAluno,
    
    addAluno(discipulo) {

        this.listaEstudantes.push(discipulo);

    }, 

    passAluno(discipulo) {

        if(discipulo.calcMedia() >= this.notaAprov && discipulo.falta < this.faltasPermit) {

            return true;

        } else if (discipulo.falta === this.faltasPermit && discipulo.calcMedia() > this.notaAprov * 0.1){

            return true;

        } else {

            return false;

        };

    },
    
    novosJedis(alunos) {
        let resultado = [];
        alunos.forEach(aluno => {
            resultado.push(`Discípulo: ${aluno.nome} aprovado: ${this.passAluno(aluno)}`)
        });
        return resultado;
    },
};

console.log(curso.listaEstudantes);
console.log(curso.passAluno(curso.listaEstudantes[1]));
console.log(curso.novosJedis(curso.listaEstudantes));  
