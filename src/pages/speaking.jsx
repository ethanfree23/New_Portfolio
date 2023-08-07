import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Ethan Freeman</title>
        <meta
          name="description"
          content="I have a podcast project where I interview artists about the business side of their business."
        />
      </Head>
      <SimpleLayout
        title="I have a podcast project where I interview artists about the business side of their business."
        intro="Our conversations cover their entry to the industry, building their brand, and expanding their network. I find these types of entrepreneurs fascinating because they have to engage both their creative sides for their products as well as marketing, but use the logical side of their brain to get to the big leagues."
      >
        <div className="space-y-20">
          <SpeakingSection title="Podcast">
            <Appearance
              href="https://open.spotify.com/episode/3UoMLPDuP0EFp1jvP5k1Ba?si=d949427a18e84ad9"
              title="Brandon Wisecarver"
              description="Brandon Wisecarver is a NYC-based artist, focusing on virtual-reality art. After starting his career in fine art at Marin Community College, Brandon moved to NYC to find work as a creative, doing anything with fine art, eventually finding work as a janitor with the Con Artist Collective and working his way up to being their Studio Manager. Brandon has garnered a healthy following on TikTok, where he makes virtual-reality art in only a few minutes, describing art history in the meantime. This was a very fun conversation, with a man that is not only talented, but also well read."
              event="Freeman Art Company"
              cta="Listen to the podcast"
            />
            <Appearance
              href="https://rss.com/podcasts/freemanartcompany/911427/"
              title="Adrian Bermeo"
              description="Adrian is an NYC-based painter and curator, putting together art shows for other artists throughout the various boroughs of NYC."
              event="Freeman Art Company"
              cta="Listen to the podcast"
            />
            <Appearance
              href="https://rss.com/podcasts/freemanartcompany/863752/"
              title="Gera1"
              description="Gera was born in Athens, Greece and is a visual artist that started in graffiti in 2009. He graduated with a fine art degree from Thessaloniki and now lives and works in Athens Greece. He has taken part in several exhibitions in Europe and this year he starts his exhibition career in the United States. His work focuses on glitch art and is characterized by realistic portraits and abstract forms that coexist in a space full of slides and intense color contrasts."
              event="Freeman Art Company"
              cta="Listen to the podcast"
            />
            <Appearance
              href="https://rss.com/podcasts/freemanartcompany/826016/"
              title="Jian Giannini"
              description="Jian is an LA-based painter and muralist. Through a professional career working with production studios and big brands, Jian has created a style of his own. For the past year he has focused on growing his personal brand as an artist and has been growing in popularity since then.
              'A history in movement inspires my work. Dance, martial arts, and acrobatics have shown me the multitude of intentional and unintentional positions the body can take on. Through my work, I explore the ambiguity of gesture, inviting the viewer to interrogate how they inherently read and ascribe meaning to the physical body.'"
              event="Freeman Art Company"
              cta="Listen to the podcast"
            />
            <Appearance
              href="https://rss.com/podcasts/freemanartcompany/293290/"
              title="Ken Goshen"
              description="Ken Goshen is a New York-based, Israeli-born classical artist. After serving in the military, Ken decided to pursue painting full time. After teach art in Israel for a few years, Ken decided to move to NYC. He now paints, teaches, and has his own podcast series, 'ART'S COOL'. In this episode, we dive into his daily business operations and how he manages his time. Let's get started"
              event="Freeman Art Company"
              cta="Listen to the podcast"
            />
            <Appearance
              href="https://rss.com/podcasts/freemanartcompany/788527/"
              title="Manuel Skirl"
              description="Manuel Skirl is a person, born and raised in Vienna. His distinctive style is defined by organic structures resulting from black and blue lines. The artist uses self-made painting tools, he develops in a continuous process. He applies his technique at various scales and on multiple surfaces and leaves an unmistakable, more or less abstract mark."
              event="Freeman Art Company"
              cta="Listen to the podcast"
            />
            <Appearance
              href="https://rss.com/podcasts/freemanartcompany/239530/"
              title="Carla Grace"
              description="Carla Grace is a hyper-realistic wildlife artist. Growing up in southern Africa, she shares a deep connection with wild animals. Luckily for us, she can paint these majestic creatures to appear as real as life. Join us as we go on an adventure through Carla's art career, where she imparts lessons and business advice as she has navigated managing a family as well as the challenges of making a living in this line of work."
              event="Freeman Art Company"
              cta="Listen to the podcast"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
