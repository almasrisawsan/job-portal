import FullHeightCenter from "~/layout/FullHeightCenter";

const FullScreenError = ({ label }: { label: string }) => {
  return (
    <FullHeightCenter>
      <div className="text-red-500 text-4xl">{label}</div>
    </FullHeightCenter>
  );
};

export default FullScreenError;
