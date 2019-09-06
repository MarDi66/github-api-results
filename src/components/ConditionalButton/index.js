import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleConditionals = ({handleDisplayBlock, handleDisplayList}) => (
  <Button.Group className='conditionButton'>
    <Button onClick={() => handleDisplayList()}>List</Button>
    <Button.Or />
    <Button positive onClick={() => handleDisplayBlock()}>Grid</Button>
  </Button.Group>
)

export default ButtonExampleConditionals