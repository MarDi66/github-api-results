import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleConditionals = ({handleDisplayBlock, handleDisplayList, gridPositive, listPositive}) => (
  <Button.Group className='conditionButton'>
    <Button positive={listPositive} onClick={(event) => handleDisplayList(event)}>List</Button>
    <Button.Or />
    <Button positive={gridPositive} onClick={(event) => handleDisplayBlock(event)}>Grid</Button>
  </Button.Group>
)

export default ButtonExampleConditionals