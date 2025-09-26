import { IonIcon } from "@ionic/react";
import { bookOutline } from "ionicons/icons";


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

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Software Engineer</h4>

          <span>2021 — Present</span>

          <p className="timeline-text">
            Creating and managing the CI/CD pipelines that build, test, 
            and deploy applications across multiple operating systems, such as iOS, Android, Windows, and macOS. 
            Automating the entire software development lifecycle, 
            ensuring that code changes are integrated and delivered efficiently and reliably to all supported platforms.
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Minecraft Plugin Developer</h4>

          <span>2016-2021</span>

          <p className="timeline-text">
            Creating, maintaining, and updating custom plugins that enhance the gameplay experience on a server.
          </p>

        </li>

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

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Kreate</h4>

          <span>2024 — Present</span>

          <p className="timeline-text">
            Customizable and featuristic music app with support for 40+ languages
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Interactive Deck</h4>

          <span>2021 — 2023</span>

          <p className="timeline-text">
            Multiplatform streamdeck alternative, turn one's phone into a <b>Macro Keyboard</b>
          </p>

        </li>

      </ol>

    </section>
  )
}

export function Skills() {
  return (
    <section className="skill">

      <h3 className="h3 skills-title">My skills</h3>

      <ul className="skills-list content-card">
        
        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">UX & Logic Architect</h5>
            <data value="85">85%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{width: "85%"}}></div>
          </div>

        </li>

        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">Automation script writing</h5>
            <data value="80">80%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{width: "80%"}}></div>
          </div>

        </li>

        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">UI Design</h5>
            <data value="60">60%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{width: "60%"}}></div>
          </div>

        </li>

      </ul>

    </section>
  )
}