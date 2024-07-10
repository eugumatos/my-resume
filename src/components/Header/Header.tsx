import { PlanetIcon } from '@/assets/icons/PlanetIcon';

import { Floating } from '../animations/Floating';
import { ActiveLink } from './ActiveLink';

export function Header() {
  return (
    <header className="mx-auto flex h-5 max-w-screen-xl items-center px-8 pt-9">
      <div className="flex w-full items-center justify-between">
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
