import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Store extends React.Component{
  state={
    like: false,
    visited: false
  }

  handleClickLike = () => {
    this.setState({
      like: !this.state.like
    })
  }

  handleClickVisited = () => {
    this.setState({
      visited: !this.state.visited
    })
  }

  render(){
    console.log('Store Props', this.props)
    return (

      <Row className="store-container justify-content-md-center">
        <Col></Col>
        <Col md={10} sm={10} xs={12} className="store-conts">
          <div className="store-photo">
            <img src="https://s3-media3.fl.yelpcdn.com/bphoto/mhdNTuThL_Ez7N0nhfztpA/l.jpg" alt="placeholder" />
          </div>
          <div className="store-detail">
            <h4>{this.props.store.name}</h4>
            <p>{this.props.store.address}</p>
            <div className="like" onClick={this.handleClickLike}>
              { this.state.like ?
                  <img src="https://img.icons8.com/color/26/000000/filled-like.png" alt="full heart" /> : <img src="https://img.icons8.com/material-outlined/26/000000/filled-like.png" alt="empty heart"/> }
            </div>
            <div className="visited" onClick={this.handleClickVisited}>
            { this.state.visited ?
                <img src="https://img.icons8.com/color/32/000000/ok.png" alt="full checked"/> : <img src="https://img.icons8.com/material-outlined/32/000000/ok.png" alt="empty checked mark" /> }
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>


    );
  }

}
export default Store;
