import { useScaffoldReadContract } from "./scaffold-eth/useScaffoldReadContract";
import { Address } from "viem";

export const useBuilderStatus = (address?: Address) => {
  const { data: isAllowListed } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });

  const { data: contractAddress } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });

  const isCheckedIn = contractAddress && contractAddress !== "0x0000000000000000000000000000000000000000";

  return { isAllowListed, isCheckedIn };
};
