import React from 'react';
import Store from './Store'
import Container from 'react-bootstrap/Container'



class StoreList extends React.Component{

  renderStores = () => {
    // fetch request for all UserStores
    // arr of userstores
    return this.props.stores.map(store => {
      // find_by(user_id , store.id)
      return <Store
        key={store.id}
        store={store}/>
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
