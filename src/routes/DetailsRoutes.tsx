import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { PATH } from "src/constants/paths"
import Loading from "src/components/Loading/Loading"
const Details = lazy(() => import("src/pages/Details/Details"))

export default function DetailsRoutes() {
  return (
    <Switch>
      <Route
        path={PATH.STANDUP_DETAILS}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Details />
          </Suspense>
        )}
      />
    </Switch>
  )
}
