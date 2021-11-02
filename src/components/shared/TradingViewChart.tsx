import { createChart, Time } from 'lightweight-charts';
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

  useEffect(() => {
    if (ref.current) {
      const chart = createChart(ref.current, {
        width,
        height,
        localization: {
          dateFormat: 'yyyy/MM/dd',
        },
      });
      const series = chart.addCandlestickSeries();
      series.setData(data);
    }
  }, [width, height, data]);

  return <div ref={ref}></div>;
};

export default TradingViewChart;
