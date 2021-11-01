import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  LinearProgress,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { ListChildComponentProps } from 'react-window';
import useAllAssets from 'src/hooks/useAllAssets';

const InfiniteList = dynamic(() => import('./InfiniteList'), { ssr: false });

export default function AssetList() {
  const { assets, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useAllAssets();

  function renderRow({ index, style }: ListChildComponentProps) {
    if (assets[index]) {
      return (
        <Link href={`/assets/${assets[index].id}`} passHref>
          <ListItem button style={style} key={index} component="a">
            <ListItemText primary={assets[index].name} />
          </ListItem>
        </Link>
      );
    }
    return null;
  }

  return (
    <>
      {(isLoading || isFetchingNextPage) && <LinearProgress />}
      <div>
        <InfiniteList
          items={assets}
          renderRow={renderRow}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>
    </>
  );
}
