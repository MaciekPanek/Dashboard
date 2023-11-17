// useVillas.js

import { useQuery } from '@tanstack/react-query';
import { getVillas } from '../services/apiVillas';
import { useVillaContext } from '../context/VillaContext';
import { useEffect } from 'react';

export function useVillas() {
  const {
    isLoading,
    data: villas,
    error,
  } = useQuery({
    queryKey: ['Villas'],
    queryFn: getVillas,
  });

  const { setVillasData } = useVillaContext();

  useEffect(() => {
    if (villas) {
      setVillasData(villas);
    }
  }, [villas, setVillasData]);
  return { isLoading, error, villas: villas || [] };
}
