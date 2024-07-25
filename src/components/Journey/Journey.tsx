import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from './animations/EmblaCarousel';

import { GitIcon } from '@/assets/icons/GitIcon';
import { NextIcon } from '@/assets/icons/NextIcon';
import { ReactIcon } from '@/assets/icons/ReactIcon';

const OPTIONS: EmblaOptionsType = { axis: 'y' };

const SLIDES = [
  {
    id: 1,
    dateRange: '2024 - Present',
    description: `At Webmotors, a pioneer in Brazil's car market for 28+ years, I architect the frontend using ReactJS, optimize SEO, and implement a robust design system. Collaborate with stakeholders, build React components, use Storybook, and manage AWS deployments for top-tier performance and user experience.`,
    icons: [
      <ReactIcon height={34} width={34} />,
      <NextIcon height={34} width={34} />,
      <GitIcon height={34} width={34} />,
    ],
  },
  {
    id: 2,
    dateRange: '2024 - Present',
    description: `At Webmotors, a pioneer in Brazil's car market for 28+ years, I architect the frontend using ReactJS, optimize SEO, and implement a robust design system. Collaborate with stakeholders, build React components, use Storybook, and manage AWS deployments for top-tier performance and user experience.`,
    icons: [<ReactIcon height={34} width={34} />],
  },
  {
    id: 3,
    dateRange: '2024 - Present',
    description: `At Webmotors, a pioneer in Brazil's car market for 28+ years, I architect the frontend using ReactJS, optimize SEO, and implement a robust design system. Collaborate with stakeholders, build React components, use Storybook, and manage AWS deployments for top-tier performance and user experience.`,
    icons: [<GitIcon height={34} width={34} />],
  },
];

export function Journey() {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}
