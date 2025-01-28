import { showBuilderNotification } from "./builderState/BuilderNotification";
import { BuilderStateIcon } from "./builderState/BuilderStateIcon";
import { useBuilderStateConfig } from "~~/hooks/useBuilderState";

export const BuilderStateInBatch = () => {
  const { state, config } = useBuilderStateConfig();

  return (
    <div className="flex items-center">
      <BuilderStateIcon
        type={state}
        tooltip={config.tooltip}
        onClick={() => showBuilderNotification(config.notification)}
      />
    </div>
  );
};
