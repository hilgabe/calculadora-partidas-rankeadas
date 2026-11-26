function calcularRank(vitorias, derrotas) {
  const saldo = vitorias - derrotas;
  let nivel;

  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return `O Herói tem de saldo de ${saldo} está no nível de ${nivel}`;
}

const jogadores = [
  { vitorias: 60, derrotas: 15 },
  { vitorias: 101, derrotas: 56 },
];

for (const jogador of jogadores) {
  const mensagem = calcularRank(jogador.vitorias, jogador.derrotas);
  console.log(mensagem);
}
