import { WalletIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, UserGroupIcon } from "@heroicons/react/24/solid";

type BuilderStateIconProps = {
  type: "disconnected" | "notAllowlisted" | "notCheckedIn" | "checkedIn" | "wrongNetwork";
  onClick: () => void;
  tooltip: string;
};

export const BuilderStateIcon = ({ type, onClick, tooltip }: BuilderStateIconProps) => {
  const baseStyles = "h-6 w-6 cursor-pointer";
  const warningStyles = `${baseStyles} text-warning animate-pulse`;
  const walletStyles = `${warningStyles} mr-2`;

  const icons = {
    notAllowlisted: <UserGroupIcon className={warningStyles} />,
    notCheckedIn: <CheckCircleIcon className={warningStyles} />,
    checkedIn: <CheckCircleIcon className={`${baseStyles} text-success`} />,
    disconnected: <WalletIcon className={walletStyles} />,
    wrongNetwork: <WalletIcon className={walletStyles} />,
  };

  return (
    <div className="tooltip tooltip-bottom" data-tip={tooltip} onClick={onClick}>
      {icons[type]}
    </div>
  );
};
