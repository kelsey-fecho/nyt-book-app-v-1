import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';


const BookCard = ({book}) =>
  <div>
    <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
    <CardBody>
      <CardTitle>{book.title}</CardTitle>
      <CardText>{book.desc}</CardText>
      <Button>Read</Button>
    </CardBody>
    </Card>
  </div>



export default BookCard
