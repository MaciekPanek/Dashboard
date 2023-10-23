import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { deleteVilla as apiDeleteVilla } from "../services/apiVillas";

export function useDeleteVilla() {
  const queryClient = useQueryClient();

  const { mutate: deleteVilla, isLoading: isDeleting } = useMutation({
    mutationFn: apiDeleteVilla,
    onSuccess: () => {
      toast.success("Villa successfully created");
      queryClient.invalidateQueries({ queryKey: ["Villas"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteVilla };
}
