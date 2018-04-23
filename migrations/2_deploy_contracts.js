const Totem = artifacts.require("./Totem.sol");

module.exports = function(deployer) {
  deployer.deploy(Totem, {gas: 5000000});
};