import React from 'react';
import Store from './Store'
import Container from 'react-bootstrap/Container'
import {Col, Row} from 'react-bootstrap'



class StoreList extends React.Component{


  renderStores = () => {

    return this.props.stores.map(store => {

      return <Store
        key={store.id}
        store={store}
        favoriteHandler={this.props.favoriteHandler}
        visitedHandler={this.props.visitedHandler}
      />
    })

  }

  render(){
    console.log('Search Props', this.props)
    return (
      <Container className="storeList">
        <div className='search-result-container'>
          <span className='search-result'>{this.props.stores.length} stores found</span>
        </div>
        {this.renderStores()}
      </Container>
    );
  }

}
export default StoreList;
