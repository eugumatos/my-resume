import { EmblaOptionsType } from 'embla-carousel';

import EmblaCarousel from './animations/EmblaCarousel';

import { GitIcon } from '@/assets/icons/GitIcon';
import { NextIcon } from '@/assets/icons/NextIcon';
import { ReactIcon } from '@/assets/icons/ReactIcon';
import { AzureIcon } from "@/assets/icons/AzureIcon";
import { HtmlIcon } from "@/assets/icons/HtmlIcon";
import { TsIcon } from "@/assets/icons/TsIcon";
import { CssIcon } from '@/assets/icons/CssIcon';

const OPTIONS: EmblaOptionsType = { axis: 'y' };

const SLIDES = [
  {
    id: 1,
    dateRange: '2024 - Present',
    description: `At Webmotors, a pioneer in Brazil's car market for 28+ years, I architect the frontend using ReactJS, optimize SEO, and implement a robust design system. Collaborate with stakeholders, build React components, use Storybook, and manage AWS deployments for top-tier performance and user experience.`,
    icons: [
      <ReactIcon key={1} height={34} width={34} />,
      <TsIcon key={2} height={30} width={30} />,
      <AzureIcon key={3} />,
    ],
  },
  {
    id: 2,
    dateRange: '2022 - 2024',
    description: `Worked on Ambev's global e-commerce platform using React JS, Redux, TypeScript, hooks, modern JavaScript, semantic HTML, and Next.js, impacting over 2 million users in 10+ countries. Ensured best practices with development teams and stakeholders. Experienced with Jest, Enzyme, CSS pre-processors, styled components, Storybook, Azure DevOps, and Microfrontends.`,
    icons: [
      <ReactIcon key={1} height={34} width={34} />,
      <TsIcon key={2} height={30} width={30} />,
      <AzureIcon key={3} />,
    ]
  },
  {
    id: 3,
    dateRange: '2024 - Present',
    description: `At Webmotors, a pioneer in Brazil's car market for 28+ years, I architect the frontend using ReactJS, optimize SEO, and implement a robust design system. Collaborate with stakeholders, build React components, use Storybook, and manage AWS deployments for top-tier performance and user experience.`,
    icons: [<GitIcon key={1} height={34} width={34} />],
  },
];

export function Journey() {

  return (
    <div className='mt-8'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
