import { CounterDisplay } from "./CounterDisplay";
import { createPublicClient, getContract, http } from "viem";
import { optimism } from "viem/chains";

const CONTRACT_ADR = "0x72ccAbE6620fa94eC69569d17f18a3914BEFBFD6";
const FUNCTION_NAME = "checkedInCounter";

// Defining the ABI for just the function we need
const BatchRegistryABI = [
  {
    name: FUNCTION_NAME,
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
] as const;

async function BuildersCheckInCount() {
  try {
    // A Client in the context of viem is similar to an Ethers.js Provider.
    const publicClient = createPublicClient({
      chain: optimism,
      transport: http(),
    });

    const contract = getContract({
      address: CONTRACT_ADR,
      abi: BatchRegistryABI,
      client: publicClient,
    });

    const counter = await contract.read.checkedInCounter();

    return <CounterDisplay data={counter} error={null} />;
  } catch (error) {
    return <CounterDisplay data={undefined} error={error instanceof Error ? error : new Error("Unknown error")} />;
  }
}

export default BuildersCheckInCount;
