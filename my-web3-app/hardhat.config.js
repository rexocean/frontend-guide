require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.20",
    networks: {
        sepolia: { // 测试网配置
            url: "https://sepolia.infura.io/v3/YOUR_INFURA_KEY",
            accounts: ["0x私钥"]
        }
    }
};
