import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.jpg";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div>
        <img src={logo} alt="drizzle-logo" />
        <h1>SMU Blockchain Project </h1>
        <p>
          Blockchain Project to allow Organizations to issue Tokens to community / employees
        </p>
      </div>

      <div className="section">
        <h2>Active Account</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>

      <div className="section">
        <h2>Organization</h2>
        <p>
          This shows a simple ContractData component with no arguments, along
          with a form to set its value.
        </p>
        <p>
          <strong>Add Tokens: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Organization"
            method="tokenCount"
          />
        </p>
        <ContractForm drizzle={drizzle} contract="Organization" method="addTokens" />
      </div>

      <div className="section">
        <h2>OrganizationVoucher</h2>
        <p>
          Here we have a form with custom, friendly labels. Also note the token
          symbol will not display a loading indicator. We've suppressed it with
          the <code>hideIndicator</code> prop because we know this variable is
          constant.
        </p>
        <p>
          <strong>Total Supply: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="OrganizationVoucher"
            method="totalSupply"
            methodArgs={[{ from: drizzleState.accounts[0] }]}
          />{" "}
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="OrganizationVoucher"
            method="symbol"
            hideIndicator
          />
        </p>
        <p>
          <strong>My Balance: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="OrganizationVoucher"
            method="balanceOf"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <h3>Send Tokens</h3>
        <ContractForm
          drizzle={drizzle}
          contract="OrganizationVoucher"
          method="transfer"
          labels={["To Address", "Amount to Send"]}
        />
      </div>

    </div>
  );
};
