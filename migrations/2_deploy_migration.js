const DappToken = artifacts.require("DappToken");
const DaiToken = artifacts.require("DaiToken");

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(DaiToken);
  await deployer.deploy(DappToken);
};
