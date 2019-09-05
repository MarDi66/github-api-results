import React from 'react'
import { Button } from 'semantic-ui-react'
import { FaListUl, FaGripHorizontal } from 'react-icons/fa'

const ConditionalButton = () => (
  <Button.Group>
    <Button>List</Button>
    <Button.Or />
    <Button positive>Grid</Button>
  </Button.Group>
)

export default ConditionalButton