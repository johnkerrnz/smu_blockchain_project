const Organization = artifacts.require("Organization");
const OrganizationToken = artifacts.require("OrganizationToken");

const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  deployer.deploy(Organization);
  deployer.deploy(OrganizationToken);

  deployer.deploy(SimpleStorage);
};
