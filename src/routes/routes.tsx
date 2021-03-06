import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Loading from "src/components/Loading/Loading"
import { PATH } from "src/constants/paths"
import DetailsRoutes from "./DetailsRoutes"
import HomeRoutes from "./HomeRoutes"

export default function Routes() {
  return (
    <Router>
      <HomeRoutes/>
      <DetailsRoutes/>
    </Router>
  )
}
