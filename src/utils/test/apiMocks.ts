export const assets = {
  status: {
    elapsed: 13,
    timestamp: '2021-11-02T17:23:48.83809581Z',
  },
  data: [
    {
      id: '1e31218a-e44e-4285-820c-8282ee222035',
      slug: 'bitcoin',
      name: 'Bitcoin',
      metrics: {
        market_data: {
          price_usd: 63664.1474069875,
        },
      },
    },
    {
      id: '21c795f5-1bfd-40c3-858e-e9d7e820c6d0',
      slug: 'ethereum',
      name: 'Ethereum',
      metrics: {
        market_data: {
          price_usd: 4491.860130004055,
        },
      },
    },
    {
      id: '7dc551ba-cfed-4437-a027-386044415e3e',
      slug: 'binance-coin',
      name: 'BNB',
      metrics: {
        market_data: {
          price_usd: 560.5348666404632,
        },
      },
    },
    {
      id: '362f0140-ecdd-4205-b8a0-36f0fd5d8167',
      slug: 'cardano',
      name: 'Cardano',
      metrics: {
        market_data: {
          price_usd: 1.9924010456638588,
        },
      },
    },
    {
      id: '97775be0-2608-4720-b7af-f85b24c7eb2d',
      slug: 'xrp',
      name: 'XRP',
      metrics: {
        market_data: {
          price_usd: 1.1353776582868658,
        },
      },
    },
  ],
};

export const btcMetrics = {
  status: { elapsed: 1, timestamp: '2021-11-02T17:29:20.539945686Z' },
  data: {
    id: '1e31218a-e44e-4285-820c-8282ee222035',
    symbol: 'BTC',
    name: 'Bitcoin',
    slug: 'bitcoin',
    _internal_temp_agora_id: '9793eae6-f374-46b4-8764-c2d224429791',
    market_data: {
      percent_change_usd_last_24_hours: 5,
      price_usd: 63641.02923817606,
      volume_last_24_hours: 8479342324.918923,
      real_volume_last_24_hours: 7112775240.569142,
      volume_last_24_hours_overstatement_multiple: 1.1921285346618702,
      ohlcv_last_1_hour: {
        open: 63902.25285242246,
        high: 63933.38972353036,
        low: 63580.846332124325,
        close: 63643.95871648226,
        volume: 265351356.73784044,
      },
      ohlcv_last_24_hour: {
        open: 61070.11091238567,
        high: 64317.0078484272,
        low: 60370.66395327193,
        close: 63641.02923817606,
        volume: 8147579710.101182,
      },
      last_trade_at: '2021-11-02T17:29:19.774Z',
    },
    marketcap: {
      rank: 1,
      marketcap_dominance_percent: 44.1168099795565,
      current_marketcap_usd: 1202099299913.3574,
      y_2050_marketcap_usd: 1337082780556.5603,
      y_plus10_marketcap_usd: 1315791308111.5742,
      liquid_marketcap_usd: 1202222118489.6458,
      volume_turnover_last_24_hours_percent: 0.5918162303266586,
      realized_marketcap_usd: 436574028968.63666,
      outstanding_marketcap_usd: 1152255716550.1553,
    },
    all_time_high: {
      price: 66873.53690163956,
      at: '2021-10-20T15:45:00Z',
      days_since: 12,
      percent_down: 7.788287253605721,
      breakeven_multiple: 1.0844609325826697,
    },

    alert_messages: null,
  },
};

export const btcPriceTimeSeries = {
  status: { elapsed: 182, timestamp: '2021-11-02T17:29:20.726914424Z' },
  data: {
    id: '1e31218a-e44e-4285-820c-8282ee222035',
    symbol: 'BTC',
    name: 'Bitcoin',
    slug: 'bitcoin',
    contract_addresses: [],
    _internal_temp_agora_id: '9793eae6-f374-46b4-8764-c2d224429791',
    parameters: {
      asset_key: '1e31218a-e44e-4285-820c-8282ee222035',
      asset_id: '1e31218a-e44e-4285-820c-8282ee222035',
      start: '2021-10-23T01:29:20.544821947Z',
      end: '2021-11-02T17:29:20.544821947Z',
      interval: '1h',
      order: 'ascending',
      format: 'json',
      timestamp_format: 'unix-milliseconds',
      columns: ['timestamp', 'open', 'high', 'low', 'close', 'volume'],
    },
    schema: {
      metric_id: 'price',
      name: 'Price',
      description:
        'Volume weighted average price computed using Messari Methodology',
      values_schema: {
        timestamp:
          'Timestamp in milliseconds since the epoch (1 January 1970 00:00:00 UTC)',
        open: 'The price of the asset at the beginning of the specified interval in US dollars.',
        high: 'The highest price of the asset during the specified interval in US dollars.',
        low: 'The lowest price of the asset during the specified interval in US dollars',
        close:
          'The price of the asset at the end of the specified interval in US dollars.',
        volume:
          'The total volume traded during the specified interval across all Messari method markets in US dollars',
      },
      minimum_interval: '1m',
      source_attribution: [{ name: 'Kaiko', url: 'https://www.kaiko.com/' }],
    },
    values: [
      [
        1634954400000, 61006.43670782496, 61241.614147345244, 60961.68520335775,
        61118.80441387875, 143714907.79330137,
      ],
      [
        1634958000000, 61124.78111830563, 61253.81769147756, 61010.287202813255,
        61223.9618931984, 99263959.69588162,
      ],
      [
        1634961600000, 61224.66184600969, 61563.250129017164, 61002.76731570714,
        61149.86472685398, 210692326.25274518,
      ],
    ],
  },
};
