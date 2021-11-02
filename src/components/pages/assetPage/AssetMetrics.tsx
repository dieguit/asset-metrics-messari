import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';
import { AssetInfo } from 'src/api/assets';
import { formatDate, formatPrice } from 'src/utils';

type Props = {
  metrics: AssetInfo['metrics'];
};
const AssetMetrics = ({ metrics }: Props) => {
  const [metricsOpen, setMetricsOpen] = useState(false);

  const price = metrics.market_data?.price_usd?.toFixed(2) || '';
  const priceRange1hLow =
    metrics.market_data?.ohlcv_last_1_hour?.low?.toFixed(2) || '';
  const priceRange1hHigh =
    metrics.market_data?.ohlcv_last_1_hour?.high?.toFixed(2) || '';
  const priceRange24hLow =
    metrics.market_data?.ohlcv_last_24_hour?.low?.toFixed(2) || '';
  const priceRange24hHigh =
    metrics.market_data?.ohlcv_last_24_hour?.high?.toFixed(2) || '';
  const realVolume24h =
    metrics.market_data?.real_volume_last_24_hours?.toFixed(2) || '';
  const marketcap = metrics.marketcap?.current_marketcap_usd?.toFixed(2) || '';
  const y10Marketcap =
    metrics.marketcap?.y_plus10_marketcap_usd?.toFixed(2) || '';
  const y250Marketcap =
    metrics.marketcap?.y_2050_marketcap_usd?.toFixed(2) || '';
  const ath = metrics.all_time_high?.price?.toFixed(2) || '';
  const athDate = metrics.all_time_high?.at
    ? new Date(metrics.all_time_high.at)
    : null;

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          setMetricsOpen(true);
        }}
      >
        Metrics
      </Button>
      <Dialog
        maxWidth="xs"
        fullWidth
        onClose={() => {
          setMetricsOpen(false);
        }}
        open={metricsOpen}
      >
        <DialogTitle>Metrics</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={6}>
              Price
            </Grid>
            <Grid item xs={6}>
              {price ? formatPrice(price) : '-'}
            </Grid>
            <Grid item xs={6}>
              1H Range
            </Grid>
            <Grid item xs={6}>
              {`${formatPrice(priceRange1hLow)} - ${formatPrice(
                priceRange1hHigh
              )}`}
            </Grid>
            <Grid item xs={6}>
              24H Range
            </Grid>
            <Grid item xs={6}>
              {`${formatPrice(priceRange24hLow)} - ${formatPrice(
                priceRange24hHigh
              )}`}
            </Grid>
            <Grid item xs={6}>
              Real Volume (24H)
            </Grid>
            <Grid item xs={6}>
              {realVolume24h ? formatPrice(realVolume24h) : '-'}
            </Grid>
            <Grid item xs={6}>
              Marketcap
            </Grid>
            <Grid item xs={6}>
              {marketcap ? formatPrice(marketcap) : '-'}
            </Grid>
            <Grid item xs={6}>
              Y+10 Marketcap
            </Grid>
            <Grid item xs={6}>
              {y10Marketcap ? formatPrice(y10Marketcap) : '-'}
            </Grid>
            <Grid item xs={6}>
              Y2050 Marketcap
            </Grid>
            <Grid item xs={6}>
              {y250Marketcap ? formatPrice(y250Marketcap) : '-'}
            </Grid>
            <Grid item xs={6}>
              ATH
            </Grid>
            <Grid item xs={6}>
              {ath ? formatPrice(ath) : '-'}
            </Grid>
            <Grid item xs={6}>
              ATH Date
            </Grid>
            <Grid item xs={6}>
              {athDate ? formatDate(athDate, 'MMMM do, yyyy') : '-'}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AssetMetrics;
