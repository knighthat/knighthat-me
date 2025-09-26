import { IonIcon } from "@ionic/react";
import { bookOutline } from "ionicons/icons";

import { TimelineItem } from "./Timeline";


export function Experience() {
  return (
    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline} />
        </div>

        <h3 className="h3">Experience</h3>
      </div>

      <div id="experience-timeline"></div>

      <ol className="timeline-list">

        <TimelineItem title='Software Engineer' from='2021' to='Present'>
          Creating and managing the CI/CD pipelines that build, test, 
          and deploy applicationes are ins across multiple operating systems, such as iOS, Android, Windows, and macOS. 
          Automating the entire software development lifecycle, 
          ensuring that code changtegrated and delivered efficiently and reliably to all supported platforms.
        </TimelineItem>

        <TimelineItem title='Minecraft Plugin Developer' from='2016' to='2021'>
          Creating, maintaining, and updating custom plugins that enhance the gameplay experience on a server.
        </TimelineItem>

      </ol>

    </section>
  )
}

export function Projects() {
  return (
    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline} />
        </div>

        <h3 className="h3">Projects</h3>
      </div>

      <ol className="timeline-list">

        <TimelineItem title='Kreate' from='2024' to='Present'>
          Customizable and featuristic music app with support for 40+ languages
        </TimelineItem>

        <TimelineItem title='Interactive Deck' from='2021' to='2023'>
          Multiplatform streamdeck alternative, turn one's phone into a Macro Keyboard
        </TimelineItem>

      </ol>

    </section>
  )
}