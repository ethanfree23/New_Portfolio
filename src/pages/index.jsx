import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
} from '@/components/SocialIcons'

import chicago from 'src/images/photos/chicago.jpeg'
import forest from 'src/images/photos/forest.jpeg'
import hiking from 'src/images/photos/hiking.jpeg'
import reflection from 'src/images/photos/reflection.jpeg'
import cloud from 'src/images/photos/cloud.jpg'
import logoInfosys from '@/images/logos/infosys.svg'
import logoFAC from '@/images/logos/fac.svg'
import logoHuboem from '@/images/logos/huboem.svg'
import logoNuvasive from '@/images/logos/nuvasive.svg'
import logoSynthes from '@/images/logos/synthes.svg'
import logoSHI from '@/images/logos/shi.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'HubOEM',
      title: 'Co-Founder, Sales',
      logo: logoHuboem,
      start: 'Jan-2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Freeman Art Company',
      title: 'Founder, Sales',
      logo: logoFAC,
      start: 'Oct-2020',
      end: 'Sep 2023'
    },
    {
      company: 'Infosys',
      title: 'Scrum Master',
      logo: logoInfosys,
      start: 'Jun 2022',
      end: 'Aug 2023'
    },
    {
      company: 'Nuvasive',
      title: 'Surgical Consultant',
      logo: logoNuvasive,
      start: 'Feb 2020',
      end: 'Jan 2021',
    },
    {
      company: 'DePuy Synthes',
      title: 'Surgical Consultant',
      logo: logoSynthes,
      start: 'Jul 2018',
      end: 'Oct 2019',
    },
    {
      company: 'SHI',
      title: 'Inside Sales',
      logo: logoSHI,
      start: 'Nov 2017',
      end: 'Jul 2018',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[forest, hiking, chicago, reflection, cloud].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Ethan Freeman - Software Sales Engineer
        </title>
        <meta
          name="description"
          content="Welcome to my portfolio, where innovation meets passion."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Full Stack Human
          </h1>

          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Welcome to my portfolio, where innovation meets passion. As a seasoned creator in the tech industry, I weave together a tapestry of skills spanning software engineering, project management, and sales. With each project, I embark on a journey of creation, driven by an innate desire to bring order to chaos. My love for cleanliness and efficiency fuels my commitment to crafting seamless solutions, where every part works harmoniously towards a common goal.

            My journey as a creator is rooted in a deep-seated appreciation for problem-solving and complex challenges. From my days in medical sales, navigating the intricacies of implant consulting for orthopedic trauma and spine surgeries, to my work with HubOEM, where I specialize in enterprise B2B SaaS sales. Here, I collaborate with large food brands and their machine manufacturers, providing innovative solutions tailored to their needs. Additionally, my role extends to full-stack development and project management, ensuring the smooth execution of each endeavor.

            At Freeman Art Company, my passion for supporting others through my creations shines through. By empowering artists with new avenues to market their works, I aim to make a meaningful impact in the art community. This commitment to innovation and collaboration is at the core of everything I do, driving me to leave a legacy of excellence in every project I undertake.

            As you explore my portfolio, you&apos;ll discover not just a showcase of my technical prowess, but a glimpse into my character and mindset. Join me on this journey of creation, and together, let&apos;s build a future where possibilities are limitless.          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            In general, outside of my career, I enjoy learning new things, particularly language, city design, and global geopolitics. For whatever reason, foreign cultures have always fascinated me. I love to dive into another way of life, to see what being human is from a different perspective. As I continue to learn and explore our world, I hope one day I am able to bring it all together to create a product that helps massive amounts of the population live a life with access to water, energy, education, and outstanding cultural values, like supporting family and being good to others. We have found ourselves on a beautiful planet. My hope is to help reflect that in how we live.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Life is a big trip... There is so much chaos, and it is so difficult to move past the ocean of emotions whose waves&apos; crash into us, making the journey strenuous at times. We can be confused and uncertain. One thing is for sure, if we sit around and do nothing, we miss the world. We need to get out, try new things, challenge who we are down to the core. Take time for some mental hygiene. Eat well. Spend time with friends, even sober once in a while. Learn to dance, learn to cook. Dive into the water, climb on the rock, sit on the sand. Leave the phone and go on a walk.  Buy the ticket already, the money comes back. Stay at a hostel.Ask the weird question. Look out the window in the Uber. Embrace the chaos, out chaos the chaos.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://medium.com/@ethanfree23"
              aria-label="Follow on Medium"
              icon={MediumIcon}
            />
            <SocialLink
              href="https://www.instagram.com/another.ethan.freeman/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/ethanfree23"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/ethanfreeman23/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
