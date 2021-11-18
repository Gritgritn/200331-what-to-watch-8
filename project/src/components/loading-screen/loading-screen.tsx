import InfoScreen from '../info-screen/info-screen';
import PageTitle from '../page-title/page-title';
import Loader from '../loader/loader';

function LoadingScreen(): JSX.Element {
  return (
    <InfoScreen>
      <PageTitle >Loading screen</PageTitle>
      <Loader />
    </InfoScreen>
  );
}

export default LoadingScreen;
