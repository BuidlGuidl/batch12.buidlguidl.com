import { WalletIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, UserGroupIcon } from "@heroicons/react/24/solid";

type BuilderStateIconProps = {
  type: "disconnected" | "notAllowlisted" | "notCheckedIn" | "checkedIn";
  onClick: () => void;
  tooltip: string;
};

export const BuilderStateIcon = ({ type, onClick, tooltip }: BuilderStateIconProps) => {
  const icons = {
    notAllowlisted: <UserGroupIcon className="h-6 w-6 text-warning animate-pulse cursor-pointer" />,
    notCheckedIn: <CheckCircleIcon className="h-6 w-6 text-warning animate-pulse cursor-pointer" />,
    checkedIn: <CheckCircleIcon className="h-6 w-6 text-success cursor-pointer" />,
    disconnected: <WalletIcon className="h-6 w-6 text-warning animate-pulse cursor-pointer mr-2" />,
  };

  return (
    <div className="tooltip tooltip-bottom" data-tip={tooltip} onClick={onClick}>
      {icons[type]}
    </div>
  );
};
