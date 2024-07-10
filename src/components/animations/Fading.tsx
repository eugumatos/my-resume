import { ReactNode } from 'react';
import { animated, useSpring } from '@react-spring/web';

interface FloatingProps {
  children?: ReactNode;
  duration?: number;
}

export function FadeIn({ duration = 1000, children }: FloatingProps) {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration },
  });

  return <animated.div style={props}>{children}</animated.div>;
}
