function elementos(Nome,GlobalRanking, LiberdadeEco, IDH, Desemprego) {
    return {
        Nome: Nome,
        GlobalRanking: GlobalRanking,
        LiberdadeEco: LiberdadeEco,
        IDH:IDH,
        Desemprego, Desemprego
    }
}


Canada = elementos('Canadá',15, 76.6, 0.914, 8.2)
EUA = elementos('Estados Unidos',25, 72.1, 0.915, 3.90)
Mexico = elementos('México',67, 63.7, 0.75, 4.43)

const paisesAN = [Canada, EUA, Mexico]

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


const paisesANOB = {
    mediaGlobal: mediaGlobal(paisesAN),
    LiberdadeEco: libEco(paisesAN),
    IDHO: IDHF(paisesAN),
    TD: TaxDes(paisesAN)
}

console.log(paisesANOB.mediaGlobal)

