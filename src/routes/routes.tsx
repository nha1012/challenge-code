import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import DetailsRoutes from "./DetailsRoutes"
import HomeRoutes from "./HomeRoutes"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <HomeRoutes/>
        <DetailsRoutes/>
      </Switch>
    </Router>
  )
}
