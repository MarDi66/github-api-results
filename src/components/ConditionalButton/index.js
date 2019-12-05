import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleConditionals = ({handleDisplayBlock, handleDisplayList, display}) => (
  <Button.Group className='conditionButton'>
    <Button positive={display === 'list' ? true : false} onClick={(event) => handleDisplayList(event)}>List</Button>
    <Button.Or />
    <Button positive={display === 'block' ? true : false} onClick={(event) => handleDisplayBlock(event)}>Grid</Button>
  </Button.Group>
)

export default ButtonExampleConditionals