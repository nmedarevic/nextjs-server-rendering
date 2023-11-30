
import { Card } from "../Card/Card"


export default async function CardsPileOne ()  {
  await new Promise(resolve => setTimeout(resolve, 60000));

  return <>
    <Card text={"Card pile one"} />
  </>
}