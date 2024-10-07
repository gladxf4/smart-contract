// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // Store votes for candidates
    mapping(string => uint) public votesReceived;

    // Array to store list of candidates
    string[] public candidateList;

    // Constructor to initialize candidates
    constructor(string[] memory candidateNames) {
        candidateList = candidateNames;
    }

    // Vote for a candidate
    function voteForCandidate(string memory candidate) public {
        votesReceived[candidate] += 1;
    }

    // Get total votes for a candidate
    function totalVotesFor(string memory candidate) public view returns (uint) {
        return votesReceived[candidate];
    }
}
