import { useInfiniteQuery } from 'react-query';
import { getAllAssets, Asset } from 'src/api/assets';

const useAllAssets = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery('getAllAssets', getAllAssets, {
      getNextPageParam: (lastPage, pages) => {
        // Assumes that the API responds an empty array if last page was the last one.
        // @TODO: Fix this logic, since API currently returns 404.
        if (lastPage?.data?.data?.length) {
          return pages.length + 1;
        }
        return undefined;
      },
    });

  const assets =
    data?.pages.reduce((acc: Asset[], page) => {
      if (page.data?.data) {
        return [...acc, ...page.data.data];
      }
      return acc;
    }, []) || [];

  return {
    assets,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  };
};

export default useAllAssets;
