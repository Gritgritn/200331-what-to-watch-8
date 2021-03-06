import { Link, Redirect } from 'react-router-dom';
import { isFetchError, isFetchNotReady, isFetchSuccess } from '../../utils/fetched-data';
import LoadingScreen from '../loading-screen/loading-screen';
import { useEffect, useRef } from 'react';
import { useIdParam } from '../../hooks/use-id-param';
import { AppRoute, FetchStatus } from '../../constants';
import { getCurrentFilm } from '../../store/films/films-api-actions';
import { getCurrentFilmData, getCurrentFilmStatus } from '../../store/films/films-selectors';
import round from 'lodash/round';
import { formatElapsedTime } from '../../utils/date';
import { useSelector, useDispatch } from 'react-redux';
import { useVideo } from '../../hooks/use-video';
import { setCurrentFilmFetchStatus } from '../../store/films/films-actions';

const TOGGLER_POSITION_DECIMAL_PRECISION = 2;

function PlayerScreen(): JSX.Element {
  const { id: filmId, error } = useIdParam();
  const film = useSelector(getCurrentFilmData);
  const filmStatus = useSelector(getCurrentFilmStatus);
  const filmStatusRef = useRef(filmStatus);
  const dispatch = useDispatch();
  const fetchCurrentFilm = (id: number) => {
    dispatch(getCurrentFilm(id));
  };

  useEffect(() => {
    filmStatusRef.current = filmStatus;
  }, [filmStatus]);

  useEffect(() => {
    if (!filmId || film?.id === filmId) {
      return;
    }

    fetchCurrentFilm(filmId);
  }, [film?.id, filmId]);


  useEffect(() => () => {
    if (!isFetchSuccess(filmStatusRef.current)) {
      dispatch(setCurrentFilmFetchStatus(FetchStatus.Idle));
    }
  }, []);

  const {
    ref: videoRef,
    isPlay: isVideoPlay,
    isReady: isVideoReady,
    duration: videoDuration,
    percentage: videoPercentage,
    elapsedTime: videoElapsedTime,
    togglePlay: toggleVideoPlay,
    onPlay: onVideoPlay,
    onPause: onVideoPause,
    onLoadedData: onVideoLoadedData,
    onTimeUpdate: onVideoTimeUpdate,
    requestFullScreen: requestVideoFullScreen,
  } = useVideo();

  if (error || isFetchError(filmStatus)) {
    return <Redirect to={AppRoute.NotFound()} />;
  }

  if (isFetchNotReady(filmStatus)) {
    return <LoadingScreen />;
  }

  if (!film) {
    return <Redirect to={AppRoute.NotFound()} />;
  }

  const onFullScreenButtonClick = () => {
    requestVideoFullScreen();
  };

  const onPlayButtonClick = () => {
    toggleVideoPlay();
  };

  const togglerLeftPosition = `${round(videoPercentage, TOGGLER_POSITION_DECIMAL_PRECISION)}%`;
  const playButtonIcon = isVideoPlay ? '#pause' : '#play-s';
  const timeValueTextContent = isVideoReady ? formatElapsedTime(videoElapsedTime) : 'Loading...';

  return (
    <div className="player">
      {!isVideoReady && <LoadingScreen />}

      <video
        ref={videoRef}
        src={film.videoLink}
        className="player__video"
        poster={film.previewImage}
        onPlay={onVideoPlay}
        onPause={onVideoPause}
        onTimeUpdate={onVideoTimeUpdate}
        onLoadedData={onVideoLoadedData}
        data-testid="video-player"
      />

      <Link
        to={AppRoute.Film(filmId)}
        className="player__exit"
        style={{ textDecoration: 'none' }}
      >
        Exit
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={videoDuration - videoElapsedTime}
              max={videoDuration}
            />
            <div
              className="player__toggler"
              style={{ left: togglerLeftPosition }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            {timeValueTextContent}
          </div>
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayButtonClick}
            disabled={!isVideoReady}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={playButtonIcon}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenButtonClick}
            disabled={!isVideoReady}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
