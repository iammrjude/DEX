const FactoryV2 = artifacts.require("PancakeFactory");
const RouterV2 = artifacts.require("PancakeRouter");
const WBNB = artifacts.require("WBNB");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(FactoryV2, accounts[0]);
  const factory = await FactoryV2.deployed();
  await deployer.deploy(WBNB);
  const wbnb = await WBNB.deployed();
  await deployer.deploy(RouterV2, factory.address, wbnb.address);
  const router = await RouterV2.deployed();
  console.log("FeeToSetter:", accounts[0]);
  console.log("Factory Address:", factory.address);
  console.log("Exchange Address:", router.address)
};
