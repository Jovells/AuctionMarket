// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract AuctionMarketNFT is ERC721URIStorage, Ownable {
    uint256 _tokenIdCounter;
    address public auctionContract;

    function setAuctionContract(address _auctionContract) external onlyOwner {
        auctionContract = _auctionContract;
    }

    event minted(uint256 indexed tokenId, string tokenUri, address indexed owner);

    constructor(address _auctionContract) ERC721("AuctionMarketNFT", "DNFT") Ownable(msg.sender)  {
        auctionContract = _auctionContract;
    }

    function mint(string memory tokenUri) public returns (uint256) {
        uint256 tokenId = ++_tokenIdCounter;
        _mint(auctionContract, tokenId);
        _setTokenURI(tokenId, tokenUri);
        // setApprovalForAll(operator, true);
        emit minted(tokenId, tokenUri, auctionContract);
        return tokenId;
    }
}