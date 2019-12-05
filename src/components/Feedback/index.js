import React from 'react'
import { Message } from 'semantic-ui-react'
import ConditionnalButton from '../ConditionalButton'

const Feedback = ({counter, value, handleDisplayBlock, handleDisplayList, display}) => {

    let message = ''
    switch (counter) {
        case 0:
            message = `Votre recherche pour ${value} n\'a donné aucun résultat`;
            break;
        case 1:
            message = `La recherche pour ${value} a donné 1 résultat`;
            break;
        default:
            message = `La recherche pour ${value} a donné ${counter} résultats`
    }
    return (
  <Message className="feedback">
    <p>
      {message}
    </p>
    <ConditionnalButton handleDisplayBlock={handleDisplayBlock} handleDisplayList={handleDisplayList} display={display} />
  </Message>
)}

export default Feedback