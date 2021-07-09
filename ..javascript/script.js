function contar() { // Função chamanda ao clicar no botão
    var inicio = window.document.getElementById('txti') //Variável criada para pegar valor do id=txti (HTML)
    var fim = window.document.getElementById('txtf') //Variável criada para pegar valor do id=txtf (HTML)
    var passo = window.document.getElementById('txtp') //Variável criada para pegar valor do id=txtp (HTML)
    var res = document.getElementById('res') //Variável criada para retornar valor (HTML)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //Se inicio for = 0 ou fim = 0 ou passo == 0...
        window.alert('[ERRO] Faltam dados!') //Aparecerá uma popup com essa mensagem.
        res.innerHTML = 'Impossível contar!' //E retornará isso
    } else { // Se não...
        res.innerHTML = `Contando: <br>` //Mostrará essa mensagem +
        var i = Number(inicio.value) //Converter variáveis em número.
        var f = Number(fim.value)  
        var p = Number(passo.value)
        if (p <= 0) {  //Se p for menor ou igual a 0...
            window.alert('Passo invalido! Será considerado passo 1') //Mostra ess mensagem
            p = 1 //E a variável 'p' recebe 1
        }
        if (i < f) { 
            for (var c = i; c <= f; c += p) { //Se c = i; c <= f; c = c + p...
                res.innerHTML += `${c} 👉 ` //Mostrará esta mensagem
        }
        }  else { // Se não
               for ( var c = i; c >= f; c -= p) { //Se var...  (contagem regreciva)
                res.innerHTML += `${c} 👉 ` //Mostrará essa mensagem
            }
        } 
        res.innerHTML += '🏁' //Após as mensagem de cima, mostrará essa tbm
    }  
}