// require("dotenv").config();

// require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
// require("hardhat-gas-reporter");
// require("solidity-coverage"); 
const fs = require('fs');
const privateKey = fs.readFileSync('.secret').toString();

const projectId = '722dd8ee0a734b2aad7b2dec5a4438c8'

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    // ropsten: {
    //   url: process.env.ROPSTEN_URL || "",
    //   accounts:
    //     process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    // },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
