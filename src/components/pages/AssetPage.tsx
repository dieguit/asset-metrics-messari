import { Box, Typography } from '@mui/material';
import React from 'react';
import { AssetInfo } from 'src/api/assets';

type Props = {
  asset: AssetInfo;
};
const AssetPage = ({ asset }: Props) => {
  console.log(asset);
  return (
    <Box sx={{ height: '100%' }}>
      <Typography variant="h2">{asset.metrics.name}</Typography>
    </Box>
  );
};

export default AssetPage;
