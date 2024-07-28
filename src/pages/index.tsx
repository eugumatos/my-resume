import React from 'react';

import Image from "next/image"

import { SpatialBackground } from '@/components/SpatialBackground';
import { Greetings } from '@/components/Greetings/Greetings';
import { Header } from '@/components/Header/Header';
import { Button } from '@/components/Button';

import { ChevronRightIcon } from '@/assets/icons/ChevronRightIcon';
import { ArrowIcon } from '@/assets/icons/ArrowIcon';

import { useDisclosure } from '@/hooks/useDisclosure';
import { FadeIn } from '@/components/animations/Fading';
import { ZoomItem } from '@/components/animations/Zoom';

import { MongoIcon } from '@/assets/icons/MongoIcon';
import { ReactIcon } from '@/assets/icons/ReactIcon';
import { NodeIcon } from '@/assets/icons/NodeIcon';
import { TsIcon } from '@/assets/icons/TsIcon';
import { NextIcon } from '@/assets/icons/NextIcon';
import { GitIcon } from '@/assets/icons/GitIcon';
import { GraphIcon } from '@/assets/icons/GraphIcon';
import { Astronaut } from '@/assets/icons/Astronaut';

import { Journey } from '@/components/Journey/Journey';

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
          <Header />

          <div className="fixed -left-10 top-1/2 flex -rotate-90 items-center gap-1">
            <ArrowIcon rotation="rotate(180)" />
            <span className="font-montserrat text-xs text-white">
              SCROLL TO SEE MORE
            </span>
          </div>

          <FadeIn>
            <section className="h-screen w-screen">
              <div className="flex h-full items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-10">
                  <Image
                    width={200}
                    height={200}
                    className="rounded-full"
                    src="/profile.jpeg"
                    alt=""
                  />
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
                <ZoomItem>
                  <div className="flex cursor-pointer items-center rounded-md border-2 px-5 py-4">
                    <ReactIcon />
                  </div>
                </ZoomItem>
                <ZoomItem>
                  <div className="flex cursor-pointer items-center rounded-md border-2 px-6 py-5">
                    <NextIcon />
                  </div>
                </ZoomItem>
                <ZoomItem>
                  <div className="flex cursor-pointer items-center rounded-md border-2 px-6 py-5">
                    <TsIcon />
                  </div>
                </ZoomItem>
                <ZoomItem>
                  <div className="flex cursor-pointer items-center rounded-md border-2 px-5 py-4">
                    <NodeIcon />
                  </div>
                </ZoomItem>
                <ZoomItem>
                  <div className="flex cursor-pointer items-center rounded-md border-2 px-4 py-3">
                    <MongoIcon />
                  </div>
                </ZoomItem>
                <ZoomItem>
                  <div className="flex cursor-pointer items-center rounded-md border-2 px-5 py-4">
                    <GraphIcon />
                  </div>
                </ZoomItem>
                <ZoomItem>
                  <div className="flex cursor-pointer items-center rounded-md border-2 px-5 py-4">
                    <GitIcon />
                  </div>
                </ZoomItem>
              </div>
            </div>
          </section>

          <section className="h-screen w-screen">
            <div className="flex h-full flex-col items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-center font-quicksand text-5xl font-bold text-white">
                  Journey
                </h1>
              </div>
              <Journey />
            </div>
          </section>
        </React.Fragment>
      )}
    </main>
  );
}
