import { components } from 'src/types/messari-schema';
import { api } from './axiosInstance';

export type AssetsResponse = components['schemas']['GetAllAssetsV2Response'];
export type Asset = components['schemas']['AssetWithMetricsAndProfileV2'];

export const getAllAssets = ({ pageParam = 1 }) =>
  api.get<AssetsResponse>('/v1/assets', {
    params: {
      page: pageParam,
      limit: 50,
      'with-metrics': true,
      fields: 'id,slug,name,metrics/market_data/price_usd',
    },
  });

export type AssetMetricsResponse =
  components['schemas']['AssetMetricsResponse'];
const getAssetMetrics = (id: string) =>
  api.get<AssetMetricsResponse>(`/v1/assets/${id}/metrics`);

export type AssetTimeseriesResponse = {
  data: {
    values: Array<Array<number>>;
  };
};
const getAssetMetricsPriceTimeSeries = (id: string) =>
  api.get<AssetTimeseriesResponse>(
    `/v1/assets/${id}/metrics/price/time-series`
  );

export type AssetInfo = {
  metrics: components['schemas']['AssetMetrics'];
  priceTimeSeries: Array<Array<number>>;
};
export const getAsset = (id: string) =>
  new Promise<AssetInfo>((resolve, reject) => {
    if (!id) {
      reject('Provide ID');
    } else {
      Promise.all([getAssetMetrics(id), getAssetMetricsPriceTimeSeries(id)])
        .then((values) => {
          const asset = {
            metrics: values[0].data?.data || {},
            priceTimeSeries: values[1].data?.data?.values || [],
          };
          resolve(asset);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
