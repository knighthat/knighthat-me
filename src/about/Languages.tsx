import HorizontalList, { ListItem as Item } from './HorizontalList'

import logoJava from './assets/logo-java.svg'
import logoJs from './assets/logo-javascript.svg'
import logoKotlin from './assets/logo-kotlin.svg'
import logoPython from './assets/logo-python.svg'
import logoTs from './assets/logo-typescript.svg'


export default function Languages() {
  return (
    <HorizontalList title='Languages'>
      <Item icon={logoJava} />
      <Item icon={logoJs} />
      <Item icon={logoKotlin} />
      <Item icon={logoPython} />
      <Item icon={logoTs} />
    </HorizontalList>
  )
}