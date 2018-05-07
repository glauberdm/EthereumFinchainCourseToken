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