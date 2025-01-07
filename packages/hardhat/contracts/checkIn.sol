//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IBatchRegistry {
    function checkIn() external;    
}

contract CheckinContract is Ownable {
    IBatchRegistry public immutable batchRegistry; // Make immutable since it won't change
    
    event CheckedIn(address indexed builder, address indexed contractAddress, bool isFirstTime);
   
    constructor(address _batchRegistry) Ownable(msg.sender) {
        require(_batchRegistry != address(0), "Invalid BatchRegistry address");
        batchRegistry = IBatchRegistry(_batchRegistry);
    } 

    function checkIn() external onlyOwner {
        batchRegistry.checkIn();
        emit CheckedIn(msg.sender, address(this), false); // Use address(this) for contract address
    }

    // Add a view function to easily verify the setup
    function getRegistryAddress() external view returns (address) {
        return address(batchRegistry);
    }

    receive() external payable {
        emit CheckedIn(msg.sender, address(this), true);
    }
}