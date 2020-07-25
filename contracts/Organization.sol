pragma solidity ^0.5.0;

contract Organization {

    uint256 public tokenCount;

    function addTokens(uint256 x) public {
        tokenCount += x;
    }

    function issueTokens(uint256 x) public {
        // transfer
    }

    function burnTokens(uint256 x) public {
        tokenCount -= x;
    }

}
