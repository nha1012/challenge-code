import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import ButtonAddQuestion from 'src/components/Questions/ButtonAddQuestion';
import Questions from 'src/components/Questions/Questions';
import { LeftContainer, RightContainer } from 'src/components/Standup/StanupItem/StanupItem.style';
import { Button } from 'src/components/StateButton/StateButton.style';
import { renderSchedule } from 'src/helpers/string';
import { Container, DetailsStandup } from './Details.style';
import { getStandupItemById } from 'src/apis/standups.api';
import backImage from '../../assets/image/back.png'
import { PATH } from 'src/constants/paths';
const Details = () => {
  const { id } = useParams<ParamsType>();
  const history = useHistory();
  let [standup, setStandup] = useState<StandupItem>();

  const backToHome=()=>{
    history.push(PATH.HOME);
  }
  useEffect(() => {
    getStandupItemById(id)
      .then(response=>{
        setStandup(response)
      })
  },[])
  
  if (!standup)
  return(<div></div>)
  return (
    <Container>
      <div className="header-details">
        <img src={backImage} width="30" height="30" alt="" onClick={backToHome}/>
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
                  standup.users ? standup?.users.map((value, key)=><li key={key}>{value}</li>) : null
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
              <Button className={standup.state}>{standup.state}</Button>
            </li>
            <li>{standup?.createBy}</li>
            <li>{`${standup?.time} ${renderSchedule(standup?.schedule||[])}`}</li>
          </ul>
        </RightContainer>
        
      </DetailsStandup>

      <ul className="question-container">
        {
          standup.questions ? standup?.questions.map((value, key)=><Questions question={value}/>) : null
        }
        <li><ButtonAddQuestion/></li>
      </ul>

    </Container>
  )
}

export default Details
