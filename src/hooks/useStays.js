import { useQuery } from "@tanstack/react-query";
import { getSales, getStays } from "../services/apiBookings";

export function useStays() {
  const {
    isLoading,
    data: stays,
    error,
  } = useQuery({ queryKey: ["Stays"], queryFn: getStays });

  return { isLoading, error, stays };
}
