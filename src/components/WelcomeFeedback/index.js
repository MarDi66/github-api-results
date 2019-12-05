import React from 'react'
import { Message } from 'semantic-ui-react'
import ConditionnalButton from '../ConditionalButton'

import './index.sass'

const WelcomeFeedback = ({ handleDisplayBlock, handleDisplayList, display }) => {

    return (
  <Message className="feedback">
    <p>
      Bienvenue ! Veuillez effectuer votre recherche
    </p>
    <ConditionnalButton handleDisplayBlock={handleDisplayBlock} handleDisplayList={handleDisplayList} display={display} />
  </Message>
)}

export default WelcomeFeedback