import React from 'react'
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';


const BookCard = ({book}) =>
  <div>
    <Card>
    <CardBody>
      <CardTitle>{book.title}</CardTitle>
      <CardText>{book.desc}</CardText>
      <Button>Read</Button>
    </CardBody>
    </Card>
  </div>



export default BookCard
