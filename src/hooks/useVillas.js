import { useQuery } from "@tanstack/react-query";
import { getVillas } from "../services/apiVillas";

export function useVillas() {
  const {
    isLoading,
    data: villas,
    error,
  } = useQuery({ queryKey: ["Villas"], queryFn: getVillas });
  // console.log(villas);

  return { isLoading, error, villas };
}
