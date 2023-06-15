import { PacmanLoader } from "react-spinners";

const Loading = ({ isLoading }) => {
  return (
    <div className="flex justify-center">
      <PacmanLoader
        color="#ef4444"
        loading={isLoading}
        size={24}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
