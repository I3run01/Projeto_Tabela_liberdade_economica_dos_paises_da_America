function media(lista) {
    return {
        get GlobalRanking() {
             var total = lista.reduce((acumulador, obj) => {
                acumulador = acumulador + obj.GlobalRanking
                return acumulador
            }, 0)
        } t ,



    }
}