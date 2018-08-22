import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';


const OppCard = ({opp}) =>
  <div>
    <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
    <CardBody>
      <CardTitle>{opp.title}</CardTitle>
      <CardText>{opp.desc}</CardText>
      <Button>Button</Button>
    </Card>
  </div>



export default OppCard
