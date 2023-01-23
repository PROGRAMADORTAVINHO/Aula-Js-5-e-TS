let nome: String = "Fulano"
let idade: number = 27
let altura: number = 1.82
let temGato: boolean = false

//criando arrays
let nomes: String[] = ["João", "Popo", "Lucas"]
//fazer arrays de numeros
let numeros: number[] = [10,100,1000,10000]

let coisas = ["Fulaninho",15,"Ciclano",20]

//função no TS
function firstLetterUpperCase (nome: string, age: number){
    let firstLetter = nome.toUpperCase()
    return firstLetter+nome
}