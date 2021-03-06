import { useRef, useState, useEffect, RefObject } from 'react';

const ONE_HUNDRED_PERCENT = 100;

type useVideoResult = {
  ref: RefObject<HTMLVideoElement>,
  isPlay: boolean,
  isReady: boolean,
  duration: number,
  percentage: number,
  elapsedTime: number,
  togglePlay: () => void,
  onPlay: () => void,
  onPause: () => void,
  onLoadedData: () => void,
  onTimeUpdate: () => void,
  requestFullScreen: () => void,
}

const useVideo = (): useVideoResult => {
  const ref = useRef<HTMLVideoElement>(null);

  const [isReady, setReady] = useState(false);
  const [isPlay, setPlay] = useState(false);

  const [duration, setDuration] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const play = async (node: HTMLVideoElement) => {
    try {
      await node.play();
    } catch {
      setPlay(false);
    }
  };

  useEffect(() => {
    if (!isReady || !ref.current) {
      return;
    }

    const receivedDuration = Math.round(ref.current.duration);

    setDuration(receivedDuration);
    setElapsedTime(receivedDuration);
    setPlay(true);
  }, [isReady]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;

    if (isPlay) {
      play(node);
      return;
    }

    node.pause();
  }, [isPlay]);

  const onLoadedData = () => {
    setReady(true);
  };

  const onTimeUpdate = () => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;
    const currentPercentage = node.currentTime / duration * ONE_HUNDRED_PERCENT;
    const currentElapsedTime = Math.round(duration * (ONE_HUNDRED_PERCENT - currentPercentage) / ONE_HUNDRED_PERCENT);

    setPercentage(currentPercentage);
    setElapsedTime(currentElapsedTime);
  };

  const requestFullScreen = () => {
    if (!ref.current) {
      return;
    }

    ref.current.requestFullscreen();
  };

  const togglePlay = () => {
    setPlay((prevIsPlay) => !prevIsPlay);
  };

  const onPlay = () => {
    setPlay(true);
  };

  const onPause = () => {
    setPlay(false);
  };

  return {
    ref,
    isPlay,
    isReady,
    duration,
    percentage,
    elapsedTime,
    togglePlay,
    onLoadedData,
    onTimeUpdate,
    onPlay,
    onPause,
    requestFullScreen,
  };
};

export {useVideo};
