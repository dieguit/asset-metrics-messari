import { screen, waitFor, cleanup, within } from '@testing-library/react';
import renderWithProviders from 'src/utils/test/renderWithProviders';
import userEvent from '@testing-library/user-event';
import * as apiMocks from 'src/utils/test/apiMocks';
import AssetPage from '../AssetPage';

describe('AssetPage', () => {
  const asset = {
    metrics: apiMocks.btcMetrics.data,
    priceTimeSeries: apiMocks.btcPriceTimeSeries.data.values,
  };
  // Render the component simulating a successfull SSR "asset" injection
  const renderPage = () => renderWithProviders(<AssetPage asset={asset} />);
  it('should display the asset title, price and price change correctly', async () => {
    renderPage();

    const headers = screen.getAllByRole('heading');
    expect(headers[0]).toHaveTextContent('Bitcoin');
    expect(headers[1]).toHaveTextContent('$63,641.03');
    expect(screen.getByText('5.00%')).toBeInTheDocument();
  });

  it('should display the asset metrics correctly', async () => {
    renderPage();

    const metricsButton = screen.getByRole('button', { name: /Metrics/i });
    userEvent.click(metricsButton);

    expect(
      screen.getByRole('heading', { name: /Metrics/i })
    ).toBeInTheDocument();

    expect(screen.getByText('Price')).toBeInTheDocument();

    // Ensure we are looking at the price in modal (and not main page)
    const modal = screen.getAllByRole('presentation')[0];
    expect(within(modal).getByText('$63,641.03')).toBeInTheDocument();

    expect(screen.getByText('1H Range')).toBeInTheDocument();
    expect(screen.getByText('$63,580.85 - $63,933.39')).toBeInTheDocument();
    expect(screen.getByText('24H Range')).toBeInTheDocument();
    expect(screen.getByText('$60,370.66 - $64,317.01')).toBeInTheDocument();
    // ... -> Adding verification for formatted / calculated values only.
    expect(screen.getByText('ATH Date')).toBeInTheDocument();
    expect(screen.getByText('October 20th, 2021')).toBeInTheDocument();
  });
});
