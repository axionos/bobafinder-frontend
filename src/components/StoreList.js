import React from 'react';
import Store from './Store'
import Container from 'react-bootstrap/Container'



class StoreList extends React.Component{


  renderStores = () => {

    return this.props.stores.map(store => {

      return <Store
        key={store.id}
        store={store}
      />
    })

  }

  render(){
    // console.log('Search Props', this.props)
    return (
      <Container className="storeList">
        {this.renderStores()}
      </Container>
    );
  }

}
export default StoreList;
