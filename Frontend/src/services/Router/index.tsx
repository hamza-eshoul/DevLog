import { createBrowserRouter } from "react-router-dom";

// pages
import Homepage from "@pages/Homepage";
import RootLayout from "@/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
