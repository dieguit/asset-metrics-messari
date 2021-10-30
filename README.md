# Simple app that displays metrics and time-series data into a chart visualization.

## Intro

Details:

- Build an overview page for a given asset powered by the time-series endpoint for that specific asset as well as the metrics endpoint for that asset
- Page should display a general chart visualizing the time-series for that given asset as well as some metrics alongside the chart
- Asset data from the Messari APIs should be fetched directly from within the web application
- Have the ability to switch the selection from one asset to another within the app, which in turns updates the chart visualization as well as the metrics, for a paginated list of assets try https://data.messari.io/api/v1/assets

Docs

- Time-series endpoint: https://data.messari.io/api/v1/assets/yfi/metrics/price/time-series?start=2021-01-01&end=2021-02-01&interval=1d
- Metrics endpoint: https://data.messari.io/api/v1/assets/yfi/metrics
- In both of the above cases {yfi} inside the URL is replaceable with the symbol/slug of another asset
- Here are the detailed docs: https://messari.io/api/docs

## Development

Clone the repo and run

```
yarn install
```

## Decision process

The intention of this area is to explain my thoughts on code patterns,
technologies and libraries used.

### Libraries

- Typescript.
- React with hooks.
- Next.js: A nice framework on top of React, that simplifies SSR. Useful in a
  project like this for things like Google indexing (show the prices when
  people search, for example), SSR (calculate and fetch stuff in the server for
  faster UIs).
- Material-UI: Popular UI library.
- React Query: A library that allows using promises in react hooks, and manages
  loading states, data fetching and caching. I used this to access contract's data
  easily with hooks.
- Jest for tests.
- React-testing-library: For react components testing.

### Structure

I decided to use [Fractal](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af) for folders structure. I used this before in big projects and works great at scale.
There aren't many components to see this in action, but a good example can be
seen in `src/layouts/MainLayout`.

### Tests

## Production Deployment

As stated above, some items should be moved to ENV vars. Besides that, this
should be ready to be deployed.
Some options are:

- Vercel/Heroku or any other SaaS
- Dokku
- Some VPS
