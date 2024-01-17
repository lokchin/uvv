## Calculadora de IMC com Express e Nodemon
### Descrição

Este é um servidor de calculadora de IMC que usa o framework Express e a ferramenta de monitoramento de alterações em tempo real Nodemon. Ele permite que os usuários calculem seu Índice de Massa Corporal (IMC) com base em sua altura e peso.

O IMC é uma medida que relaciona a altura e o peso de uma pessoa e é frequentemente usada para determinar se uma pessoa está com um peso saudável ou não. O cálculo do IMC é baseado na fórmula: peso / (altura * altura).

Este servidor permite que os usuários insiram seu peso e altura em unidades métricas (quilogramas e metros, respectivamente) e retorna seu IMC.

## Uso
Para iniciar o servidor, execute o seguinte comando no terminal:

`nodemon calculadora.js`

O servidor será iniciado na porta padrão 3000. Para usar a calculadora de IMC, navegue até `http://localhost:3000/` no seu navegador.

Insira seu peso em quilogramas e sua altura em metros e clique no botão "Calcular IMC". O servidor retornará seu IMC e uma indicação de se o IMC está dentro da faixa saudável.

## Dependências
Este servidor requer as seguintes dependências:

- Node.js
- Express
- Nodemon

Certifique-se de ter essas dependências instaladas em seu sistema antes de executar o servidor.