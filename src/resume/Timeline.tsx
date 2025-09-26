

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
