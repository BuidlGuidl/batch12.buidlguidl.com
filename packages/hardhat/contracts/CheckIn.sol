//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn is Ownable {
    IBatchRegistry public batchRegistry;

    constructor(address initialOwner, address batchRegistryAddress) Ownable(initialOwner) {
        batchRegistry = IBatchRegistry(batchRegistryAddress);
    }

    function checkIn() public {
        batchRegistry.checkIn();
    }
} //0x814203d2c41Bf3e7486AfD645acF4982703345a4
