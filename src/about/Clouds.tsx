import HorizontalList, { ListItem as Item } from "./HorizontalList";

import logoAws from './assets/logo-aws.svg'
import logoOracle from './assets/logo-oracle.svg'


export default function Clouds() {
  return (
    <HorizontalList title='Preferred Cloud Service Provider'>
      <Item icon={logoOracle} />
      <Item icon={logoAws} />
    </HorizontalList>
  )  
}