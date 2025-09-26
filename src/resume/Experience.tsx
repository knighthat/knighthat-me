import { bookOutline, codeSlashOutline } from "ionicons/icons";

import Timeline, { TimelineItem as Item } from "./Timeline";


export function Experience() {
  return (
    <Timeline title='Experience' icon={bookOutline}>
      <Item title='Software Engineer' from='2021' to='Present'>
        Creating and managing the CI/CD pipelines that build, test, 
        and deploy applicationes are ins across multiple operating systems, such as iOS, Android, Windows, and macOS. 
        Automating the entire software development lifecycle, 
        ensuring that code changtegrated and delivered efficiently and reliably to all supported platforms.
      </Item>

      <Item title='Minecraft Plugin Developer' from='2016' to='2021'>
        Creating, maintaining, and updating custom plugins that enhance the gameplay experience on a server.
      </Item>
    </Timeline>
  )
}

export function Projects() {
  return (
    <Timeline title='Projects' icon={codeSlashOutline}>
      <Item title='Kreate' from='2024' to='Present'>
        Customizable and featuristic music app with support for 40+ languages
      </Item>
      <Item title='Interactive Deck' from='2021' to='2023'>
        Multiplatform streamdeck alternative, turn one's phone into a Macro Keyboard
      </Item>
    </Timeline>
  )
}