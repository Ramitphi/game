const Gametoken = artifacts.require("Gametoken");

module.exports = function (deployer) {
  deployer.deploy(Gametoken,"Gametoken","GT");
};
