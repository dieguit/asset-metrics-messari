import { createChart, Time, ISeriesApi } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

type Props = {
  width: number;
  height: number;
  data: {
    time: Time;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
};
const TradingViewChart = ({ width, height, data }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const series = useRef<ISeriesApi<'Candlestick'> | null>(null);

  useEffect(() => {
    if (ref.current) {
      if (!series.current) {
        const chart = createChart(ref.current, {
          width,
          height,
          localization: {
            dateFormat: 'yyyy/MM/dd',
          },
        });
        const newSeries = chart.addCandlestickSeries();
        series.current = newSeries;
        series.current.setData(data);
      } else {
        series.current.setData(data);
      }
    }
  }, [width, height, data]);

  return <div ref={ref}></div>;
};

export default TradingViewChart;
