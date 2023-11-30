import { Card } from "../Card/Card"


export default async function CardsPileTwo  ()  {
  await new Promise(resolve => setTimeout(resolve, 80000));

  return <>
    <Card text={"Card pile two"} />
  </>
}