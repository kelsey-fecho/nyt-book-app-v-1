import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col} from 'reactstrap'
import OppCard from '../components/OppCard'

class Opportunities extends Component {
  render() {
    return(
      <Container>
        <Row>
          {this.props.opps.map(opp => <Col sm="4"><OppCard opp={opp}/></Col>)}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    opps: state.opps
  }
}

export default connect(mapStateToProps, null)(Opportunities);
