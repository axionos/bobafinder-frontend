import React from 'react';
import Store from './Store'
import Container from 'react-bootstrap/Container'



class StoreList extends React.Component{


  renderStores = () => {

    return this.props.stores.map(store => {
      // find_by(user_id , store.id)
      const storeProps = this.props.userStores.filter((userStore)=>{
        return userStore.store_id === store.id
      })

      // if (storeProps > 0){
      //   debugger
      //
      // }

      return <Store
        key={store.id}
        store={store}
        visited={ storeProps.length > 0 ? storeProps[0].visited : undefined }
        favorite={ storeProps.length > 0 ? storeProps[0].visited : undefined }
      />
    })
  }

  render(){
    console.log('Search Props', this.props)
    return (
      <Container className="storeList">
        {this.renderStores()}
      </Container>
    );
  }

}
export default StoreList;
