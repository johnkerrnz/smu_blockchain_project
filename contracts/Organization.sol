pragma solidity ^0.5.0;

contract Organization {

    // name
    // owner

    // add constructor  which takes name and store both name and owner
    uint256 public tokenCount;

    function addTokens(uint256 x) public {
        // only the orgnization owner should be able to add token
        // ntuc  says that they want 1000 token in mkt
        tokenCount += x;
    }

    function issueTokens(uint256 x) public payable {
        // ntuc token issues to public
        // transfer of ownership of token
    }

    function burnTokens(uint256 x ) public {
        // public gives back to ntuc for service / products
        tokenCount -= x;
    }

}

