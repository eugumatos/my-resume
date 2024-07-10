import React from 'react';
import { useTrail, animated } from '@react-spring/web';

interface TrailProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const Trail = ({ isOpen, children }: TrailProps) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 700 },
    opacity: isOpen ? 1 : 0,
    y: isOpen ? 0 : 30, // Change from x to y for vertical movement
    from: { opacity: 0, y: 30 }, // Start from bottom (y: 50)
  });

  return (
    <div>
      {trail.map(({ ...style }, index) => (
        <animated.div key={index} style={style}>
          <animated.div>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};