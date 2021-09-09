import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import StateButton from 'src/components/StateButton/StateButton'
import { PATH } from 'src/constants/paths'
import { renderSchedule } from 'src/helpers/string'
import styled from 'styled-components'

const StandupItem = (props: stanupItemProps) => {
  const [standup, setStandup] = useState(props.standup)
  return (
    <Container>
      <Link to={PATH.STANDUP_DETAILS}>
      <h3>{standup.name}</h3>
      <Wrapper>
        <LeftContainer>
          <ul>
            <li>State</li>
            <li>No. users</li>
            <li>Creator</li>
            <li>Schedule</li>
          </ul>
        </LeftContainer>
        <RightContainer>
          <ul>
            <li>
              <StateButton state={standup.state}></StateButton>
            </li>
            <li>{standup.no_users}</li>
            <li>{standup.createBy}</li>
            <li>{`${standup.time} ${renderSchedule(standup.schedule)}`}</li>
          </ul>
        </RightContainer>
      </Wrapper>
      </Link>
    </Container>
  )
}


const Container = styled.div`
  border: 1px solid;
  padding: 20px;
  a{
    text-decoration: none;
    color: black;
  }
  ul{
    list-style: none;
  }
`

const LeftContainer = styled.div`
  ul li{
    font-weight: bold;
  }
`
const RightContainer = styled.div`

`
const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`
export default StandupItem
