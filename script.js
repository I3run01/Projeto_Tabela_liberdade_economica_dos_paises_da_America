
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

function mediaGlobal(lista) {

    var soma = lista.reduce((acumulador, obj) => {
        acumulador = acumulador + obj.GlobalRanking
        return acumulador
    }, 0)
    var mediaglobal = soma/lista.length

    return mediaglobal
}

function libEco(lista) {

    var soma = lista.reduce((acumulador, obj) => {
        acumulador = acumulador + obj.LiberdadeEco
        return acumulador
    }, 0)
    var mediaglobal = soma/lista.length

    return mediaglobal
}

function IDHF(lista) {

    var soma = lista.reduce((acumulador, obj) => {
        acumulador = acumulador + obj.IDH
        return acumulador
    }, 0)
    var mediaglobal = soma/lista.length

    return mediaglobal
}

function TaxDes(lista) {

    var soma = lista.reduce((acumulador, obj) => {
        acumulador = acumulador + obj.Desemprego
        return acumulador
    }, 0)
    var mediaglobal = soma/lista.length

    return mediaglobal
}


//Países
Canada = elementos('Canadá',15, 76.6, 0.914, 8.2)
EUA = elementos('Estados Unidos',25, 72.1, 0.915, 3.90)
Mexico = elementos('México',67, 63.7, 0.75, 4.43)


Barbados = elementos('Barbados', 28, 71.3, 0.888, 7.41 )
CostaRica = elementos('Costa Rica', 55, 65.4, 0.725, 21.3)
RepDom = elementos('República Dominican', 71, 63, 0.663, 7.7 )
ElSalvador = elementos('El Salvador', 90, 59.6, 0.659,  4.5)
Haiti = elementos('Haiti', 145, 50, 0.404, 40)
Honduras = elementos('Honduras', 92, 59.5, 0.667, 6.2)
Jamaica = elementos('Jamaica', 46, 67.4, 0.688, 8.50)
Panama = elementos('Panamá', 56, 65.4, 0.755, 6.1 )

Argentina = elementos('Argentina',144, 50.1, 0.775, 9.60)
Brasil = elementos('Brasil', 133, 53.3, 0.710,  11.11 )
Colombia = elementos('Colombia', 60, 65.1, 0.689, 14.18)
Bolivia = elementos('Bolívia', 169, 43, 0.643, 11.11 )
Venezuela = elementos('Venezuela', 176, 24.8, 0.711,  3.2)
Chile = elementos('Chile', 20, 74.4, 0.783, 8.4 )
Equador = elementos('Equador', 126, 54.3, 0.695, 32.4 )
Peru = elementos('Peru', 51, 66.5, 0.723, 8.60 )
Suriname = elementos('Suriname', 156, 48.1, 0.646, 11.3)
Uruguai = elementos('Uruguai', 34, 70, 0.817, 10.2)
Paraguai = elementos('Paraguai', 73, 62.9, 0.640, 6.63, 8)



// Elementos
//Países da América do Norte
paisesAN = [Canada, EUA, Mexico]
respAN = estrutura(paisesAN)
const paisesANOB = {
    mediaGlobal: mediaGlobal(paisesAN),
    LiberdadeEco: libEco(paisesAN),
    IDHO: IDHF(paisesAN),
    TD: TaxDes(paisesAN)
}



paisesAC = [Barbados,CostaRica, RepDom, ElSalvador, Haiti, Honduras, Jamaica, Panama]
respAC = estrutura(paisesAC)
const paisesACOB = {
    mediaGlobal: mediaGlobal(paisesAC),
    LiberdadeEco: libEco(paisesAC),
    IDHO: IDHF(paisesAC),
    TD: TaxDes(paisesAC)
}

paisesAS = [Argentina, Brasil, Colombia, Bolivia, Venezuela, Chile, Equador, Peru, Suriname, Paraguai]
respAS = estrutura(paisesAS)
const paisesASOB = {
    mediaGlobal: mediaGlobal(paisesAS),
    LiberdadeEco: libEco(paisesAS),
    IDHO: IDHF(paisesAS),
    TD: TaxDes(paisesAS)
}

//Elementos do HTML
var textoAN = document.getElementById('linhaAN')
var expan01 = document.getElementById('expan01')
var titulo01 = document.getElementById('')
var d1norte = document.getElementById('d1norte')
var d2norte = document.getElementById('d2norte')
var d3norte = document.getElementById('d3norte')
var d4norte = document.getElementById('d4norte')
expan01.addEventListener('click', expandirAN)
function expandirAN() {
    expandir(expan01, textoAN, respAN)
}
d1norte.innerHTML = paisesANOB.mediaGlobal.toFixed(2)
d2norte.innerHTML = paisesANOB.LiberdadeEco.toFixed(2)
d3norte.innerHTML = paisesANOB.IDHO.toFixed(2)
d4norte.innerHTML = paisesANOB.TD.toFixed(2)

var textoAC = document.getElementById('linhaAC')
var expan02 = document.getElementById('expan02')
var d1centro = document.getElementById('d1centro')
var d2centro = document.getElementById('d2centro')
var d3centro = document.getElementById('d3centro')
var d4centro = document.getElementById('d4centro')
expan02.addEventListener('click', expandirAC)
function expandirAC() {
    expandir(expan02, textoAC, respAC)
}
d1centro.innerHTML = paisesACOB.mediaGlobal.toFixed(2)
d2centro.innerHTML = paisesACOB.LiberdadeEco.toFixed(2)
d3centro.innerHTML = paisesACOB.IDHO.toFixed(2)
d4centro.innerHTML = paisesACOB.TD.toFixed(2)

var textoAS = document.getElementById('linhaAS')
var expan03 = document.getElementById('expan03')
var d1sul = document.getElementById('d1sul')
var d2sul = document.getElementById('d2sul')
var d3sul = document.getElementById('d3sul')
var d4sul = document.getElementById('d4sul')
expan03.addEventListener('click', expandirAS)
function expandirAS() {
    expandir(expan03, textoAS, respAS)
}
d1sul.innerHTML = paisesASOB.mediaGlobal.toFixed(2)
d2sul.innerHTML = paisesASOB.LiberdadeEco.toFixed(2)
d3sul.innerHTML = paisesASOB.IDHO.toFixed(2)
d4sul.innerHTML = paisesASOB.TD.toFixed(2)