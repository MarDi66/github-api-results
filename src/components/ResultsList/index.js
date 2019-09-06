import React from 'react'
import { List, Image } from 'semantic-ui-react'

const ResultsList = ({data}) => (
  <List>

  {data.map(card => 
    <List.Item key={card.id} className='card-list' >
      <Image avatar src={card.owner.avatar_url} />
      <List.Content>
        <List.Header as='a'>{card.name}</List.Header>
        <List.Description>
          {card.description}
        </List.Description>
      </List.Content>
    </List.Item> )}
    
    
  </List>
)

export default ResultsList;

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

// import React from 'react'
// import { List, Image } from 'semantic-ui-react'

// const ListExampleImage = () => (
//   <List>

//   {data.map(card => 
//     <List.Item key={card.id} className='card' >
//       <Image avatar src={card.owner.avatar_url} />
//       <List.Content>
//         <List.Header as='a'>{card.name}</List.Header>
//         <List.Description>
//           {card.description}
//         </List.Description>
//       </List.Content>
//     </List.Item> )}
    
    
//   </List>
// )

// export default ListExampleImage