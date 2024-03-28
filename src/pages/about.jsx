import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import headshotImage from '@/images/headshot.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ethan Freeman</title>
        <meta
          name="description"
          content="I’m Ethan Freeman. I live in Texas, where I design new software products."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={headshotImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hello there, I am Ethan and I am an entrepreneur. 
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Going to the University of Texas at Austin between 2012 and 2016, there was a massive focus on technology amongst each college. Austin, being the tech hub of Texas, was attracting top tech talent not only from across the state but also from across the world. It was exciting to be around so much creativity and passion surrounding a booming industry. Naturally, my focus became hyper-focused on a novel business idea and what it would take for the idea to become a self-sustaining company competing with the best in its respective industry.
              </p>
              <p>
                Though I had epiphanies surrounding the importance of tech, I kept working on my nutrition degree with plans to be a medical sales rep. The truth was, I wanted to be an entrepreneur. I was confident I could come up with great ideas, but I wanted to skill stack to take my ideas from just a thought to products that are earning revenue. During every surgery I covered as a rep, I would daydream (when appropriate) about being able to code, market, sell, manage money, and operate a software company. This was all in an effort to avoid working for others, something I absolutely despise.
              </p>
              <p>
               
Sure enough, my dreams were answered. I felt this persistent nag, pushing me to seek a side hustle, leading me to meet Alex. When he told me the idea of creating a serial number-based parts portal for machine manufacturers, I knew this would be a great problem to help solve. Years later, here we are! We have over five OEMs, two distributors, and over 1,000 consumer packaged goods manufacturers on our platform. In this process, I have not only learned to code full stack, but I have also learned to project manage, sell software like a true professional, and I have grown in my understanding of food production and the operational requirements and bottlenecks associated with this industry. In my journey, I have met many people in the industry from every imaginable industrial sub-sector and every imaginable human subculture. I absolutely love doing this, and thank God, or whatever beautiful push of wind that led me to doing this day in and day out.





              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink> */}
              <SocialLink href="https://www.instagram.com/the.ethan.freeman/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/ethanfree23" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/ethanfreeman23" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:ethan23@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                ethanfree23@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
