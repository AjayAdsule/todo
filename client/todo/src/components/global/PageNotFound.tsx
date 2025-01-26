import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-600 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-500 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <NavLink
          to={"/todo/overview"}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
        >
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
