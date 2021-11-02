import { Box, Chip, Typography } from '@mui/material';
import React from 'react';
import { AssetInfo } from 'src/api/assets';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { formatDate, formatPrice } from 'src/utils';
import dynamic from 'next/dynamic';
import { SizeMe } from 'react-sizeme';
import AssetMetrics from './assetPage/AssetMetrics';
import { Time } from 'lightweight-charts';

const TradingViewChart = dynamic(() => import('../shared/TradingViewChart'), {
  ssr: false,
});

type Props = {
  asset: AssetInfo;
};
const AssetPage = ({ asset }: Props) => {
  const priceChange = asset.metrics.market_data
    ?.percent_change_usd_last_24_hours as number;
  const priceIncreased = priceChange > 0;
  const price = asset.metrics.market_data?.price_usd?.toFixed(2) || '';

  const assetPriceData =
    asset.priceTimeSeries.map((item) => ({
      time: (item[0] / 1000) as Time, // TVL allows unix in seconds as Time.
      open: item[1],
      high: item[2],
      low: item[3],
      close: item[4],
    })) || [];

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', placeContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flex: 0, alignItems: 'center', gap: 2 }}>
          <Typography variant="h2">{asset.metrics.name}</Typography>
          <Typography variant="h2">{formatPrice(price)}</Typography>
          <Chip
            size="small"
            label={`${priceChange.toFixed(2)}%`}
            icon={priceIncreased ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
            color={priceIncreased ? 'success' : 'error'}
          />
        </Box>
        <Box>
          <AssetMetrics metrics={asset.metrics} />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, height: '100%', mt: 2 }}>
        <SizeMe monitorHeight>
          {({ size }) => (
            <Box
              sx={{
                width: size.width,
                height: size.height,
              }}
            >
              <TradingViewChart
                width={size.width || 400}
                height={size.height || 400}
                data={assetPriceData}
                key={`tradingview-asset-${asset.metrics.id}`}
              />
            </Box>
          )}
        </SizeMe>
      </Box>
    </Box>
  );
};

export default AssetPage;
