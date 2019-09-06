import React from 'react'
import { Card, Image } from 'semantic-ui-react';
import { FaListUl, FaGripHorizontal } from 'react-icons/fa'

const ResultsBlocks = ({data, handlePointerEnter, handlePointerLeave, filteredData}) => (
  <Card.Group className="card-group">
  <div className='hiddenDiv'>
    {filteredData.map(i => <p>{i.description}</p>)}
  </div>

  {data.map(card => <Card onPointerEnter={handlePointerEnter(card.id)} onPointerLeave={(event) => handlePointerLeave(event)} key={card.id} className='card'>
    <Card.Content>
        <Image
        className="image"
        floated='right'
        size='mini'
        src={card.owner.avatar_url}
        />
        <Card.Header>{card.name}</Card.Header>
        <Card.Meta><strong>Développeur : </strong>{card.owner.login}</Card.Meta>
        <Card.Description>
            {card.description}
        </Card.Description>
        </Card.Content>
    </Card>)}

  </Card.Group>
)

export default ResultsBlocks;

// <Card>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
//         />
//         <Card.Header>Steve Sanders</Card.Header>
//         <Card.Meta>Friends of Elliot</Card.Meta>
//         <Card.Description>
//           Steve wants to add you to the group <strong>best friends</strong>
//         </Card.Description>
//       </Card.Content>
//     </Card>

// <FaListUl size={25} onClick={() => handleDisplayList()} />
//     <span>ou</span>
//     <FaGripHorizontal size={25} onClick={() => handleDisplayBlock()} />