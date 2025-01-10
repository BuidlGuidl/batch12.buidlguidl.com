import Link from "next/link";
import { useAccount } from "wagmi";
import { CheckCircleIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { useBuilderStatus } from "~~/hooks/useBuilderStatus";

export const UserStateInBatch = () => {
  const { address } = useAccount();
  const { isAllowListed, isCheckedIn } = useBuilderStatus(address);

  return (
    <div className="flex justify-center items-center gap-2">
      {!isAllowListed && (
        <div>
          <Link
            href="https://buidlguidl.com/batches"
            target="_blank"
            className="text-sm flex items-center gap-2 text-warning"
          >
            <UserGroupIcon className="h-6 w-6 animate-pulse" />
            Connected wallet is not allowlisted. Please apply to the next batch.
          </Link>
        </div>
      )}

      {isAllowListed && !isCheckedIn && (
        <div>
          <Link
            className="text-sm flex items-center gap-2 text-warning"
            href="https://github.com/BuidlGuidl/batch12.buidlguidl.com/issues/12"
            target="_blank"
          >
            <CheckCircleIcon className="h-6 w-6 animate-pulse" />
            You need to check in to start building
          </Link>
        </div>
      )}

      {isCheckedIn && (
        <div>
          <Link
            href="https://github.com/BuidlGuidl/batch12.buidlguidl.com/issues"
            target="_blank"
            className="flex items-center gap-2 text-success text-sm"
          >
            <CheckCircleIcon className="h-6 w-6" />
            You are checked in and ready to build!
          </Link>
        </div>
      )}
    </div>
  );
};
