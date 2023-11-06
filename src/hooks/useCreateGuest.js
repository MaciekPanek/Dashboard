import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createGuest as apiCreateGuest } from "../services/apiGuests";

export function useCreateGuest() {
  const queryClient = useQueryClient();

  const { mutate: createGuest, isLoading: isCreating } = useMutation({
    mutationFn: apiCreateGuest,
    onSuccess: () => {
      toast.success("New guest successfully registered");
      queryClient.invalidateQueries({ queryKey: ["Guests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createGuest };
}
