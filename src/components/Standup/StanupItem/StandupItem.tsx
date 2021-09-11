import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import StateButton from 'src/components/StateButton/StateButton'
import { PATH } from 'src/constants/paths'
import { renderSchedule } from 'src/helpers/string'
import { useAppDispatch } from 'src/hooks/appHook'
import { fetchStandupDetails } from 'src/pages/Details/Details.reducer'
import { LeftContainer, Container, Wrapper, RightContainer } from './StanupItem.style'

const StandupItem = (props: stanupItemProps) => {
  const [standup, setStandup] = useState(props.standup)
  return (
    <Container>
      <Link to={`${PATH.STANDUP_DETAILS}/${standup.id}`}>
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
            <li>{`${standup.time} ${standup?.schedule ? renderSchedule(standup?.schedule): null}`}</li>
          </ul>
        </RightContainer>
      </Wrapper>
      </Link>
    </Container>
  )
}


export default StandupItem
