// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

interface IERC721Receiver {
    function onERC721Received(
        address _from,
        address _to,
        uint256 _tokenId,
        bytes calldata _data
    ) external returns (bytes4);
}
