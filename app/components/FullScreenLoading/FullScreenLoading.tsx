import FullHeightCenter from "~/layout/FullHeightCenter";
import { Spinner } from "../ui/spinner";

const FullScreenLoading = () => {
  return (
    <FullHeightCenter>
      <Spinner className="text-primary size-20" />
    </FullHeightCenter>
  );
};

export default FullScreenLoading;
