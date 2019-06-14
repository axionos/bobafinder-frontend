import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Store extends React.Component{


  render(){
    // console.log('Store Props', this.props)
    return (

      <Row className="store-container justify-content-md-center">
        <Col></Col>
        <Col md={10} sm={10} xs={6} className="store-conts">
          <div className="store-photo">
            <img src="https://s3-media3.fl.yelpcdn.com/bphoto/mhdNTuThL_Ez7N0nhfztpA/l.jpg" alt="placeholder" />
          </div>
          <div className="store-detail">
            <h4>{this.props.store.name}</h4>
            <p>{this.props.store.address}</p>
            <label className="like">
              <input type="checkbox" name="like" value="like" /> Favorite
            </label>
            <label className="visited">
              <input type="checkbox" name="visited" value="visited" /> Visited
            </label>
          </div>
        </Col>
        <Col></Col>
      </Row>


    );
  }

}
export default Store;
