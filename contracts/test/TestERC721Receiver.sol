// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;
import "../IERC721Receiver.sol";

contract TestERC721Receiver is IERC721Receiver {
    bytes4 internal constant MAGIC_ERC721_RECEIVED = bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));
        function onERC721Received(
        address _from,
        address _to,
        uint256 _tokenId,
        bytes calldata _data
    ) external pure returns (bytes4) {
        return MAGIC_ERC721_RECEIVED;
    }
}