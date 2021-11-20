import { ReactNode } from 'react';
import { INFO_SCREEN_STYLES } from '../../styles/styles';

type InfoScreenProps = {
  children?: ReactNode,
}

function InfoScreen({children}: InfoScreenProps): JSX.Element {
  return (
    <div className="page-content" style={INFO_SCREEN_STYLES}>
      {children}
    </div>
  );
}

export default InfoScreen;
