import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";
import { createEditVilla } from "../services/apiVillas";

export function useCreateVilla() {
  const queryClient = useQueryClient();

  const { mutate: createVilla, isLoading: isCreating } = useMutation({
    mutationFn: createEditVilla,
    onSuccess: () => {
      // toast.success("New villa successfully created");
      queryClient.invalidateQueries({ queryKey: ["Villas"] });
    },
    // onError: (err) => toast.error(err.message),
  });

  return { isCreating, createVilla };
}
