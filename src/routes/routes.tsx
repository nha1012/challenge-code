import React from "react"
import { BrowserRouter } from "react-router-dom"
import StandupRoutes from "./StandupRoutes"
import HomeRoutes from "./HomeRoutes"

export default function Routes() {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <StandupRoutes />
    </BrowserRouter>
  )
}
