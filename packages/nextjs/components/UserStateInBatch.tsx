import { useAccount } from "wagmi";
import { CheckCircleIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { useBuilderStatus } from "~~/hooks/useBuilderStatus";
import { notification } from "~~/utils/scaffold-eth";

export const UserStateInBatch = () => {
  const { address } = useAccount();
  const { isAllowListed, isCheckedIn } = useBuilderStatus(address);

  if (!address) return null;

  return (
    <div className="flex items-center">
      {!isAllowListed && (
        <div
          className="tooltip tooltip-bottom"
          data-tip="Connected wallet is not allowlisted. Please apply to the next batch."
          onClick={() =>
            notification.info(
              <div>
                Connected wallet is not allowlisted. Please{" "}
                <a href="https://buidlguidl.com/batches" target="_blank" className="underline">
                  apply to the next batch
                </a>
              </div>,
            )
          }
        >
          <UserGroupIcon className="h-6 w-6 text-warning animate-pulse cursor-pointer" />
        </div>
      )}

      {isAllowListed && !isCheckedIn && (
        <div
          className="tooltip tooltip-bottom"
          data-tip="You need to check in to start building"
          onClick={() =>
            notification.info(
              <div>
                You need to check in to start building. Follow instructions in{" "}
                <a
                  href="https://github.com/BuidlGuidl/batch12.buidlguidl.com/issues/12"
                  target="_blank"
                  className="underline"
                >
                  this GitHub issue
                </a>
              </div>,
            )
          }
        >
          <CheckCircleIcon className="h-6 w-6 text-warning cursor-pointer hover:text-warning/70" />
        </div>
      )}

      {isCheckedIn && (
        <div
          className="tooltip tooltip-bottom"
          data-tip="You are checked in and ready to build!"
          onClick={() =>
            notification.success(
              <div>
                You are checked in and ready to build! Check{" "}
                <a
                  href="https://github.com/BuidlGuidl/batch12.buidlguidl.com/issues"
                  target="_blank"
                  className="underline"
                >
                  GitHub issues
                </a>{" "}
                for next steps.
              </div>,
            )
          }
        >
          <CheckCircleIcon className="h-6 w-6 text-success cursor-pointer hover:text-success/70" />
        </div>
      )}
    </div>
  );
};
