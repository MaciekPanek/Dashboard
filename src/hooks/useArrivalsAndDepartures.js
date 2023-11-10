import { useQuery } from "@tanstack/react-query";
import { getArrivalsAndDepartures } from "../services/apiBookings";

export function useArrivalsAndDepartures() {
  const {
    isLoading,
    data: arrivals,
    error,
  } = useQuery({ queryKey: ["Dashboard"], queryFn: getArrivalsAndDepartures });

  return { isLoading, error, arrivals };
}
