import { AssetInfo, getAsset } from 'src/api/assets';
import AssetPage from 'src/components/pages/AssetPage';

type Props = {
  asset: AssetInfo;
};
const AssetById = ({ asset }: Props) => <AssetPage asset={asset} />;

export default AssetById;
export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  try {
    const result = await getAsset(id);

    return {
      props: {
        asset: result,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
