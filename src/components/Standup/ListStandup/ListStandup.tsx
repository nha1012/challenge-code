import React from 'react'
import { getStandupsListApi } from 'src/apis/standups.api'
import { createResource } from "src/helpers/createResource"
import StandupItem from '../StanupItem/StandupItem'
import { Container, ListStandupContainer } from './ListStanup.style'
let standupsResource = createResource(getStandupsListApi())

const ListStandup = () => {
  const standups: Standups = standupsResource.read()
  return (
    <Container>
      <ListStandupContainer>
        {
          standups.standups.map((standup, key)=>{
            return (
              <StandupItem standup={standup}></StandupItem>
            )
          })
        }
      </ListStandupContainer>

    </Container>
  )
}

export default ListStandup
