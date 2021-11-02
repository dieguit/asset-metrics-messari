import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import {
  LinearProgress,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { ListChildComponentProps } from 'react-window';
import { useAllAssets } from 'src/hooks';

const InfiniteList = dynamic(() => import('./InfiniteList'), { ssr: false });

export default function AssetList() {
  const { assets, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useAllAssets();

  function renderRow({ index, style }: ListChildComponentProps) {
    if (assets[index]) {
      return (
        <Link href={`/assets/${assets[index].id}`} passHref>
          <ListItem button style={style} key={index} component="a">
            <ListItemAvatar
              sx={{
                minWidth: 20,
                mr: 2,
              }}
            >
              <Image
                alt={`img-${assets[index].name}`}
                src={`https://messari.io/asset-images/${assets[index].id}/32.png?v=2`}
                width="20"
                height="20"
              />
            </ListItemAvatar>
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
