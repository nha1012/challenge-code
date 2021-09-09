import React from 'react'
import { Button } from './StateButton.style'

const StateButton = (props: {state: string}) => {
  return (
    <div>
      <Button className={props.state}>{props.state}</Button>
    </div>
  )
}

export default StateButton
