import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createGuest as apiCreateGuest } from "../services/apiGuests";
import { useVillaDetails } from "../context/VillaDetailsContext";

export function useCreateGuest() {
  const queryClient = useQueryClient();
  const { setGuestId } = useVillaDetails();

  const { mutate: createGuest, isLoading: isCreating } = useMutation({
    mutationFn: apiCreateGuest,
    onSuccess: (guestId) => {
      // Receive the guest ID from the mutation
      toast.success("New guest successfully registered");
      queryClient.invalidateQueries({ queryKey: ["Guests"] });

      // You can use guestId here in your component
      setGuestId(guestId);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createGuest };
}
