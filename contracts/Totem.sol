pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";

/**
 * @title Totem
 * Totem - a contract for my non-fungible totem.
 */
contract Totem is ERC721Token, Ownable {

    constructor() ERC721Token("Totem", "CVSY") public { }

    /**
    * @dev Mints a token to an address.
    * @param _to address of the future owner of the token
    * @param _name name for the token
    * @param _description description for the token
    * @param _hash ipfs hash for the image
    */
    function mintTo(address _to, string _name, string _description, string _hash  ) public onlyOwner {
        uint256 newTokenId = _getNextTokenId();
        _mint(_to, newTokenId);
    }

    /**
    * @dev calculates the next token ID based on totalSupply
    * @return uint256 for the next token ID
    */
    function _getNextTokenId() private view returns (uint256) {
        return totalSupply().add(1);
    }
}