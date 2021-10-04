function Aluno(valorNome, valorFalta, valorNota) {

    this.nome = valorNome;
    this.falta = valorFalta;
    this.nota = valorNota;

    this.calcMedia = function calcMedia() {

        const total = this.nota.reduce((total, atual) => {

          return total + atual;

        });
        
        return total / this.nota.length;

      };

      this.adicionarFalta = function(){
        return this.faltas++
    }

};

module.exports = Aluno;
