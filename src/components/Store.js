import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Store extends React.Component{
  state={
    like: false,
    visited: false
  }

  handleClickLike = (e) => {
    console.log(e.target.id)

    this.setState({
      like: !this.state.like
    })
  }

  handleClickVisited = (e) => {
    console.log(e.target.id)

    this.setState({
      visited: !this.state.visited
    })

    fetch('http://localhost:3000/visit',{
      method: "POST",
      headers: {
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => console.log(data.user.id))
  }

  render(){

    return (

      <Row className="store-container justify-content-md-center">
        <Col></Col>
        <Col md={10} sm={10} xs={12} className="store-conts">
          <div className="store-photo">
            <img
              src="https://s3-media3.fl.yelpcdn.com/bphoto/mhdNTuThL_Ez7N0nhfztpA/l.jpg"
              alt="placeholder"
            />
          </div>
          <div className="store-detail">
            <h4>{this.props.store.name}</h4>
            <p>{this.props.store.address}</p>
            <div className="like" onClick={this.handleClickLike} id={this.props.store.id}>
              { this.state.like ?
                  (<img src="https://img.icons8.com/color/26/000000/filled-like.png" alt="full heart" />) : (<img src="https://img.icons8.com/material-outlined/26/000000/filled-like.png" alt="empty heart" id={this.props.store.id} />) }
            </div>
            <div className="visited" onClick={this.handleClickVisited}>
            { this.state.visited ?
                <img src="https://img.icons8.com/color/32/000000/ok.png" alt="full checked"/> : <img src="https://img.icons8.com/material-outlined/32/000000/ok.png" alt="empty checked mark" id={this.props.store.id} /> }
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>


    );
  }

}
export default Store;
