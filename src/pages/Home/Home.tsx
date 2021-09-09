import React, { useEffect } from "react"
import request from 'request'
import { getStandupsListApi } from "src/apis/standups.api"
import { Container } from "./Home.styles"
import ListStandup from "src/components/Standup/ListStandup/ListStandup"

export default function Home() {

  return (
    <Container>
      <h2 className="mb-4">Standup Alice</h2>
      <ListStandup></ListStandup>
    </Container>
  )
}


