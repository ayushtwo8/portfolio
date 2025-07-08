import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-black h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage: `
        linear-gradient(to right, #090909 1px, transparent 1px),
        linear-gradient(to bottom, #090909 1px, transparent 1px)
      `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="text-center space-y-8 max-w-md px-6">
        <div className="space-y-4">
          <h1 className="text-white text-8xl font-bold">404</h1>
          <h2 className="text-white text-xl font-medium">
            This page is not available
          </h2>
          <p className="text-gray-400 text-sm">
            The page you have been looking for doesn't exist.
          </p>
          <Button className="bg-neutral-800" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
