import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getStandupItemById } from 'src/apis/standups.api';
import ButtonAddQuestion from 'src/components/Questions/ButtonAddQuestion';
import Questions from 'src/components/Questions/Questions';
import { LeftContainer, RightContainer } from 'src/components/Standup/StanupItem/StanupItem.style';
import { Button } from 'src/components/StateButton/StateButton.style';
import { createResource } from 'src/helpers/createResource';
import { renderSchedule } from 'src/helpers/string';
import { Container, DetailsStandup } from './Details.style';

const Details = () => {
  const [standup, setStanup] = useState<StandupItem>();
  const { id } = useParams<ParamsType>();
  useEffect(() => {
    async function getStandup() {
      let response = await getStandupItemById(id);
      setStanup(response)
    }
    getStandup()
  }, [])
  if (!standup)
  return(<div></div>)
  return (
    <Container>
      <div className="header flex">
        <img src="" alt="" />
        <h2>
          Devops team
        </h2>
      </div>
      <DetailsStandup>
        <LeftContainer>
          <ul>
            <li>State</li>
            <li>Creator</li>
            <li>Schedule</li>
          </ul>
          <ul>
            <li>
              Users
              <ul className="user-list">
                {
                  standup?.users.map((value, key)=><li key={key}>{value}</li>)
                }
              </ul>
            </li>
          </ul>
          <ul>
            <li>Questions</li>
          </ul>
        </LeftContainer>
        <RightContainer>
          <ul>
            <li>
              <Button className={standup?.state}>{standup?.state}</Button>
            </li>
            <li>{standup?.createBy}</li>
            <li>{`${standup?.time} ${renderSchedule(standup?.schedule||[])}`}</li>
          </ul>
        </RightContainer>
        
      </DetailsStandup>

      <ul className="question-container">
        {
          standup?.questions.map((value, key)=><Questions question={value}/>)
        }
        <li><ButtonAddQuestion/></li>
      </ul>

    </Container>
  )
}

export default Details
