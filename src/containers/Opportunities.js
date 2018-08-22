import React, {Component} from 'react'
import {connect} from 'react-redux'
import OppCard from '../components/OppCard'

class Opportunities extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {opps.map(opp => <OppCard />)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    opps: state.opps
  }
}

export default connect(mapStateToProps, null)(Quotes);
