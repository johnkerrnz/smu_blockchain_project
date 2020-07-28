import Web3 from "web3";
import SimpleStorage from "./contracts/SimpleStorage.json";
import Organization from "./contracts/Organization.json";
import OrganizationVoucher from "./contracts/OrganizationVoucher.json";
import Market from "./contracts/Market.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:7545"),
  },
  contracts: [SimpleStorage, Organization, OrganizationVoucher, Market],
  events: {
    SimpleStorage: ["StorageSet"],
  },
};

export default options;
