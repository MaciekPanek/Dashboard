import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { VillaDetailsProvider } from "./context/VillaDetailsContext";
import AppLayout from "./AppLayout";
import Dashboard from "./pages/Dashboard";
import Error from "./ui/Error";
import Bookings from "./pages/Bookings";
import Guests from "./pages/Guests";
import Villas from "./pages/Villas";
import Settings from "./pages/Settings";
import AddNewVilla from "./features/villas/AddNewVilla";
import VillaDetails from "./features/villas/VillaDetails";

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
        element: <Bookings />,
      },
      {
        path: "/villas",
        element: <Villas />,
      },
      {
        path: "/villas/:villaId",
        element: <VillaDetails />,
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
    <VillaDetailsProvider>
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
              fontSize: "20px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#e7e5e4",
              color: "#525252",
            },
          }}
        />
      </QueryClientProvider>
    </VillaDetailsProvider>
  );
}
