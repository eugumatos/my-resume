import { PlanetIcon } from '@/assets/icons/PlanetIcon';

import { Floating } from '../animations/Floating';
import { ActiveLink } from './ActiveLink';

export function Header() {
  return (
    <header className="fixed z-10 h-auto w-full bg-black px-6 py-2">
      <div className="mx-auto flex w-full items-center justify-between">
        <Floating duration={1500}>
          <PlanetIcon />
        </Floating>

        <nav className="flex gap-20 font-montserrat text-white">
          <ActiveLink>Home</ActiveLink>
          <ActiveLink>Work</ActiveLink>
          <ActiveLink>Contact</ActiveLink>
          <ActiveLink>Start a project</ActiveLink>
        </nav>
      </div>
    </header>
  );
}
