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
              I’m Ethan Freeman. I live in Texas, where I design the new software products.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                From a young age, I was fasinated with entrepreneurship, though I did not know to call it that at the time. Every time I caught myself saying, "They should make a _________ that does ________ differently" or "Why don't they have a thing where you can do xyz without _____ problem?", a feeling would strike, telling me to be the they.
              </p>
              <p>
                March 9th, 2020 I found myself starting my dream job as a surgical sales consultant. Over the course of the next year, life was turned upside down, and I found myself with the opportunity to focus on what mattered most to me. A thought that had haunted me for years finally found its way to my daily agenda: Artwork as a service. Also, I was forunate enough to be the 3rd member to a software startup: customer service portal for machine manufacturers.
              </p>
              <p>
                As of March 2023, FAC is partend with Hines, a commerical real estate management company, with over 1MM sft of office space in Houston. HubOEM is partnered with Ipsen USA in a lifetime license agreement. Over the course of the next year, I hope the startups are self sustaining in terms of day-to-day operations, new ventures, and process management.
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
