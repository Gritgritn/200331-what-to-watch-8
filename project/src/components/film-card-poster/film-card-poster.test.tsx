import { render, screen } from '@testing-library/react';
import { internet, lorem } from 'faker';
import FilmCardPoster from './film-card-poster';
import {FilmCardBackgroundSize} from '../../constants';

const mockSource = internet.url();
const mockAltText = lorem.word();

describe('Component: FilmCardPoster', () => {
  it('should render correctly with no props', () => {
    render(
      <FilmCardPoster src={mockSource} alt={mockAltText} />,
    );

    expect(screen.getByAltText(mockAltText)).toHaveAttribute('src', mockSource);
    expect(screen.getByTestId('film-card-poster-container')).not.toHaveClass('film-card__poster--big');
    expect(screen.getByTestId('film-card-poster-container')).not.toHaveClass('film-card__poster--small');
  });

  it('should render correctly with small props', () => {
    render(
      <FilmCardPoster src={mockSource} alt={mockAltText} size={FilmCardBackgroundSize.Small} />,
    );

    expect(screen.getByAltText(mockAltText)).toHaveAttribute('src', mockSource);
    expect(screen.getByTestId('film-card-poster-container')).not.toHaveClass('film-card__poster--big');
    expect(screen.getByTestId('film-card-poster-container')).toHaveClass('film-card__poster--small');
  });

  it('should render correctly with big props', () => {
    render(
      <FilmCardPoster src={mockSource} alt={mockAltText} size={FilmCardBackgroundSize.Big} />,
    );

    expect(screen.getByAltText(mockAltText)).toHaveAttribute('src', mockSource);
    expect(screen.getByTestId('film-card-poster-container')).toHaveClass('film-card__poster--big');
    expect(screen.getByTestId('film-card-poster-container')).not.toHaveClass('film-card__poster--small');
  });
});
