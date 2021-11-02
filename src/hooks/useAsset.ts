import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { AssetInfo, getAsset } from 'src/api/assets';
import useInterval from './useInterval';

const useAsset = (ssrAsset: AssetInfo, pollingEnabled = false) => {
  // Populate asset with initial values from SSR
  const [asset, setAsset] = useState(ssrAsset);

  const { data, isLoading, refetch } = useQuery(
    ['getAsset', ssrAsset.metrics.id],
    () => getAsset(ssrAsset.metrics.id as string)
  );

  useEffect(() => {
    if (!isLoading && data) {
      setAsset(data);
    }
  }, [data, isLoading]);

  useInterval(() => {
    if (pollingEnabled) {
      refetch();
    }
  }, 2000);

  return {
    asset,
  };
};

export default useAsset;
