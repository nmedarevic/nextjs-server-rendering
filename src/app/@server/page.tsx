import {lazy} from 'react'
const CardsPileOne = lazy(() => import('@/components/CardsPileOne/CardsPileOne'))
const CardsPileTwo = lazy(() => import('@/components/CardsPileTwo/CardsPileTwo'))
import { Suspense } from "react"
import Loading from "./loading"

export default function ServerComponents() {
  return (
    <div>
      <h3>Server components</h3>
      <Suspense key="prvi" fallback={<Loading />}>
        <CardsPileOne />
      </Suspense>
      <Suspense key="drugi" fallback={<Loading />}>
        <CardsPileTwo />
      </Suspense>
    </div>
  )
}