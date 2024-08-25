import { ClimbingBoxLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex h-[50vh] items-center justify-center">
      <ClimbingBoxLoader size={30} />
    </div>
  );
};

export default Loading;
