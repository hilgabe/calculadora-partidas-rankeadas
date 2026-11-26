# Calculadora de Partidas Rankeadas

Desafio da **Formação Lógica de Programação** da [DIO](https://web.dio.me).

## Objetivo

Criar uma função que recebe a quantidade de vitórias e derrotas de um jogador, calcula o saldo de partidas rankeadas (`vitórias - derrotas`) e define o nível do jogador com base nas vitórias:

| Vitórias | Nível |
|---|---|
| Até 10 | Ferro |
| 11 a 20 | Bronze |
| 21 a 50 | Prata |
| 51 a 80 | Ouro |
| 81 a 90 | Diamante |
| 91 a 100 | Lendário |
| 101 ou mais | Imortal |

Saída esperada:

```
O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}
```

## Conceitos usados

- Funções com parâmetros e retorno (`calcularRank`)
- Variáveis (`const` e `let`)
- Operadores aritméticos e de comparação (`-`, `<=`)
- Estrutura de decisão (`if / else if / else`)
- Laço de repetição (`for...of`) para calcular vários jogadores

## Como executar

Com o [Node.js](https://nodejs.org) instalado:

```bash
node index.js
```

Resultado:

```
O Herói tem de saldo de 45 está no nível de Ouro
O Herói tem de saldo de 45 está no nível de Imortal
```
