import { useScaffoldReadContract } from "./scaffold-eth/useScaffoldReadContract";
import { Address } from "viem";
import { useAccount, useChainId } from "wagmi";

type BuilderState = "disconnected" | "notAllowlisted" | "notCheckedIn" | "checkedIn" | "wrongNetwork";

const stateConfigs = {
  disconnected: {
    tooltip: "Please connect your wallet",
    notification: {
      message: "Please connect your wallet to check your builder status",
      type: "warning",
    },
  },
  notAllowlisted: {
    tooltip: "Connected wallet is not allowlisted. Please apply to the next batch.",
    notification: {
      message: "Connected wallet is not allowlisted. Please ",
      link: { text: "apply to the next batch", url: "https://buidlguidl.com/batches" },
    },
  },
  notCheckedIn: {
    tooltip: "You need to check in to start building",
    notification: {
      message: "You need to check in to start building. Follow instructions in ",
      link: { text: "this GitHub issue", url: "https://github.com/BuidlGuidl/batch12.buidlguidl.com/issues/12" },
    },
  },
  checkedIn: {
    tooltip: "You are checked in and ready to build! Check ",
    notification: {
      message: "You are checked in and ready to build! Check ",
      link: { text: "GitHub issues", url: "https://github.com/BuidlGuidl/batch12.buidlguidl.com/issues/12" },
      type: "success" as const,
    },
  },
  wrongNetwork: {
    tooltip: "Switch to Optimism network",
    notification: {
      message: "Please switch to Optimism network",
      type: "warning" as const,
    },
  },
} as const;

export const useBuilderState = (address?: Address) => {
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

export const useBuilderStateConfig = () => {
  const { address } = useAccount();
  const chainId = useChainId();
  const { isAllowListed, isCheckedIn } = useBuilderState(address);

  const getState = (): BuilderState => {
    if (!address) return "disconnected";
    if (chainId !== 10) return "wrongNetwork";
    if (!isAllowListed) return "notAllowlisted";
    if (!isCheckedIn) return "notCheckedIn";
    return "checkedIn";
  };

  const state = getState();
  return { state, config: stateConfigs[state] };
};
