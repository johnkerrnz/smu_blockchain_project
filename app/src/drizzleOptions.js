import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import Organization from "./contracts/Organization.json";
import OrganizationToken from "./contracts/OrganizationToken.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:7545"),
  },
  contracts: [SimpleStorage, ComplexStorage, Organization, OrganizationToken],
  events: {
    SimpleStorage: ["StorageSet"],
  },
};

export default options;
