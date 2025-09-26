import type React from "react"


type ListProps = {
  title: string
  children: React.ReactNode
}
type ItemProps = { icon: string }

export function ListItem({ icon }: ItemProps) {
  return (
    <li className="clients-item">
      <img src={icon} alt="client logo" />
    </li>
  )  
}

export default function HorizontalList({ title, children }: ListProps) {
    return (
    <section className="clients">
      <h3 className="h3 clients-title">{title}</h3>
      <ul className="clients-list has-scrollbar">{children}</ul>
    </section>
  )
}