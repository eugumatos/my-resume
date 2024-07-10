import React from 'react';
import { SpatialBackground } from '@/components/SpatialBackground';
import { Greetings } from '@/components/Greetings/Greetings';
import { Header } from '@/components/Header/Header';
import { Button } from '@/components/Button';

import { ChevronRightIcon } from '@/assets/icons/ChevronRightIcon';
import { ArrowIcon } from '@/assets/icons/ArrowIcon';

import { useDisclosure } from '@/hooks/useDisclosure';
import { FadeIn } from '@/components/animations/Fading';
import { MongoIcon } from '@/assets/icons/MongoIcon';
import { ReactIcon } from '@/assets/icons/ReactIcon';
import { NodeIcon } from '@/assets/icons/NodeIcon';
import { TsIcon } from '@/assets/icons/TsIcon';
import { NextIcon } from '@/assets/icons/NextIcon';
import { GitIcon } from '@/assets/icons/GitIcon';
import { GraphIcon } from '@/assets/icons/GraphIcon';

const slides = [
  { key: 1, component: <ReactIcon /> },
  { key: 2, component: <ReactIcon /> },
  { key: 3, component: <ReactIcon /> },
  { key: 4, component: <ReactIcon /> },
  { key: 5, component: <ReactIcon /> },
  { key: 6, component: <ReactIcon /> },
  { key: 7, component: <ReactIcon /> },
];

export default function Home() {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <main className="relative h-screen overflow-y-auto">
      <SpatialBackground />

      <div
        className="absolute flex h-screen w-screen items-center justify-center"
        hidden={!isOpen}
      >
        <Greetings actionAfterGreetings={onOpen} />
      </div>

      {isOpen && (
        <React.Fragment>
          <div className="fixed -left-10 top-1/2 flex -rotate-90 items-center gap-1">
            <ArrowIcon rotation="rotate(180)" />
            <span className="font-montserrat text-xs text-white">
              SCROLL TO SEE MORE
            </span>
          </div>

          <FadeIn>
            <section className="h-screen w-screen">
              <Header />
              <div className="flex h-full items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-10">
                  <img className="h-28 w-28 rounded-full" src="" alt="" />
                  <h1 className="text-center font-quicksand text-5xl font-bold text-white">
                    INDEPENDENT FRONT-END <br></br> WEB DEVELOPER
                  </h1>
                  <Button type="button" icon={<ChevronRightIcon />}>
                    Start a project request
                  </Button>
                </div>
              </div>
            </section>
          </FadeIn>

          <section className="h-screen w-screen">
            <div className="flex h-full items-center justify-center">
              <div className="text-center text-white">
                <p className="typewriter font-montserrat text-4xl font-semibold">
                  Hey! I'm Gustavo, twenty-three years old <br />{' '}
                  <u>front-end</u> developer. I make beautiful <br /> websites
                  that will help you achieve <br /> your goals. Also, I'm
                  interested in <br /> <u>product</u> and <u>branding design</u>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="h-screen w-screen">
            <div className="flex h-full flex-col items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-center font-quicksand text-5xl font-bold text-white">
                  Main stack
                </h1>
              </div>

              <div className="mt-14 flex gap-4">
                <div className="flex items-center rounded-md border-2 px-5 py-3">
                  <ReactIcon />
                </div>
                <div className="flex items-center rounded-md border-2 px-5 py-3">
                  <NextIcon />
                </div>
                <div className="flex items-center rounded-md border-2 px-5 py-3">
                  <TsIcon />
                </div>
                <div className="flex items-center rounded-md border-2 px-5 py-3">
                  <NodeIcon />
                </div>
                <div className="flex items-center rounded-md border-2 px-4 py-3">
                  <MongoIcon />
                </div>
                <div className="flex items-center rounded-md border-2 px-5 py-3">
                  <GraphIcon />
                </div>
                <div className="flex items-center rounded-md border-2 px-5 py-3">
                  <GitIcon />
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </main>
  );
}
