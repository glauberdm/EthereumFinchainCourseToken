const HDWalletProvider = require("truffle-hdwallet-provider-privkey");

const privateKeyRopsten = "";
const providerRopsten = new HDWalletProvider(privateKeyRopsten, 'https://ropsten.infura.io/9aWsXOvBnB8RM5Md8Ruj')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      network_id: 3, // official id of the ropsten network
      gasPrice: 4000000000, //(wei = 4 gwei) Default is 100000000000 (100 Shannon/gwei)
      gas: 4600000, //Default is 4712388
      provider: providerRopsten
    }
  }
};