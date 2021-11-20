import { CSSProperties } from 'react';

const INFO_SCREEN_STYLES: CSSProperties = {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const LOADER_STYLES: CSSProperties = {
  margin: 'auto',
  background: 'transparent',
  display: 'block',
  shapeRendering: 'auto',
};

const USER_BLOCK_STYLES: CSSProperties = {
  minHeight: 63,
};

export { INFO_SCREEN_STYLES, LOADER_STYLES, USER_BLOCK_STYLES };
