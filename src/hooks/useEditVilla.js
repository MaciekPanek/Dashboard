import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditVilla } from "../services/apiVillas";

export function useEditVilla() {
  const queryClient = useQueryClient();

  const { mutate: editVilla, isLoading: isEditing } = useMutation({
    mutationFn: ({ newVillaData, id }) => createEditVilla(newVillaData, id),
    onSuccess: () => {
      toast.success("Villa successfully edited");
      queryClient.invalidateQueries({ queryKey: ["Villas"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editVilla };
}
