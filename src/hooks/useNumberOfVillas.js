import { useQuery } from '@tanstack/react-query';
import { getVillas } from '../services/apiVillas';

export function useNumberOfVillas() {
  const { isLoading, data: villasNumber, error } = useQuery({ queryKey: ['villasNumber'], queryFn: getVillas });

  return { isLoading, error, villasNumber };
}
