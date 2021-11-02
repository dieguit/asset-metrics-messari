import { screen, waitFor, cleanup } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import renderWithProviders from 'src/utils/test/renderWithProviders';
import * as apiMocks from 'src/utils/test/apiMocks';
import { api } from 'src/api/axiosInstance';

import AssetList from '../AssetList';

describe('AssetList', () => {
  const mock = new MockAdapter(api, { onNoMatch: 'throwException' });
  beforeEach(() => {
    mock
      .onGet('https://data.messari.io/api/v1/assets')
      .reply(200, apiMocks.assets, {
        params: {
          page: 1,
          limit: 50,
          'with-metrics': true,
          fields: 'id,slug,name,metrics/market_data/price_usd',
        },
      });
  });
  beforeAll(() => {
    mock.reset();
  });

  it('should display the list of assets correctly', async () => {
    renderWithProviders(<AssetList />);

    await waitFor(() => {
      expect(screen.getByText('Bitcoin')).toBeInTheDocument();
      expect(screen.getByText('Ethereum')).toBeInTheDocument();
      expect(screen.getByText('BNB')).toBeInTheDocument();
      expect(screen.getByText('Cardano')).toBeInTheDocument();
      expect(screen.getByText('XRP')).toBeInTheDocument();
    });
  });

  it('should have the right links to asset page', async () => {
    renderWithProviders(<AssetList />);

    await waitFor(() => {
      expect(screen.getAllByText('Bitcoin')[0].closest('a')).toHaveAttribute(
        'href',
        '/assets/1e31218a-e44e-4285-820c-8282ee222035'
      );
    });
  });
});
