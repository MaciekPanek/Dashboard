import { useQuery } from "@tanstack/react-query";
import { getSales } from "../services/apiBookings";

export function useSales() {
  const {
    isLoading,
    data: sales,
    error,
  } = useQuery({ queryKey: ["Villas"], queryFn: getSales });

  return { isLoading, error, sales };
}
