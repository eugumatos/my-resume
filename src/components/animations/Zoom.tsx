import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface ZoomItemProps {
  children?: React.ReactNode;
}

export function ZoomItem({ children }: ZoomItemProps) {
  const [style, api] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 20 },
  }));

  const handleMouseOver = () => {
    api.start({ transform: 'scale(1.1)' });
  };

  const handleMouseOut = () => {
    api.start({ transform: 'scale(1)' });
  };

  return (
    <animated.div
      style={style}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
    </animated.div>
  );
}
