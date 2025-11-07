const { ethers } = require("hardhat");

async function main() {
    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy(ethers.parseUnits("1000", 18)); // 初始 1000 个代币
    await token.waitForDeployment();
    console.log("部署成功，合约地址:", await token.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
