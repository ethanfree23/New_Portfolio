import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Ethan Freeman</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software 'n gadets."
        intro="I get asked a lot about the things I use to build software & stay productive. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” Microsoft Surface 2, 8GB RAM (2017)">
              I was using an Apple Air 14&quot; before this, but a hobo stole it out 
              of my car while I was getting a haircut. I honestly do not like this
              computer. The touch screen is nice, so there is that.
            </Tool>
            <Tool title="HP M-f FHD Display">
              This is a great monitor that I use to project manage, code, and for 
              video calls. The display&apos;s colors are on point and the articulating arm
              works well with my standing desk.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="React.js">
              I learned the basics of React.js during my time at Flatiron
              Bootcamp. This is a great framework for handling everything frontend.
              It works extremely nicely with Tailwind for styling, allowing me to spin
              up a webstie quite quickly.
            </Tool>
            <Tool title="Ruby on Rails">
              I&apos;m not the biggest user of Rails. I naturally enjoyed the front end 
              aspect of developemnt, and on our team, we have a backend developer.
              For what it is worth, it is a great framework to learn a lot under one
              roof. If you stay within its usecase, it will automate a lot of work.
            </Tool>
            <Tool title="Redux">
              Redux is a great tool to connect the front and backend together. It works
              well with React and Rails. Ultimately, Redux is essentially to create a 
              truly versitile development cycle.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the stock features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Jira">
              We use Jira for our Scrum. It is very easy to collaborate across internal
              and contract developers. I particularly like the ease to edit, combine, 
              and delete.
            </Tool>
            <Tool title="Youtube">
              I use Youtube for so much it is insane. I cannot believe how lucky I am to be 
              alive in a time where Youtube exists. If I want to learn about how to code something complex: Youtube.
               If I want to fix something on my car: Youtube. If I want to learn virtually anything: Youtube.
            </Tool>
            <Tool title="ChatGPT">
              Yes, ChatGPT is literally changing my life. Yes, I have considered altering my existence and am actively trying to do so becuase of ChatGPT. 
              This thing is it. I can overcome bugs with ease, allowing me to code like crazy. I can cook based on the ingredients I have, for a serving of one, by simply 
              telling Chat what I am looking to accomplish. I can spin up a triathlon work out specific to my last work out or my current level of energy. It is the most 
              powerful tool I have ever used, and I am so happy to know that it is here not only to stay, but to grow in its capabilities.
            </Tool>
            <Tool title="Confluence">
              We use Confluence to keep track of our processes. It is essentially a ledger of tribal knowledge. Our goal is to have all our processes and goals defined so well, someone can simply copy these guides and produce the same product.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
