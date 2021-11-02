# Simple app that displays metrics and time-series data into a chart visualization.

https://asset-metrics-messari.vercel.app/

## Intro

### Details:

- Build an overview page for a given asset powered by the time-series endpoint for that specific asset as well as the metrics endpoint for that asset
- Page should display a general chart visualizing the time-series for that given asset as well as some metrics alongside the chart
- Asset data from the Messari APIs should be fetched directly from within the web application
- Have the ability to switch the selection from one asset to another within the app, which in turns updates the chart visualization as well as the metrics, for a paginated list of assets try https://data.messari.io/api/v1/assets

#### Docs

- Time-series endpoint: https://data.messari.io/api/v1/assets/yfi/metrics/price/time-series?start=2021-01-01&end=2021-02-01&interval=1d
- Metrics endpoint: https://data.messari.io/api/v1/assets/yfi/metrics
- In both of the above cases {yfi} inside the URL is replaceable with the symbol/slug of another asset
- Here are the detailed docs: https://messari.io/api/docs

## Development

Clone the repo and run

```
yarn install
```

Run:

```
yarn dev
```

You should have the dev environment in http://localhost:3000/

## Decision process

The intention of this area is to explain my thoughts on code patterns,
technologies and libraries used.

### Libraries

- Typescript.
- React with hooks.
- Next.js: A nice framework on top of React, that simplifies SSR. Useful in aproject like this for things like Google indexing (show the prices when people search, for example), SSR (calculate and fetch stuff in the server for faster UIs).
- Material-UI: Popular UI library.
- React Query: A library that allows using promises in react hooks, and manages loading states, data fetching and caching.
- TradingView Lightweight: Library to display financial data that I saw in Messari's app :)
- Jest for tests.
- React-testing-library: For react components testing.

### Structure

I decided to use [Fractal](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af) for folders structure. I used this before in big projects and works great at scale.
There aren't many components to see this in action, but a good example can be seen in `src/layouts/MainLayout`.

### Tests

Due to time constraints, I only created some tests for the list and the asset page. They cover a few patterns so several other use cases can be tested following that.

### Other features considered / Gotchas

This is very basic feature-wise, a few things that could be added to consider this "prod-ready":

- Mocking/Testing the graph.
- Data polling: I added a `useInterval` to refetch the query every X seconds, but the API limits the calls so polling would consume that quickly.
- Searching in the left bar. API does not support searches, I saw Messari uses GraphQL for searching assets, but I thought it is out of scope for this exercise.
- Responsiveness: I made this desktop-only for simplicity.
- Better Metrics display: Only showed a few metrics, and they are in a modal (probably not good if user needs to access some data quickly)

## Production Deployment

As stated above, some items should be moved to ENV vars. Besides that, this should be ready to be deployed.
