import { IonIcon } from "@ionic/react"
import type React from "react"


type TimelineProps = {
  title: string
  icon: string
  children: React.ReactNode
}
type TimelineItemProps = {
  title: string
  from: string
  to: string
  children: string
}

export function TimelineItem({ title, from, to, children}: TimelineItemProps ) {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{from} — {to}</span>
      <p className="timeline-text">{children}</p>
    </li>
  )
}

export default function Timeline({ title, icon, children }: TimelineProps) {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={icon} />
        </div>
        <h3 className="h3">{title}</h3>
      </div>
      <ol className="timeline-list">
        {children}
      </ol>
    </section>
  )
}
