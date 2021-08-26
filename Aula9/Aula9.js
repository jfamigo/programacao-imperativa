// EXERCICIO 1 - LIBERA ACESSO

function senhaValida(senha){
    if(senha == "1234"){
        return console.log("Acesso Permitido")
    }
    else{
        return console.log("Acesso Negado")
    }
  
}

senhaValida("124")
senhaValida("1234")




// EXERCICIO 2 - QUAL O MAIOR?

function qualMaior (a, b){
    if(a > b){
        return console.log("O número", a, "é maior que", b)
    }
    else if(b > a){
        return console.log("O número", b, "é maior que", a)
    }
    else{
        return console.log("Os números são iguais.")
    }
}

qualMaior(12,7)
qualMaior(30,45)
qualMaior(15,15)



// EXERCICIO 3 - QUAL MÊS?

function descobreMes(mes){
    switch (mes){
        case 1:
            console.log("JANEIRO");
            break;
        case 2:
            console.log("FEVEREIRO");
            break;
        case 3:
            console.log("MARÇO");
            break;
        case 4:
            console.log("ABRIL");
            break;
        case 5:
            console.log("MAIO");
            break;
        case 6:
            console.log("JUNHO");
            break;
        case 7:
            console.log("JULHO");
            break;
        case 8:
            console.log("AGOSTO");
            break;
        case 9:
            console.log("SETEMBRO");
            break;
        case 10:
            console.log("OUTUBRO");
            break;
        case 11:
            console.log("NOVEMBRO");
            break;
        case 12:
            console.log("DEZEMBRO");
            break;
        default:
            console.log("Este mês não existe")
            break;    
        }
    }
descobreMes(5)
descobreMes(12)
descobreMes(16)


// EXERCICIO 4 - LIBERA ACESSO (TERNÁRIO)

function senhaValida(senha){
    return senha == "1234" ? "Acesso autorizado" : "Acesso não autorizado"
}
console.log(senhaValida("1234"));
console.log(senhaValida("125534"));




// PROJETO MICROONDAS

function menu(opcoes){
    switch (opcoes){
        case 1:
            console.log("Pipoca - 10 segundos");
            break;
        case 2:
            console.log("Macarrão - 8 segundos");
            break;
        case 3:
            console.log("Carne - 15 segundos");
            break;
        case 4:
            console.log("Feijão - 12 segundos");
            break;
        case 5:
            console.log("Brigadeiro - 8 segundos");
            break;
        default:
            console.log("Prato Inexistente")
            break;
    }
}

menu(1)


function pipoca(segundos){
    let padraoPipoca = 10
 
    if (segundos >= padraoPipoca && segundos < 2 * padraoPipoca){
        return console.log("Prato pronto, bon apetit!")
    }
    else if (segundos >= 2 * padraoPipoca && segundos < 3 * padraoPipoca){
        return console.log("A comida queimou!");
    }
    else if (segundos >= 3 * padraoPipoca){
        return console.log("Kaboooooom");
    }
    else if (segundos < padraoPipoca){
        return console.log("Tempo insuficiente");

    }
}
pipoca(23);

function macarrao(segundos){
    let padraoMacarrao = 8
 
    if (segundos >= padraoMacarrao && segundos < 2 * padraoMacarrao){
        return console.log("Prato pronto, bon apetit!")
    }
    else if (segundos >= 2 * padraoMacarrao && segundos < 3 * padraoMacarrao){
        return console.log("A comida queimou!");
    }
    else if (segundos >= 3 * padraoMacarrao){
        return console.log("Kaboooooom");
    }
    else if (segundos < padraoMacarrao){
        return console.log("Tempo insuficiente");

    }
}
macarrao(25);

function carne(segundos){
    let padraoCarne = 15
 
    if (segundos >= padraoCarne && segundos < 2 * padraoCarne){
        return console.log("Prato pronto, bon apetit!")
    }
    else if (segundos >= 2 * padraoCarne && segundos < 3 * padraoCarne){
        return console.log("A comida queimou!");
    }
    else if (segundos >= 3 * padraoCarne){
        return console.log("Kaboooooom");
    }
    else if (segundos < padraoCarne){
        return console.log("Tempo insuficiente");

    }
}
carne(18);

function feijao(segundos){
    let padraoFeijao = 12
 
    if (segundos >= padraoFeijao && segundos < 2 * padraoFeijao){
        return console.log("Prato pronto, bon apetit!")
    }
    else if (segundos >= 2 * padraoFeijao && segundos < 3 * padraoFeijao){
        return console.log("A comida queimou!");
    }
    else if (segundos >= 3 * padraoFeijao){
        return console.log("Kaboooooom");
    }
    else if (segundos < padraoFeijao){
        return console.log("Tempo insuficiente");

    }
}
feijao(2);

function brigadeiro(segundos){
    let padraoBrigadeiro = 8
 
    if (segundos >= padraoBrigadeiro && segundos < 2 * padraoBrigadeiro){
        return console.log("Prato pronto, bon apetit!")
    }
    else if (segundos >= 2 * padraoBrigadeiro && segundos < 3 * padraoBrigadeiro){
        return console.log("A comida queimou!");
    }
    else if (segundos >= 3 * padraoBrigadeiro){
        return console.log("Kaboooooom");
    }
    else if (segundos < padraoBrigadeiro){
        return console.log("Tempo insuficiente");

    }
}
brigadeiro(13);