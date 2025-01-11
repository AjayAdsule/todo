import { RouterProvider } from "react-router-dom";
import { router } from "./lib/router";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
