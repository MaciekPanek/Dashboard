import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Dashboard from "./pages/Dashboard";
import Error from "./ui/Error";
import Reservations from "./pages/Reservations";
import Guests from "./pages/Guests";
import Villas from "./pages/Villas";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddNewVilla from "./features/villas/AddNewVilla";
import toast, { Toaster } from "react-hot-toast";

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
        path: "/villas/newvilla",
        element: <AddNewVilla />,
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
      <Toaster
        position="bottom-left"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}
