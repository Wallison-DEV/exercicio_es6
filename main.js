const arrayObjetos = [
    {
        nome: 'Wallison',
        nota: 10
    },
    {
        nome: 'Kauê',
        nota: 4
    },
    {
        nome: 'Jamilly',
        nota: 7
    },
    {
        nome: 'Watson',
        nota: 5.8
    },
    {
        nome: 'Elisia',
        nota: 6
    },
    {
        nome: 'Késsia',
        nota: 8
    }
]
function filtroAcimaDaMedia(arrayObjetos){
    return arrayObjetos.nota >= 6
}

const filtro = arrayObjetos.filter(filtroAcimaDaMedia)
console.log(filtro)