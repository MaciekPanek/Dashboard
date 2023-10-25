import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../services/apiBookings";

export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({ queryKey: ["Bookings"], queryFn: getBookings });

  return { isLoading, error, bookings };
}
