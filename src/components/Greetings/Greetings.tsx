import { useEffect, useRef } from 'react';
import { useDisclosure } from '@/hooks/useDisclosure';

import { Trail } from './animation/Trail';

type AnimationState = 'welcome' | 'hi';

const greetingDisplayTimes = {
  initialShowTime: 1000, // Time to show the initial greeting
  hideTime: 1500, // Time to wait before hiding the current greeting
  showTimeAfterHide: 1500, // Time to wait before showing the next greeting
  finalHideTime: 1800, // Time to wait before hiding the last greeting
};

type GreetingsProps = {
  actionAfterGreetings?: () => void;
};

export const Greetings = ({ actionAfterGreetings }: GreetingsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const animationRef = useRef<AnimationState>('hi');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleGreetings = () => {
      onOpen();
      timeoutId = setTimeout(() => {
        onClose();

        timeoutId = setTimeout(() => {
          onOpen();
          animationRef.current =
            animationRef.current === 'welcome' ? 'hi' : 'welcome';

          timeoutId = setTimeout(() => {
            onClose();
            actionAfterGreetings && actionAfterGreetings();
          }, greetingDisplayTimes.finalHideTime);
        }, greetingDisplayTimes.showTimeAfterHide);
      }, greetingDisplayTimes.hideTime);
    };

    timeoutId = setTimeout(
      handleGreetings,
      greetingDisplayTimes.initialShowTime,
    );

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Trail isOpen={isOpen}>
      {animationRef.current === 'hi' && (
        <h1 className="font-quicksand text-6xl font-semibold text-white">
          Hi!
        </h1>
      )}
      {animationRef.current === 'welcome' && (
        <h1 className="font-quicksand text-6xl font-semibold text-white">
          Welcome :)
        </h1>
      )}
    </Trail>
  );
};
