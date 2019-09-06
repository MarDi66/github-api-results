import React from 'react'
import { Message } from 'semantic-ui-react'

const Feedback = ({counter, value}) => {

    let message = ''
    switch (counter) {
        case 0:
            message = `Votre recherche pour ${value} n\'a donné aucun résultat`;
            break;
        case 1:
            message = `La recherche pour ${value} a donné 1 résultat`;
            break;
        default:
            message = `La recherche pour ${value} a donné ${counter} résultat`
    }
    return (
  <Message className="feedback">
    <p>
      {message}
    </p>
  </Message>
)}

export default Feedback