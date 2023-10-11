import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Dashboard from "./pages/Dashboard";
import Error from "./ui/Error";
import Reservations from "./pages/Reservations";
import Guests from "./pages/Guests";
import Villas from "./pages/Villas";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },
      {
        path: "/villas",
        element: <Villas />,
      },
      {
        path: "/guests",
        element: <Guests />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
