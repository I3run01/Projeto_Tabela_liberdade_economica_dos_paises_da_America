function elementos(Nome,GlobalRanking, LiberdadeEco, IDH, Desemprego) {
    return {
        Nome: Nome,
        GlobalRanking: GlobalRanking,
        LiberdadeEco: LiberdadeEco,
        IDH:IDH,
        Desemprego, Desemprego
    }
}

function estrutura(paises) {
      
    var resposta = ''

    for (let p of paises) {

        var texto = 
        `<tr>
            <th class="neutro"></th>
            <th>${p.Nome}</th>
            <td>${p.GlobalRanking}</td>
            <td>${p.LiberdadeEco}</td>
            <td>${p.IDH}</td>
            <td>${p.Desemprego}</td>
        </tr>`

        var resposta = resposta + texto
    }
    return resposta
}

function expandir(expan, txt, resp ) {
    if (expan.innerHTML == '-') {
        txt.innerHTML = ''
        expan.innerHTML = '+'
    }

    else {
        txt.innerHTML = resp
        expan.innerHTML = '-'
    }   
}

//Países
Canada = elementos('Canadá',15, 76.6, 0.914, 8.2)
EUA = elementos('Estados Unidos',25, 72.1, 0.915, 3.90)
Mexico = elementos('México',67, 63.7, 0.75, 4.43)



// Elementos
//Países da América do Norte
paisesAN = [Canada, EUA, Mexico]
respAN = estrutura(paisesAN)

var textoAN = document.getElementById('linhaAN')
var expan01 = document.getElementById('expan01')
expan01.addEventListener('click', expandirAN)
function expandirAN() {
    expandir(expan01, textoAN, respAN)
}



