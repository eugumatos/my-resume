import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';

import { Astronaut } from '@/assets/icons/Astronaut';

type Slide = {
  id: number;
  dateRange: string;
  description: string;
  icons: JSX.Element[];
};

type PropType = {
  slides: Array<Slide>;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = props => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(slide => (
            <div className="embla__slide" key={slide.id}>
              <div className="flex flex-col gap-4">
                <div
                  key={slide.id}
                  className="max-w-screen-md flex-col justify-end gap-4 rounded-md border border-white p-5"
                >
                  <span className="text-end font-montserrat font-bold text-white">
                    {slide.dateRange}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <Astronaut />
                    </div>
                    <div className="border-l-2 border-white pl-4">
                      <p className="text-md text-justify font-montserrat font-semibold text-white">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    {slide.icons.map((icon, iconIndex) => (
                      <React.Fragment key={iconIndex}>{icon}</React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? 'embla__dot--selected' : '',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
