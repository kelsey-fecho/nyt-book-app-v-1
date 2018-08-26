import React from 'react'
import { Card, CardText, CardSubtitle, CardBody, CardTitle, Button } from 'reactstrap';


const BookCard = ({book}) =>
  <div>
    <Card inverse style={{ backgroundColor: '#d5beae', margin: '1.25rem auto' }}>
    <CardBody>
      <CardTitle>{book.title}</CardTitle>
      <CardSubtitle>{book.author}</CardSubtitle>
      <CardText>{book.desc}</CardText>
      <Button>Read</Button>
    </CardBody>
    </Card>
  </div>



export default BookCard
