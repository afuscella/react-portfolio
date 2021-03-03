import React, { useState } from 'react';
import Lottie from 'react-lottie';

import heartData from 'public/animations/twitter-heart.json';

import { HeartWrapper } from './styles';

export function Heart() {
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false, direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: heartData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <HeartWrapper onClick={() => {
      const animation = 1;
      const reverseAnimation = -1;

      setAnimationState({
        ...animationState,
        isStopped: false,
        direction: animationState.direction === animation ? reverseAnimation : animation,
      });
    }}
    >
      <div>
        <Lottie
          options={defaultOptions}
          height={30}
          width={30}
          direction={animationState.direction}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </div>
    </HeartWrapper>
  );
}
