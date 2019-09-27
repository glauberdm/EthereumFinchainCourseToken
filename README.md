# Ethereum Finchain Course - ERC-20 Token Standard and Wallet

## Projeto NodeJS e Truffle

### Start DApp
No console, no diretório do projeto:

#### Instalando dependências
`../EthereumFinchainCourseToken$ npm install`

#### Rodando Wallet web app
`../EthereumFinchainCourseToken$ npm run dev`

#### Testando
Abrir http://localhost:3001 em um browser com MetaMask conectado na rede Ropsten.

#### Alterando
A DApp utiliza os arquivos ../build/contracts, para atualizar o seu contrato modificado, basta realizar o truffle migrate na rede de preferência (lembre-se que se não especificar a rede com o parâmetro --network nome_da_rede_configurado, o truffle irá usar a configuração development do arquivo truffle.js (truffle-config.js para windows). Se a rede mostrar que já está atualizada, é porque não houve de fato mudanças no seu contrato, mas se persistir, user o parâmetro --reset no truffle migrate.

ENJOY!

#### src/js
* web3.min.js
  * [web3](https://web3js.readthedocs.io/en/v1.2.1/getting-started.html#adding-web3) em dist/
* truffle-contract.js
  * Truffle Contract [@truffle/contract](https://github.com/trufflesuite/truffle/tree/master/packages/contract)
* jsqr-1.0.2-min.js
  * [JSQR](https://www.jsqr.de/download.html)
* bootstrap.min.js
  * [Bootstrap](https://getbootstrap.com)