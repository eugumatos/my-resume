import { ReactNode } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface FloatingProps {
  children?: ReactNode;
  duration?: number;
}

export const Floating = ({ children, duration = 2000 }: FloatingProps) => {
  const styles = useSpring({
    loop: true,
    to: [{ transform: 'translateY(-10px)' }, { transform: 'translateY(0px)' }],
    from: { transform: 'translateY(0px)' },
    config: { duration },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};
