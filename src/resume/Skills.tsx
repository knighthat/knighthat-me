

type SkillProps = {
  title: string
  progress: number
}

function SkillItem({ title, progress }: SkillProps) {
  return (
    <li className="skills-item">
      <div className="title-wrapper">
        <h5 className="h5">{title}</h5>
        <data value={progress}>{progress}%</data>
      </div>

      <div className="skill-progress-bg">
        <div className="skill-progress-fill" style={{width: `${progress}%`}}></div>
      </div>
    </li>
  )
}

export function Skills() {
  return (
    <section className="skill">

      <h3 className="h3 skills-title">My skills</h3>

      <ul className="skills-list content-card">

        <SkillItem title='UX & Logic Architect' progress={85} />
        <SkillItem title='Automation script writing' progress={80} />
        <SkillItem title='UI Design' progress={60} />
      </ul>

    </section>
  )
}