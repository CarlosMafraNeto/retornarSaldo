const lista = [
  {
    nome: 'Brigadeiro',
    valor: 3
  },
  {
    nome: 'Palla italiana',
    valor: 1
  },
  {
    nome: 'doce',
    valor: 2
  }
]

function calcularSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current) {
    return prev - current.valor
  }, saldoDisponivel)
}

const saldoDisponivel = 100

console.log(calcularSaldo(saldoDisponivel, lista))
