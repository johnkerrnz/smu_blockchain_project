pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";



contract NUTCToken is ERC20, Ownable {
    
    constructor() public ERC20("NUTC","NUTC") {    
    }

    function mint(address to,uint256 amount) public onlyOwner returns (bool) {
        _mint(to, amount);
        return true;

    }

    function burn(address account, uint256 amount) public onlyOwner {
        _burn(account, amount);
    }

}