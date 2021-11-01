import React from 'react';
import { Box } from '@mui/material';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { FunctionComponent } from 'react';
import { SizeMe } from 'react-sizeme';

type Props = {
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  items: Record<string, unknown>[];
  fetchNextPage: () => void;
  renderRow: FunctionComponent<ListChildComponentProps<any>>;
};
export default function InfiniteList({
  hasNextPage = false,
  isFetchingNextPage = false,
  items = [],
  fetchNextPage,
  renderRow,
}: Props) {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isFetchingNextPage ? () => {} : fetchNextPage;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index: number) => !hasNextPage || index < items.length;

  return (
    <SizeMe monitorHeight>
      {({ size }) => (
        <Box
          sx={{
            width: size.width, // @TODO: Allow parameterize this
            height: size.height, // @TODO: Allow parameterize this
          }}
        >
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                width={size.width || 260} // @TODO: Allow parameterize this
                height={size.height || 500} // @TODO: Allow parameterize this
                itemCount={itemCount}
                itemSize={46}
                onItemsRendered={onItemsRendered}
                ref={ref}
              >
                {renderRow}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        </Box>
      )}
    </SizeMe>
  );
}
