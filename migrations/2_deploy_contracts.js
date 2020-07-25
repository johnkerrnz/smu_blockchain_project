const Organization = artifacts.require("Organization");
const OrganizationToken = artifacts.require("OrganizationToken");

const SimpleStorage = artifacts.require("SimpleStorage");
const ComplexStorage = artifacts.require("ComplexStorage");

module.exports = function(deployer) {
  deployer.deploy(Organization);
  deployer.deploy(OrganizationToken);

  deployer.deploy(SimpleStorage);
  deployer.deploy(ComplexStorage);
};
